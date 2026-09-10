// 始発 終着 
const Hamburg_DB = [53.55296409369695, 10.00679677815908];
const Amsterdam_DB = [52.37916601980573, 4.900256248250418];


// ルートポリライン
const HBAM = L.polyline
([Hamburg_DB,Amsterdam_DB
], { color: '#000000' }).addTo(map);
