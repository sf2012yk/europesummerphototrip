// 始発 終着 
const DXBtoLHR = [25.251210946113474, 55.36806529980942];
const LHRfromDXB = [51.46896718671588, -0.4574958618544679];

// ルートポリライン
const EK1 = L.polyline
([DXBtoLHR,LHRfromDXB
], 
{ color: '#000000', weight: 2, dashArray: '1 , 4' 
}).addTo(map);
