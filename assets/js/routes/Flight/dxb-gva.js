// 始発 終着 
const DXBtoGVA = [25.251210946113474, 55.36806529980942];
const GVAfromDXB = [46.2311652737033, 6.110209303646608];

// ルートポリライン
const EK83 = L.polyline
([DXBtoGVA,GVAfromDXB
], 
{ color: '#000000', weight: 2, dashArray: '1 , 4' 
}).addTo(map);
