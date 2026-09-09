// 始発 終着 
const Frankfurt = [50.10686863147775, 8.662539152027437];
const Hanau  = [50.1210760384029, 8.927999051019844];
const Wurzburg  = [49.80211087604598, 9.935629793264921];
const Nurnberg = [49.44567847015998, 11.081854166258191];
const Ingolstadt  = [48.74464387329799, 11.43703662415389];
const Munich = [48.14066779898462, 11.557672139486796];

// ルートポリライン
const FRMU = L.polyline
([Frankfurt,Hanau,Wurzburg,Nurnberg,Ingolstadt,Munich
], { color: '#000000' }).addTo(map);
