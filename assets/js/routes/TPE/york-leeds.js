// 鉄道ルート
const York_TPE = [53.95668456824942, -1.0946599488952553]; //York駅
const Ulleskelf = [53.85361980430283, -1.214101132593846];
const ChurchFenton = [53.82702456122147, -1.2274416849720335];
const Micklefield = [53.78880785491498, -1.3270164558265671];
const CrossGates = [53.804782340169574, -1.4521480317575879];

const Leeds_TPE = [53.7946841310327, -1.5475408292829431];


// ルート
const TPE_YkLd = L.polyline([
York_TPE,Ulleskelf,ChurchFenton,Micklefield,CrossGates,
Leeds_TPE], { color: '#000000' }).addTo(map);

// York → Leeds へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const YorkToLeedsBtn = document.getElementById('YorkToLeedsCard');
  if (YorkToLeedsBtn) {
    const newBtn = YorkToLeedsBtn.cloneNode(true);
    YorkToLeedsBtn.parentNode.replaceChild(newBtn, YorkToLeedsBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        YorkToLeeds();
      }
    });
  }
  })

function YorkToLeeds() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerYork.closePopup(); // ← 移動前にYork（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "../../assets/image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"../../assets/image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(York_TPE, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(TPE_YkLd , 50);// ← 数字が少ないほどスピードアップ

  const YorkToLeedsIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Leeds_TPE[0]) < 0.0001 && 
    Math.abs(p[1] - Leeds_TPE[1]) < 0.0001
  );

  const pathToYorkToLeeds = fullPath.slice(0, YorkToLeedsIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToYorkToLeeds.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToYorkToLeeds.length) {
      trainMarker.setLatLng(pathToYorkToLeeds[index]); // ← マーカーを移動
      map.panTo(pathToYorkToLeeds[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerLeeds.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}


// Leeds　→　Yorkへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const LeedsToYorkBtn = document.getElementById('LeedsToYorkCard');
  if (LeedsToYorkBtn) {
    const newBtn = LeedsToYorkBtn.cloneNode(true);
    LeedsToYorkBtn.parentNode.replaceChild(newBtn, LeedsToYorkBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        LeedsToYork();
      }
    });
  }
  })

function LeedsToYork() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerLeeds.closePopup(); // ← 移動前にLeedsのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "../../assets/image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"../../assets/image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Leeds_TPE, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(TPE_YkLd, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const LeedsToYorkIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - York_TPE[0]) < 0.0001 && 
    Math.abs(p[1] - York_TPE[1]) < 0.0001
  );

  const pathToLeedsToYork = fullPath.slice(0, LeedsToYorkIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToLeedsToYork[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToLeedsToYork.length) {
      trainMarker.setLatLng(pathToLeedsToYork[index]); // ← マーカーを移動
      map.panTo(pathToLeedsToYork[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerYork.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}





