// 始発 終着 
const DXBtoFCO = [25.251210946113474, 55.36806529980942];
const FCOfromDXB = [41.79398762260918, 12.251412147828841];

// ルートポリライン
const EK97 = L.polyline
([DXBtoFCO,FCOfromDXB
], 
{ color: '#000000', weight: 2, dashArray: '1 , 4' 
}).addTo(map);
