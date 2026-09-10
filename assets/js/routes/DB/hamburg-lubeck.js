// 始発 終着 
const Hamburg_LU = [53.55296409369695, 10.00679677815908];
const LubeckHbf = [53.86759355715971, 10.669932497760719];


// ルートポリライン
const HBLB = L.polyline
([Hamburg_LU,LubeckHbf
], { color: '#000000' }).addTo(map);
