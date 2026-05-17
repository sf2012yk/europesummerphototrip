// 始発 終着 
const DOHtoCDG = [25.269495690648917, 51.60161800816268];
const CDGfromDOH = [49.00762244465584, 2.5504044803475034];

// ルートポリライン
const QR1 = L.polyline
([DOHtoCDG,CDGfromDOH
], 
{ color: '#000000', weight: 2, dashArray: '1 , 4' 
}).addTo(map);
