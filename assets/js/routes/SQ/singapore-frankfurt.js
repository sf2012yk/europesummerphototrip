// 始発 終着 
const Changi_FRA = [1.357498138269599, 103.98833398368646];
const FRA_Terminal1 = [50.05213795307499, 8.570923411132238];

// ルートポリライン
const SQ_Frankfurt = L.polyline
([Changi_FRA,FRA_Terminal1
], { color: '#0f1010', weight: 1.5, opacity: 0.9, dashArray: '2, 4' }).addTo(map);
     
