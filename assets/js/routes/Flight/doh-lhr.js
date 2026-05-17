// 始発 終着 
const DOHtoLHR = [25.269495690648917, 51.60161800816268];
const LHRfromDOH = [51.46896718671588, -0.4574958618544679];

// ルートポリライン
const QR1 = L.polyline
([DOHtoLHR,LHRfromDOH
], 
{ color: '#000000', weight: 2, dashArray: '1 , 4' 
}).addTo(map);
