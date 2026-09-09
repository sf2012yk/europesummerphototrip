// 始発 終着 
const BerlinHM = [52.52502885143288, 13.369368039466343];
const Wittenberge = [53.003320440609194, 11.762929303799856];
const Ludwigslust  = [53.33495273368883, 11.494016999532564];
const HamburgHbf = [53.55296409369695, 10.00679677815908];


// ルートポリライン
const BEHM = L.polyline
([BerlinHM,Wittenberge,Ludwigslust,HamburgHbf
], { color: '#000000' }).addTo(map);
