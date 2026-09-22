// 始発 終着 
const Changi_DXB = [1.357498138269599, 103.98833398368646];
const Dubai_DXB = [25.251227093649398, 55.36661696513273];

// ルートポリライン
const SQ_Dubai = L.polyline
([Changi_DXB,Dubai_DXB
], { color: '#0f1010', weight: 1.5, opacity: 0.7, dashArray: '2, 4' }).addTo(map);
     
