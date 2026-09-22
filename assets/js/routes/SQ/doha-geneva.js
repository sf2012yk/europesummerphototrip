// 始発 終着 
const Doha_GVA = [25.267483125982892, 51.618988253293935];
const Geneva_GVA = [46.2314339144919, 6.10746786781946];

// ルートポリライン
const QR_geneva = L.polyline
([Doha_GVA,Geneva_GVA
], { color: '#0f1010', weight: 1.5, opacity: 0.7, dashArray: '2, 4' }).addTo(map);
     
