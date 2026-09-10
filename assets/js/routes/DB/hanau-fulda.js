// 始発 終着 
const Hanau_HU  = [50.1210760384029, 8.927999051019844];
const Fulda_HU = [50.5544708933741, 9.684887181409952];

// ルートポリライン
const HUFL = L.polyline
([Hanau_HU,Fulda_HU
], { color: '#000000' }).addTo(map);
