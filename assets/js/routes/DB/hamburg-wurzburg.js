// 始発 終着 
const Hamburg_WZ = [53.55296409369695, 10.00679677815908];
const Luneburg = [53.24989626250631, 10.419818946917102];
const Fulda = [50.5544708933741, 9.684887181409952];
const Wurzburg_WZ  = [49.80211087604598, 9.935629793264921];


// ルートポリライン
const HBWZ = L.polyline
([Hamburg_WZ,Luneburg,Fulda,Wurzburg_WZ
], { color: '#000000' }).addTo(map);
