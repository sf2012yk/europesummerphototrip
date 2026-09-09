// 始発 終着 
const MunichDB = [48.14066779898462, 11.557672139486796];
const Rosenheim = [47.84995615655914, 12.119225561257963];
const OberaudorfDB = [47.65288189669135, 12.175328896312646];

// ルートポリライン
const MUOBB = L.polyline
([MunichDB,Rosenheim,OberaudorfDB
], { color: '#000000' }).addTo(map);
