// 始発 終着 
const DXBtoAMS = [25.251210946113474, 55.36806529980942];
const AMSfromDXB = [52.309339231997406, 4.761921844786288];

// ルートポリライン
const EK147 = L.polyline
([DXBtoAMS,AMSfromDXB
], 
{ color: '#000000', weight: 2, dashArray: '1 , 4' 
}).addTo(map);
