// 始発 終着 
const Dubai_FCO = [25.251227093649398, 55.36661696513273];
const Roma_FCO = [41.79398762260918, 12.251412147828841];

// ルートポリライン
const EM_FCO = L.polyline
([Dubai_FCO,Roma_FCO
], { color: '#0f1010', weight: 1.5, opacity: 0.7, dashArray: '2, 4' }).addTo(map);
     
