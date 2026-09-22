// 始発 終着 
const Changi_DOH = [1.357498138269599, 103.98833398368646];
const Doha_DOH = [25.267483125982892, 51.618988253293935];

// ルートポリライン
const SQ_Doha = L.polyline
([Changi_DOH,Doha_DOH
], { color: '#0f1010', weight: 1.5, opacity: 0.7, dashArray: '2, 4' }).addTo(map);
     
