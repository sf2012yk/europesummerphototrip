// 始発 終着 
const NurnbergBE = [49.44567847015998, 11.081854166258191];
const Bamberg  = [49.90062356088548, 10.899776879778614];
const Leipzig = [51.34592967003053, 12.382321489123433];
const BerlinHbf = [52.52502885143288, 13.369368039466343];


// ルートポリライン
const NUBE = L.polyline
([NurnbergBE,Bamberg,Leipzig,BerlinHbf
], { color: '#000000' }).addTo(map);
