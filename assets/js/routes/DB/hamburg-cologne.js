// 始発 終着 
const Hamburg_CL = [53.55296409369695, 10.00679677815908];
const Osnabruck_CL = [52.27292343189692, 8.06134045215591];
const Cologne_CL = [50.94325481600945, 6.9585388293166295];


// ルートポリライン
const HBCL = L.polyline
([Hamburg_CL,Osnabruck_CL,Cologne_CL
], { color: '#000000' }).addTo(map);
