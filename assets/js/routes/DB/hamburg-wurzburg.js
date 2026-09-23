// 始発 終着 
const Hamburg_WZ = [53.55296409369695, 10.00679677815908];
const Luneburg = [53.24989626250631, 10.419818946917102];
const Hanover = [52.37737976671628, 9.741412077321142];
const Fulda = [50.5544708933741, 9.684887181409952];
const RohrbachJC_WZ  = [49.97257285891657, 9.707165578495905];
const Lichteiche_WZ  = [49.91210725034689, 9.753285262673707];
const Leinach_WZ  = [49.87245724246147, 9.805655580741915];
const Veitshochheim_WZ  = [49.82304723930533, 9.876474850825655];
const Moltkeruh_WZ  = [49.80476970250564, 9.91224417042193];
const Wurzburg_WZ  = [49.80211087604598, 9.935629793264921];


// ルートポリライン
const HBWZ = L.polyline
([Hamburg_WZ,Luneburg,Hanover,
Fulda,RohrbachJC_WZ,Lichteiche_WZ,Leinach_WZ,Veitshochheim_WZ,Moltkeruh_WZ,
Wurzburg_WZ
], { color: '#000000' }).addTo(map);
