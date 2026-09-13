// 始発 終着 
const Changi = [1.357498138269599, 103.98833398368646];
const LHR_Terminal3 = [51.47028371585865, -0.4590508896992913];

// ルートポリライン
const SQ_london = L.polyline
([Changi,LHR_Terminal3
], { color: '#95a5a6', weight: 1.5, opacity: 0.4, dashArray: '2, 4' }).addTo(map);
     
