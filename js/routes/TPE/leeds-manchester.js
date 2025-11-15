// 鉄道ルート
const Leeds_TPE2 = [53.7946841310327, -1.5475408292829431];
const Huddersfield = [53.64885254149166, -1.7846598854484796];
const Slaithwaite = [53.62376959895857, -1.8817345483493046];
const Marsden_Tn = [53.60345620063153, -1.9421567681417484];
const Diggle_Tn = [53.56973088047885, -1.9899926478783712];
const Stalybridge = [53.484233779647916, -2.0634421530388227];
const ManchesterVictoria = [53.48801914740246, -2.242868001441824];
const GreenGate = [53.48639762805274, -2.2474470445825405];
const ViaductSt = [53.4854414135793, -2.2504030007369735];
const BurySt = [53.48498868774298, -2.251633181710365];
const ChapelSt_MC = [53.483865549457335, -2.25347099734181];
const SalfordCentral = [53.482893886517125, -2.2552759490172036];
const Deansgate = [53.47418133467857, -2.2510124912367457];
const OxfordRoad_MC = [53.47383767483756, -2.242495874564298];
const Manchester_TPE = [53.476339968144806, -2.228709801502412];

// ルート
const TPE_LdMc = L.polyline([
Leeds_TPE2,Huddersfield,Slaithwaite,Marsden_Tn,Diggle_Tn,Stalybridge,
ManchesterVictoria,GreenGate,ViaductSt,BurySt,ChapelSt_MC,SalfordCentral,
Deansgate,OxfordRoad_MC,Manchester_TPE], { color: '#000000' }).addTo(map);


// Leeds → Manchester へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const LeedsToManchesterBtn = document.getElementById('LeedsToManchesterCard');
  if (LeedsToManchesterBtn) {
    const newBtn = LeedsToManchesterBtn.cloneNode(true);
    LeedsToManchesterBtn.parentNode.replaceChild(newBtn, LeedsToManchesterBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        LeedsToManchester();
      }
    });
  }
  })

function LeedsToManchester() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerLeeds.closePopup(); // ← 移動前にLeeds（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Leeds_TPE2, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(TPE_LdMc , 50);// ← 数字が少ないほどスピードアップ

  const LeedsToManchesterIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Manchester_TPE[0]) < 0.0001 && 
    Math.abs(p[1] - Manchester_TPE[1]) < 0.0001
  );

  const pathToLeedsToManchester = fullPath.slice(0, LeedsToManchesterIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToLeedsToManchester.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToLeedsToManchester.length) {
      trainMarker.setLatLng(pathToLeedsToManchester[index]); // ← マーカーを移動
      map.panTo(pathToLeedsToManchester[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerManchester.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}


// Manchester　→　Leedsへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const ManchesterToLeedsBtn = document.getElementById('ManchesterToLeedsCard');
  if (ManchesterToLeedsBtn) {
    const newBtn = ManchesterToLeedsBtn.cloneNode(true);
    ManchesterToLeedsBtn.parentNode.replaceChild(newBtn, ManchesterToLeedsBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        ManchesterToLeeds();
      }
    });
  }
  })

function ManchesterToLeeds() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerManchester.closePopup(); // ← 移動前にManchesterのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Manchester_TPE, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(TPE_LdMc, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const ManchesterToLeedsIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Leeds_TPE2[0]) < 0.0001 && 
    Math.abs(p[1] - Leeds_TPE2[1]) < 0.0001
  );

  const pathToManchesterToLeeds = fullPath.slice(0, ManchesterToLeedsIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToManchesterToLeeds[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToManchesterToLeeds.length) {
      trainMarker.setLatLng(pathToManchesterToLeeds[index]); // ← マーカーを移動
      map.panTo(pathToManchesterToLeeds[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
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





