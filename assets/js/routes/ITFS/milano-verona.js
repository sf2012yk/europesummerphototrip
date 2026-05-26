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

const Brescia = [45.53216810616962, 10.212877398712628];
const Peschiera = [45.43832702879209, 10.702334192700855];
const VeronaPortaNova = [45.428597030990964, 10.981918606991616];

// ミラノ⇔ベローナのルート
const FS_MilanotoVerona = L.polyline
([MilanotoVerona,Centrale_NEVR,...CP_LambrateVR_Un,Brescia,Peschiera,VeronaPortaNova], { color: '#000000' }).addTo(map);