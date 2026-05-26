// 鉄道ルート ミラノ⇔ボローニャ　//
const MilanotoBologna = [45.486022373628984, 9.20430169797116];
const Centrale_NEBL = [45.49380541011251, 9.211797676557616];


//カーブ北西//
const LambrateBL_n = [45.487082207853156,9.235215552985125];
const Cn_LambrateBL = [
(45.487082207853156 + 45.482734517381274) / 2 + 0.0009, //西//
(9.235215552985125 + 9.23811233867622) / 2 + 0.0004 //北//
];
const LambrateBL_s = [45.482734517381274,9.23811233867622];
const CP_LambrateBL = adaptiveBezierCurve(LambrateBL_n,Cn_LambrateBL,LambrateBL_s,1);
const CP_LambrateBL_Un = resamplePath(CP_LambrateBL, 7);
const Forlanini = [45.464295069705884, 9.237783180792293];
const Rogoredo = [45.43348201325253, 9.238608773459777];
const S_DonatoMilanese = [45.41873737546432, 9.252944267879666];
const Borgolombardo = [45.404415237413296, 9.27032411322932];
const Melegnano = [45.34767390425481, 9.330246969974567];
const ReggioEmiliaAV = [44.72441938162164, 10.654538083058297];
const Cavazzona = [44.57625356844372, 11.121370298936691];
const Samoggia = [44.56753862701403, 11.146293117360237];
const BolognafromMilano = [44.50625199262663, 11.342946531828515];

// ミラノ⇔ボローニャのルート
const FS_MilanotoBologna = L.polyline
([MilanotoBologna,Centrale_NEBL,...CP_LambrateBL_Un,Forlanini,Rogoredo,S_DonatoMilanese,Borgolombardo,Melegnano,
ReggioEmiliaAV,Cavazzona,Samoggia,BolognafromMilano], { color: '#000000' }).addTo(map);