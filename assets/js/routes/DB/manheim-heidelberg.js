// 始発 終着 
const Mannheim_MH = [49.47968211722923, 8.467507974305194];
const Heidelberg_MH  = [49.40372754662851, 8.675195233717874];

// ルートポリライン
const MHHE = L.polyline
([Mannheim_MH,Heidelberg_MH
], { color: '#000000' }).addTo(map);
