// Zurich Lyon module

// 鉄道ルート チューリッヒ⇔ベルン⇔ジュネーブ⇔リヨン駅　//
const Zurich_HB_3 = [47.37828613669217, 8.539567674375348];
const Aarau_2 = [47.39130707458747, 8.051470595831386];
const Olten_e_2 = [47.358776575085656, 7.925371665693845];
const Bern = [46.948380752911675, 7.43530795120567];
const Fribourg = [46.803290415343206, 7.150914818179362];
const Romont = [46.69358760965649, 6.911767779438169];
const Grandvaux = [46.49693410356502, 6.722628918803512];
const Bossière = [46.509697745589754, 6.699316196822455];
const Lausanne = [46.51675788314949, 6.6288213303053105];
const Morges = [46.511250548989395, 6.4938441327181184];
const Nyon = [46.38436387900231, 6.235928505138236];
const Geneva = [46.20996053976771, 6.141703085164053];

// チューリッヒ⇔ベルン⇔ジュネーブ⇔リヨンのルート
const SBB_Geneva = L.polyline
([Zurich_HB_3,Aarau_2,Olten_e_2,Bern,Fribourg,Romont,Grandvaux,Bossière,Lausanne,
  Morges,Nyon,Geneva], { color: '#000000' }).addTo(map);

// Zurich → Geneva へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const GenevaBtn = document.getElementById('ZurichToGenevaCard');
  if (GenevaBtn) {
    const newBtn = GenevaBtn.cloneNode(true);
    GenevaBtn.parentNode.replaceChild(newBtn, GenevaBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        ZurichToGeneva();
      }
    });
  }
  })

function ZurichToGeneva() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerZurich.closePopup(); // ← 移動前にZurich（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Zurich_HB_3, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(SBB_Geneva , 50);// ← 数字が少ないほどスピードアップ

  const GenevaIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Geneva[0]) < 0.0001 && 
    Math.abs(p[1] - Geneva[1]) < 0.0001
  );

  const pathToGeneva = fullPath.slice(0, GenevaIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToGeneva.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToGeneva.length) {
      trainMarker.setLatLng(pathToGeneva[index]); // ← マーカーを移動
      map.panTo(pathToGeneva[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerGeneva.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Geneva　→　Zurichへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const GenevaToZurichBtn = document.getElementById('GenevaToZurichCard');
  if (GenevaToZurichBtn) {
    const newBtn = GenevaToZurichBtn.cloneNode(true);
    GenevaToZurichBtn.parentNode.replaceChild(newBtn, GenevaToZurichBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        GenevaToZurich();
      }
    });
  }
  })

function GenevaToZurich() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerGeneva.closePopup(); // ← 移動前にGenevaのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Geneva, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(SBB_Geneva, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const GenevaToZurichIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Zurich_HB_3[0]) < 0.0001 && 
    Math.abs(p[1] - Zurich_HB_3[1]) < 0.0001
  );

  const pathToGenevaToZurich = fullPath.slice(0, GenevaToZurichIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToGenevaToZurich[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToGenevaToZurich.length) {
      trainMarker.setLatLng(pathToGenevaToZurich[index]); // ← マーカーを移動
      map.panTo(pathToGenevaToZurich[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerZurich.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}



