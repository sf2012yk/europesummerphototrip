// 始発 終着 
const Hamburg_WZ = [53.55296409369695, 10.00679677815908];
const Luneburg = [53.24989626250631, 10.419818946917102];
const Uelzen = [52.96890794260266, 10.552739025059836];
const Suderburg = [52.90483050369509, 10.432746001747022];
const Unterlus = [52.83479362991368, 10.3000227238932];
const Eschede = [52.74072964122803, 10.230042851201906];
const Celle = [52.620047600007915, 10.062155350280639];
const Wittekop = [52.59242878958246, 10.043587402397797];
const Wulfshorst = [52.54450754810969, 9.937281111968128];
const Grosburgwedel = [52.506323817673035, 9.85750038755857];
const Isernhagen = [52.48548296236047, 9.802174806600094];
const LangenhagenMitte = [52.44054253252368, 9.725473030893882];
const Hanover = [52.37737976671628, 9.741412077321142];
const Gottingen = [51.53676592091784, 9.925887387871015];
const Wilhelmshohe = [51.31164058166641, 9.44756330205732];
const Fulda = [50.5544708933741, 9.684887181409952];
const RohrbachJC_WZ  = [49.97257285891657, 9.707165578495905];
const Lichteiche_WZ  = [49.91210725034689, 9.753285262673707];
const Leinach_WZ  = [49.87245724246147, 9.805655580741915];
const Veitshochheim_WZ  = [49.82304723930533, 9.876474850825655];
const Moltkeruh_WZ  = [49.80476970250564, 9.91224417042193];
const Wurzburg_WZ  = [49.80211087604598, 9.935629793264921];


// ルートポリライン
const HBWZ = L.polyline
([Hamburg_WZ,
Luneburg,
Uelzen,Suderburg,Unterlus,Eschede,
Celle,Wittekop,Wulfshorst,Grosburgwedel,Isernhagen,LangenhagenMitte,
Hanover,Gottingen,Wilhelmshohe,
Fulda,RohrbachJC_WZ,Lichteiche_WZ,Leinach_WZ,Veitshochheim_WZ,Moltkeruh_WZ,
Wurzburg_WZ
], { color: '#000000' }).addTo(map);
