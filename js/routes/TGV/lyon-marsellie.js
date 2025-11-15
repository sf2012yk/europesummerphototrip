// Lyon Marsellie module


// 鉄道ルート　⇔マルセイユ//
const LyonPartDieu_3 = [45.7603030076784, 4.860375801911088]; //リヨン・パールデュー駅
const VilletteSud = [45.757094147649305, 4.860051639219282];
const AvFelixFaure = [45.75381500329979, 4.860663475405628];
const CrAlbertThomas = [45.74952074982565, 4.859875275194564];
const LyceeColbert = [45.7457449384269, 4.858784374256779];
//カーブ南東//
const AvBerthelot_n = [45.742485810555536,4.857893609095485];
const Cn_AvBerthelot = [
(45.742485810555536 + 45.739965594048115) / 2 - 0.0009, //東//
(4.857893609095485 + 4.854874208882264) / 2 - 0.0004 //南//
];
const AvBerthelot_s = [45.739965594048115,4.854874208882264];
const CP_AvBerthelot = adaptiveBezierCurve(AvBerthelot_n,Cn_AvBerthelot,AvBerthelot_s,1);
const CP_AvBerthelot_Un = resamplePath(CP_AvBerthelot, 2);
//カーブ北西//
const GrandTrou_n = [45.73881478027993,4.850362504371486];
const Cn_GrandTrou = [
(45.73881478027993 + 45.736392633420834) / 2 - 0.0005, //西//
(4.850362504371486 + 4.849035588334629) / 2 - 0.0015 //北//
];
const GrandTrou_s = [45.736392633420834,4.849035588334629];
const CP_GrandTrou = adaptiveBezierCurve(GrandTrou_n,Cn_GrandTrou,GrandTrou_s,1);
const CP_GrandTrou_Un = resamplePath(CP_GrandTrou, 2);
const ClosLayat_n = [45.73271330811328, 4.849811775777003];
const ClosLayat = [45.72653238836609, 4.847897954553375];
//カーブ南東//
const AvdeSurville_n = [45.72004792193943,4.849224870627579];
const Cn_AvdeSurville = [
(45.72004792193943 + 45.71529098042065) / 2 - 0.0019, //東//
(4.849224870627579 + 4.8554511690062006) / 2 - 0.0014 //南//
];
const AvdeSurville_s = [45.71529098042065,4.8554511690062006];
const CP_AvdeSurville = adaptiveBezierCurve(AvdeSurville_n,Cn_AvdeSurville,AvdeSurville_s,1);
const CP_AvdeSurville_Un = resamplePath(CP_AvdeSurville, 2);
const LArsenal_e = [45.71235104867586, 4.869664476002921];
const AvPierreSemand = [45.710135778447686, 4.875510380365793];
const Vénissieux = [45.70532364471229, 4.887282452090849];
const BerlietGare = [45.691505779767844, 4.9220129774006205];
const SaintPriest = [45.68657086984228, 4.934064865791185];
const RtedeMions = [45.68184402435203, 4.947885340487236];
const RteHeyrieux = [45.67833906991585, 4.963396455994276];
const FouillouseSt = [45.673763289062244, 4.983929150709319];
const RuePasteau = [45.67216813060381, 4.991043210786837];
//カーブ北東//
const Grenay_n = [45.654917827964496,5.068989831975236];
const Cn_Grenay = [
(45.654917827964496 + 45.64528132518322) / 2 + 0.0019, //東//
(5.068989831975236 + 5.08299172713756) / 2 + 0.0014 //北//
];
const Grenay_s = [45.64528132518322,5.08299172713756];
const CP_Grenay = adaptiveBezierCurve(Grenay_n,Cn_Grenay,Grenay_s,1);
const CP_Grenay_Un = resamplePath(CP_Grenay, 2);
const LaForêt_2 = [45.56516653902248, 5.104658524776694];
const CombeQuartier_2 = [45.41745709910109, 5.01563875530614];
const Primarette_2 = [45.406703402212784, 5.009811293609299];
const BoisVieux_2 = [45.33647413648269, 4.995057105292132];
const LapeyrouseMornay_2 = [45.32614144782753, 4.989401858620546];
const MorasenValloire_2 = [45.29068490914984, 4.9735915138902005];
const LaMeyerie_2 = [45.28381001685998, 4.970366538193518];
const LesMoillés_n_2 = [45.24588915146935, 4.950638458662288];
const LesMoillés_2 = [45.23525223777902, 4.945841146779383];
const ValanceTGV_2 = [44.99213360290364, 4.978715224442389];

const LaBergère_2 = [44.97780953336272, 4.981194253076088];
const RuedesBarrys_2 = [44.97036332559322, 4.982685113553894];
const LesPetitsEynards_2 = [44.964667832800565, 4.984673540397212];
const RuedesBouviers_2 = [44.95726203305519, 4.98838676844047];
const LesMourières_n_2 = [44.944785178154184, 4.996419141430043];
const LesGouvernaux_2 = [44.90359556297324, 5.002917443884974];
const LaPaillette_2 = [44.84299136835223, 5.004965264908423];
const LesBatailles_2 = [44.819774724542754, 5.007681154362502];
const Upie_2 = [44.790759174754804, 5.00647178691178];
const LeChêne_2 = [44.26954610431159, 4.696176140866814];
const Roquemaure_2 = [44.05563600077135, 4.756768911151551];
const LaLanguedocienne_2 = [44.02765076700931, 4.745483705881195];
const NimeAvignonJn_2 = [43.958142718398655, 4.740847744117171];
const AvignonTGV_2 = [43.921860522309714, 4.7862436364951195];
const CavaillonSouth_2 = [43.82294071852314, 5.0280157691120015];
const QuartierLaTapie_2 = [43.73643752709295, 5.142529055561508];
const Alleins_n_2 = [43.7296514462321, 5.14881709616884];
const Alleins_2 = [43.72063458003264, 5.157988634119741];
const Alleins_s_2 = [43.71133558448047, 5.171364383075091];
const AixenProvenceTGV_2 = [43.45514625512808, 5.317246630420725];
const FermedesPlaines_2 = [43.42792542181515, 5.329829052312838];
const LesGiraudets_2 = [43.41211515730249, 5.333976094464708];
const LesMatelots_2 = [43.387601385544095, 5.337385864846756];
//カーブ南東//
const LaCastellane_n_2 = [43.36595219576065,5.340418664674906];
const Cn_LaCastellane_2 = [
(43.36595219576065 + 43.359018804920666) / 2 - 0.0009, //東//
(5.340418664674906 + 5.345671412739333) / 2 + 0.0004 //南//
];
const LaCastellane_s_2 = [43.359018804920666,5.345671412739333];
const CP_LaCastellane_2 = adaptiveBezierCurve(LaCastellane_n_2,Cn_LaCastellane_2,LaCastellane_s_2,1);
const CP_LaCastellane_Un_2 = resamplePath(CP_LaCastellane_2,2);
const SaintLouisML_2 = [43.350268146390434, 5.358758231582732];
const LaDelorme_2 = [43.34290304350793, 5.369808943582118];
//カーブ北東//
const PiconBusserine_n_2 = [43.33221162046616,5.3857200231471305];
const Cn_PiconBusserine_2 = [
(43.33221162046616 + 43.32581108533974) / 2 + 0.0009, //東//
(5.3857200231471305 + 5.39147213244208) / 2 + 0.0004 //北//
];
const PiconBusserine_s_2 = [43.32581108533974,5.39147213244208];
const CP_PiconBusserine_2 = adaptiveBezierCurve(PiconBusserine_n_2,Cn_PiconBusserine_2,PiconBusserine_s_2,1);
const CP_PiconBusserine_Un_2 = resamplePath(CP_PiconBusserine_2, 2);

const StadePhilibert_2 = [43.32303032593156, 5.392600761385753];
const EVJFMarseille_2 = [43.320247461879525, 5.393107015958043];

const BdGuigou_2 = [43.31423093388073, 5.393367311245729];
const RueFrançoisSimon_2 = [43.31173091149649, 5.392747548859577];
const RueBénédit_2 = [43.309174664144955, 5.391015038914801];
const BdNational_2 = [43.304974365815006, 5.384609923836039];
const Marseille_2 = [43.303077109875375, 5.3805544238165535];

// 経由地を含むルート
const LGV_SE_LYMR = L.polyline([
    LyonPartDieu_3,VilletteSud,AvFelixFaure,CrAlbertThomas,LyceeColbert,
    ...CP_AvBerthelot_Un,...CP_GrandTrou_Un,ClosLayat_n,ClosLayat,
    ...CP_AvdeSurville_Un,LArsenal_e,AvPierreSemand,Vénissieux,BerlietGare,SaintPriest,
    RtedeMions,RteHeyrieux,FouillouseSt,RuePasteau,...CP_Grenay_Un,
    LaForêt_2,CombeQuartier_2,Primarette_2,BoisVieux_2,LapeyrouseMornay_2,
    MorasenValloire_2,LaMeyerie_2,LesMoillés_n_2,LesMoillés_2,
    ValanceTGV_2,LaBergère_2,RuedesBarrys_2,LesPetitsEynards_2,RuedesBouviers_2,
    LesMourières_n_2,LesGouvernaux_2,LaPaillette_2,LesBatailles_2,Upie_2,
    LeChêne_2,Roquemaure_2,LaLanguedocienne_2,NimeAvignonJn_2,
    AvignonTGV_2,CavaillonSouth_2,QuartierLaTapie_2,Alleins_n_2,Alleins_2,Alleins_s_2,
    AixenProvenceTGV_2,FermedesPlaines_2,LesGiraudets_2,LesMatelots_2,
    ...CP_LaCastellane_Un_2,SaintLouisML_2,LaDelorme_2,
    ...CP_PiconBusserine_Un_2,StadePhilibert_2,EVJFMarseille_2,
    BdGuigou_2,RueFrançoisSimon_2,RueBénédit_2,BdNational_2,
    Marseille_2], { color: '#000000' }).addTo(map);


// Lyon → Marseille へ滑らかに移動する関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const LyonToMarseilleBtn = document.getElementById('LyonToMarseilleCard');
  if (LyonToMarseilleBtn) {
    const newBtn = LyonToMarseilleBtn.cloneNode(true);
    LyonToMarseilleBtn.parentNode.replaceChild(newBtn, LyonToMarseilleBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        LyonToMarseille();
      }
    });
  }
  })

function LyonToMarseille() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerPartDieu.closePopup(); // ← 移動前にLyon（始発）のポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(LyonPartDieu_3, { icon: trainIcon }).addTo(map);

  const fullPath = interpolatePolyline(LGV_SE_LYMR , 50);// ← 数字が少ないほどスピードアップ

  const LyonToMarseilleIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - Marseille_2[0]) < 0.0001 && 
    Math.abs(p[1] - Marseille_2[1]) < 0.0001
  );

  const pathToLyonToMarseille = fullPath.slice(0, LyonToMarseilleIndex + 1);
  // ✅ ここに animatePath を定義
  const totalFrames = pathToLyonToMarseille.length;
  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToLyonToMarseille.length) {
      trainMarker.setLatLng(pathToLyonToMarseille[index]); // ← マーカーを移動
      map.panTo(pathToLyonToMarseille[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）50座標 × 30ms = 約1.5秒
    } else {
      setTimeout(() => {
        markerMarseille.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}

// Marseille　→　Lyonへ滑らかに戻る関数
//イベント登録を無制限制限
map.on('popupopen', function (e) {
  const MarseilleToLyonBtn = document.getElementById('MarseilleToLyonCard');
  if (MarseilleToLyonBtn) {
    const newBtn = MarseilleToLyonBtn.cloneNode(true);
    MarseilleToLyonBtn.parentNode.replaceChild(newBtn, MarseilleToLyonBtn);

    newBtn.addEventListener('click', () => {
      if (!animationRunning) {
        MarseilleToLyon();
      }
    });
  }
  })

function MarseilleToLyon() {
  if (animationRunning) return; // ← すでに動いていたら何もしない
  animationRunning = true;

  markerMarseille.closePopup(); // ← 移動前にMarseilleのポップアップを閉じる

  // 🚄 アイコン付きマーカーを表示（初期位置）
  const trainIcon = L.icon({
    iconUrl: "image/icon/train_test.png",// アイコン画像のURL
    iconRetinaUrl:"image/icon/train_test@2x.png",
    iconSize: [40, 40],
    iconAnchor: [25, 25],
    className: "icon-train"
  });

  const trainMarker = L.marker(Marseille_2, { icon: trainIcon }).addTo(map);

  const fullPath = [...interpolatePolyline(LGV_SE_LYMR, 50)].reverse();// ← 数字が少ないほどスピードアップ

  const MarseilleToLyonIndex = fullPath.findIndex(p => 
    Math.abs(p[0] - LyonPartDieu_3[0]) < 0.0001 && 
    Math.abs(p[1] - LyonPartDieu_3[1]) < 0.0001
  );

  const pathToMarseilleToLyon = fullPath.slice(0, MarseilleToLyonIndex + 1);
  
// 最初にジャンプを防ぐ
  map.panTo(pathToMarseilleToLyon[0], { animate: false });


  let frame = 0;

  function animate() {
   
   const index = frame;

    if (index < pathToMarseilleToLyon.length) {
      trainMarker.setLatLng(pathToMarseilleToLyon[index]); // ← マーカーを移動
      map.panTo(pathToMarseilleToLyon[index], { animate: true, duration: 0.03 });
      frame++;
      setTimeout(animate, 20); // ← 速度調整（数字が少ないほどスピードアップ）
    } else {
      setTimeout(() => {
        markerPartDieu.openPopup();
        map.removeLayer(trainMarker); // アイコンを削除
        animationRunning = false;
      }, 100);

    }
  }
  animate();
}


