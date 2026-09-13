// 始発 終着 
const Bugis_DT = [1.300501193271015, 103.85610157289547];
const Promenade  = [1.2933378979458872, 103.86105339853415];
const Bayfront = [1.2813273586611666, 103.85882983475442];

// ルートポリライン
const DT_singapore = L.polyline
([Bugis_DT,Promenade,Bayfront
], { color: '#000000' }).addTo(map);
