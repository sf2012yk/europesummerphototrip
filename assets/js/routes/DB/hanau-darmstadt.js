// 始発 終着 
const Hanau_SE  = [50.1210760384029, 8.927999051019844];
const Seligenstadt  = [50.041556133124594, 8.967509066294852];

const Darmstadt_SE  = [49.87228696869196, 8.62988492872985];

// ルートポリライン
const HUDA = L.polyline
([Hanau_SE,Seligenstadt,Darmstadt_SE
], { color: '#000000' }).addTo(map);
