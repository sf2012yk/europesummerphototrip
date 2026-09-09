// 始発 終着 
const LeipzigDE = [51.34592967003053, 12.382321489123433];
const Riesa = [51.309766116006614, 13.28776399520987];
const Dresden = [51.04057033145552, 13.731107960804325];


// ルートポリライン
const LPDE = L.polyline
([LeipzigDE,Riesa,Dresden
], { color: '#000000' }).addTo(map);
