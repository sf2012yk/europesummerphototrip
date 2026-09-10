// 始発 終着 
const Wurzburg_ST  = [49.80211087604598, 9.935629793264921];
const Steinach = [49.453067020424825, 10.27350498954168];
const Rothenburg= [49.376815204696996, 10.190905200749793];


// ルートポリライン
const WZRO = L.polyline
([Wurzburg_ST,Steinach,Rothenburg
], { color: '#000000' }).addTo(map);
