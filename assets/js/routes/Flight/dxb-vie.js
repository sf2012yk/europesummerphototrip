// 始発 終着 
const DXBtoVIE = [25.251210946113474, 55.36806529980942];
const VIEfromDXB = [48.120983101278604, 16.563218852576007];

// ルートポリライン
const EK127 = L.polyline
([DXBtoVIE,VIEfromDXB
], 
{ color: '#000000', weight: 2, dashArray: '1 , 4' 
}).addTo(map);
