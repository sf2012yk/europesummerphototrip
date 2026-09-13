// 始発 終着 
const Changi_LHR = [1.357498138269599, 103.98833398368646];
const LHR_Terminal3 = [51.47028371585865, -0.4590508896992913];

// ルートポリライン
const SQ_london = L.polyline
([Changi_LHR,LHR_Terminal3
], { color: '#4d5252', weight: 1.5, opacity: 0.7, dashArray: '2, 4' }).addTo(map);
     
