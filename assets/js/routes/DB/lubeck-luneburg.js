// 始発 終着 

const Lubeck_LN = [53.86759355715971, 10.669932497760719];
const Luneburg_LU = [53.24989626250631, 10.419818946917102];


// ルートポリライン
const LNLU = L.polyline
([Lubeck_LN,Luneburg_LU
], { color: '#000000' }).addTo(map);
