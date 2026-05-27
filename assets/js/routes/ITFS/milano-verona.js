// 鉄道ルート ミラノ⇔ベローナ　//
const MilanotoVerona = [45.486022373628984, 9.20430169797116];
const Centrale_NEVR = [45.49380541011251, 9.211797676557616];
//カーブ北西//
const LambrateVR_n = [45.487082207853156,9.235215552985125];
const Cn_LambrateVR = [
(45.487082207853156 + 45.482734517381274) / 2 + 0.0009, //西//
(9.235215552985125 + 9.23811233867622) / 2 + 0.0004 //北//
];
const LambrateVR_s = [45.482734517381274,9.23811233867622];
const CP_LambrateVR = adaptiveBezierCurve(LambrateVR_n,Cn_LambrateVR,LambrateVR_s,1);
const CP_LambrateVR_Un = resamplePath(CP_LambrateVR, 7);

//カーブ南東//
const Ortica_n = [45.47552450279962,9.238890436283109];
const Cn_Ortica = [
(45.47552450279962 + 45.47155210853305) / 2 - 0.0024, //東//
(9.238890436283109 + 9.247988488958606) / 2 - 0.0044 //南//
];
const Ortica_s = [45.47155210853305,9.247988488958606];
const CP_Ortica = adaptiveBezierCurve(Ortica_n,Cn_Ortica,Ortica_s,1);
const CP_Ortica_Un = resamplePath(CP_Ortica, 10);

const Segrate = [45.480532923204386, 9.29858937047377];

const PioltelloLimito = [45.486030449353976, 9.329565534594943];
const Trenzanesio = [45.4917467319537, 9.36055041317656];
const Vignate = [45.49371084923613, 9.37400377459875];
const Melzo = [45.50203517123801, 9.419272363468965];

//カーブ南東//
const PozzuoloMartesana_w = [45.50707391549139,9.449117417779963];
const Cn_PozzuoloMartesana = [
(45.50707391549139 + 45.50797618772138) / 2 + 0.0009, //東//
(9.449117417779963 + 9.465811486495129) / 2 - 0.0004 //南//
];
const PozzuoloMartesana_e = [45.50797618772138,9.465811486495129];
const CP_PozzuoloMartesana = adaptiveBezierCurve(PozzuoloMartesana_w,Cn_PozzuoloMartesana,PozzuoloMartesana_e,1);
const CP_PozzuoloMartesana_Un = resamplePath(CP_PozzuoloMartesana, 7);

//カーブ南東//
const Ospitaletto_w = [45.54365376253746,10.077538052407583];
const Cn_Ospitaletto = [
(45.54365376253746 + 45.546629270597485) / 2 + 0.0009, //東//
(10.077538052407583 + 10.087945023435019) / 2 - 0.0004 //南//
];
const Ospitaletto_e = [45.546629270597485,10.087945023435019];
const CP_Ospitaletto = adaptiveBezierCurve(Ospitaletto_w,Cn_Ospitaletto,Ospitaletto_e,1);
const CP_Ospitaletto_Un = resamplePath(CP_Ospitaletto, 9);

//カーブ南東//
const Antezzate_w = [45.548925307944856,10.132353804200756];
const Cn_Antezzate = [
(45.548925307944856 + 45.5474526616021) / 2 + 0.0009, //東//
(10.132353804200756 + 10.143168470884286) / 2 - 0.0004 //南//
];
const Antezzate_e = [45.5474526616021,10.143168470884286];
const CP_Antezzate = adaptiveBezierCurve(Antezzate_w,Cn_Antezzate,Antezzate_e,1);
const CP_Antezzate_Un = resamplePath(CP_Antezzate, 7);
const Violino = [45.53478537020444, 10.180202498426164];
const Brescia_west = [45.53349272487506, 10.207582487829503];

const Brescia = [45.53216810616962, 10.212877398712628];
const Peschiera = [45.43832702879209, 10.702334192700855];
const VeronaPortaNova = [45.428597030990964, 10.981918606991616];

// ミラノ⇔ベローナのルート
const FS_MilanotoVerona = L.polyline
([MilanotoVerona,Centrale_NEVR,...CP_LambrateVR_Un,...CP_Ortica_Un,Segrate,PioltelloLimito,Trenzanesio,Vignate,Melzo,
 ...CP_PozzuoloMartesana_Un, ...CP_Ospitaletto_Un, ...CP_Antezzate_Un,Violino,Brescia_west,
 Brescia,Peschiera,VeronaPortaNova], { color: '#000000' }).addTo(map);