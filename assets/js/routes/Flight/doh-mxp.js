// 始発 終着 
const DOHtoMXP = [25.269495690648917, 51.60161800816268];
const MXPfromDOH = [45.6273767762583, 8.712078728053363];

// ルートポリライン
const QR123 = L.polyline
([DOHtoMXP,MXPfromDOH
], 
{ color: '#000000', weight: 2, dashArray: '1 , 4' 
}).addTo(map);
