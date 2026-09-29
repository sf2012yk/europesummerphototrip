// 始発 終着 
const Frankfurt_AR = [50.10686863147775, 8.662539152027437];

//カーブ南東//
const ICE_weak_AR_n = [50.09563160512767,8.633224239277212];
const Cn_ICE_weak_AR = [
(50.09100627247692 + 50.09563160512767) / 2 + 0.0019, //東//
(8.63009143378441 + 8.633224239277212) / 2 - 0.0014 //南//
];
const ICE_weak_AR_s = [50.09100627247692,8.63009143378441];
const CP_ICE_weak_AR = adaptiveBezierCurve(ICE_weak_AR_n,Cn_ICE_weak_AR,ICE_weak_AR_s,1);
const CP_ICE_weak_AR_Un = resamplePath(CP_ICE_weak_AR, 4);
const Niederrad_AR = [50.08109322196067, 8.636690332234833];

const Stadion_AR = [50.06812064787816, 8.633192731600058];
const GatewayGardens = [50.05676871925889, 8.594597930562994];
const FRA_airport = [50.05213795307499, 8.570923411132238];

// ルートポリライン
const FRAirport = L.polyline
([Frankfurt_AR,...CP_ICE_weak_AR_Un,Niederrad_AR,Stadion_AR,GatewayGardens,
FRA_airport
], { color: '#000000' }).addTo(map);
