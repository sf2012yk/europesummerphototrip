// 始発 終着 
const DOHtoFCO = [25.269495690648917, 51.60161800816268];
const FCOfromDOH = [41.79398762260918, 12.251412147828841];

// ルートポリライン
const QR117 = L.polyline
([DOHtoFCO,FCOfromDOH
], 
{ color: '#000000', weight: 2, dashArray: '1 , 4' 
}).addTo(map);
