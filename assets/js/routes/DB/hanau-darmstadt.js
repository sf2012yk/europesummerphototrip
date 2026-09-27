// 始発 終着 
const Hanau_SE  = [50.1210760384029, 8.927999051019844];
const KleinAuheim  = [50.10049324795362, 8.934397460667524];
const HainburgHainstadt  = [50.078094457031774, 8.938263163197051];
const HarresSee  = [50.05098199632919, 8.96389537173493];
const Seligenstadt  = [50.041556133124594, 8.967509066294852];
const Mainhausen  = [50.016013642565326, 8.969872399270503];
const Harreshausen  = [49.97130358590322, 8.974316899175625];
const Babenhausen  = [49.95782206779343, 8.95739825844468];
const Hergershausen  = [49.93687559790001, 8.91686471622286];
const HessenAltheim  = [49.92333908631577, 8.890943848235032];
const Dieburg  = [49.90355236730376, 8.840904556493298];
const Messel  = [49.92161916371174, 8.745075481127293];
const Kranichstein  = [49.90705640017659, 8.679229426700932];
const DarmstadtNord  = [49.892008504219845, 8.653025905914177];
const Darmstadt_SE  = [49.87228696869196, 8.62988492872985];

// ルートポリライン
const HUDA = L.polyline
([Hanau_SE,KleinAuheim,HainburgHainstadt,HarresSee,
Seligenstadt,Mainhausen,Harreshausen,Babenhausen,Hergershausen,HessenAltheim,
Dieburg,Messel,Kranichstein,DarmstadtNord,
Darmstadt_SE
], { color: '#000000' }).addTo(map);
