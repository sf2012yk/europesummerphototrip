// 始発 終着 
const MunichDB = [48.14066779898462, 11.557672139486796];
const Heimeranplatz = [48.13307385901179, 11.531345521388614];
const Poccistrse = [48.1244618267463, 11.548851329422332];
const MunichOst = [48.12747679292885, 11.60531455265721];
const Trudering = [48.126056162970514, 11.662992258308181];
const Vaterstetten = [48.10399421085632, 11.764529962852356];
const Zorneding = [48.09042283913999, 11.827036161389955];
const Kirchseeon = [48.07141704894631, 11.88599517846742];
const Grafing = [48.043245002204806, 11.940310080699739];
const Groskarolinenfeld = [47.88894198853228, 12.08469505481295];
const Rosenheim = [47.84995615655914, 12.119225561257963];
const OberaudorfDB = [47.65288189669135, 12.175328896312646];

// ルートポリライン
const MUOBB = L.polyline
([MunichDB,Heimeranplatz,Poccistrse,
MunichOst,Trudering,Vaterstetten,Zorneding,Kirchseeon,Grafing,Groskarolinenfeld,
Rosenheim,OberaudorfDB
], { color: '#000000' }).addTo(map);
