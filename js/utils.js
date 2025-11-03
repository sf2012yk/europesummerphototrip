
//※最初に読み込まれなければならない関数//

//findClosestIndex() を使って座標を探す
function findClosestIndex(path, target) {
  let minDist = Infinity;
  let closestIndex = -1;
  path.forEach((p, i) => {
    const dist = getDistance(p, target);
    if (dist < minDist) {
      minDist = dist;
      closestIndex = i;
    }
  });
  return closestIndex;
}

// 補間関数（ベジェ風カーブ）
function bezierCurve(p1, cp, p2, steps = 30) {
  const curvePoints = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const lat = (1 - t) * (1 - t) * p1[0] + 2 * (1 - t) * t * cp[0] + t * t * p2[0];
    const lng = (1 - t) * (1 - t) * p1[1] + 2 * (1 - t) * t * cp[1] + t * t * p2[1];
    curvePoints.push([lat, lng]);
  }
  return curvePoints;
}

//距離に応じてステップ数を調整するベジェ補間
function adaptiveBezierCurve(p1, cp, p2, baseStep = 50) {
  const approxLength =
    getDistance(p1, cp) + getDistance(cp, p2); // 曲線の概算距離
  const steps = Math.max(10, Math.round((approxLength / 100) * baseStep)); // 100mごとにbaseStep個
  return bezierCurve(p1, cp, p2, steps);
}

function animatePath(path, marker, onComplete) {
  const totalDistance = calculateTotalDistance(path);
  const targetDuration = 3000; // 全体移動時間（ミリ秒）

  let frame = 0;

  function animate() {
    if (frame < path.length - 1) {
      const segmentDistance = getDistance(path[frame], path[frame + 1]);
      const segmentDuration = (segmentDistance / totalDistance) * targetDuration;

      marker.setLatLng(path[frame]);
      map.panTo(path[frame], { animate: true, duration: 0.01 });

      frame++;
      setTimeout(animate, segmentDuration);
    } else {
      marker.setLatLng(path[path.length - 1]);
      map.panTo(path[path.length - 1], { animate: true, duration: 0.01 });

      if (onComplete) onComplete();
    }
  }

  animate();
}

function interpolatePolyline(path, segmentLengthMeters = 5) {
  const cumDist = getCumulativeDistances(path);
  const total = cumDist[cumDist.length - 1];
  const numPoints = Math.floor(total / segmentLengthMeters);
  const interval = total / numPoints;

  const resampled = [path[0]];
  let targetDist = interval;
  let i = 1;

  while (i < path.length && resampled.length < numPoints) {
    if (cumDist[i] >= targetDist) {
      const overshoot = cumDist[i] - targetDist;
      const segmentLength = cumDist[i] - cumDist[i - 1];
      const ratio = 1 - overshoot / segmentLength;

      const lat = path[i - 1][0] + (path[i][0] - path[i - 1][0]) * ratio;
      const lng = path[i - 1][1] + (path[i][1] - path[i - 1][1]) * ratio;

      resampled.push([lat, lng]);
      targetDist += interval;
    } else {
      i++;
    }
  }

  resampled.push(path[path.length - 1]);
  return resampled;
}


//補助関数（距離計算）
function getDistance(p1, p2) {
  const R = 6371e3; // 地球半径（メートル）
  const lat1 = p1[0] * Math.PI / 180;
  const lat2 = p2[0] * Math.PI / 180;
  const dLat = (p2[0] - p1[0]) * Math.PI / 180;
  const dLng = (p2[1] - p1[1]) * Math.PI / 180;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // 距離（メートル）
}

function calculateTotalDistance(path) {
  let total = 0;
  for (let i = 0; i < path.length - 1; i++) {
    total += getDistance(path[i], path[i + 1]);
  }
  return total;
}

// 累積距離を計算する関数
function getCumulativeDistances(path) {
  const distances = [0];
  for (let i = 1; i < path.length; i++) {
    const d = getDistance(path[i - 1], path[i]);
    distances.push(distances[i - 1] + d);
  }
  return distances;
}


// 等距離補間関数
function resamplePath(path, numPoints) {
  const cumDist = getCumulativeDistances(path);
  const total = cumDist[cumDist.length - 1];
  const interval = total / (numPoints - 1);
  const resampled = [path[0]];
  let targetDist = interval;
  let i = 1;

  while (resampled.length < numPoints && i < path.length) {
    if (cumDist[i] >= targetDist) {
      const overshoot = cumDist[i] - targetDist;
      const segmentLength = cumDist[i] - cumDist[i - 1];
      const ratio = 1 - overshoot / segmentLength;

      const lat = path[i - 1][0] + (path[i][0] - path[i - 1][0]) * ratio;
      const lng = path[i - 1][1] + (path[i][1] - path[i - 1][1]) * ratio;

      resampled.push([lat, lng]);
      targetDist += interval;
    } else {
      i++;
    }
  }

  return resampled;
}