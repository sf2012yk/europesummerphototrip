// 始発 終着 
const Frankfurt = [50.10686863147775, 8.662539152027437];
const FrankfurtSud = [50.0992673680849, 8.686263160957893];
const Kaiserlei  = [50.10529953438095, 8.740498911956232];
const Muhlheim  = [50.11917042618482, 8.83780394398759];
const Hanau  = [50.1210760384029, 8.927999051019844];
const Grosauheim  = [50.107011728759026, 8.943745246116688];
const Groskrotzenburg  = [50.08742639731435, 8.983176065929154];
const Kahl  = [50.07661970579849, 9.005342474301509];
const Dettingen  = [50.042757472032456, 9.036692898737648];
const Ruckersbacher  = [50.019837319266436, 9.056951178181912];
const Kleinostheim  = [50.00260109310361, 9.072320920697038];
const Aschaffenburg_W  = [49.98169520516326, 9.108071981812804];
const Aschaffenburg  = [49.9806049637235, 9.143628585408543];
const Goldbach  = [49.99205491758982, 9.184841481992168];
const Laufach  = [50.01069458383535, 9.27775312071819];
const Heigenbrucken  = [50.02248536811816, 9.381250293252105];
const Wiesthal  = [50.01710647752983, 9.44085559875322];
const Lohr  = [50.004268396472455, 9.580667178919176];
const Nantenbach  = [50.029155839432406, 9.64570249683354];
const Wiesenfeld  = [49.996867083142625, 9.692229138860652];
const RohrbachJC_MU  = [49.97257285891657, 9.707165578495905];
const Lichteiche_MU  = [49.91210725034689, 9.753285262673707];
const Leinach_MU  = [49.87245724246147, 9.805655580741915];
const Veitshochheim_MU  = [49.82304723930533, 9.876474850825655];
const Moltkeruh_MU  = [49.80476970250564, 9.91224417042193];
const Wurzburg_MU  = [49.80211087604598, 9.935629793264921];
const Rottendorf  = [49.79216854967173, 10.029117793325323];
const Dettelbach  = [49.787414935217996, 10.091104602039467];
const Buchbrunn  = [49.7627343043134, 10.14549663165907];
const Kitzingen  = [49.7324155894602, 10.155099364666034];
const Mainbernheim  = [49.699868237575856, 10.211658341274102];
const Iphofen  = [49.696872915524814, 10.255075143278258];
const Hellmitzheim  = [49.67359471658772, 10.324689443218404];
const MarktBibart  = [49.64620072091534, 10.425235614353321];
const NeustadtAisch  = [49.576873630945784, 10.587932823039077];
const Emskirchen  = [49.55507846904413, 10.709733109682947];
const Siegelsdorf  = [49.506336132644385, 10.87584633947455];
const Burgfarrnbach  = [49.4910739925586, 10.923422642713208];
const Unterfurberg  = [49.47488894363238, 10.956728971176577];
const Furth_MU  = [49.46985188318612, 10.989870547573046];
const Rothenburger_MU = [49.445401316160705, 11.05482890362677];
const Nurnberg_MU = [49.44567847015998, 11.081854166258191];
const IngolstadtJC  = [48.77688590659527, 11.428977946154836];
const IngolstadtNorth  = [48.77340998966283, 11.43216218669116];
const Ingolstadt  = [48.74464387329799, 11.43703662415389];
const Munich = [48.14066779898462, 11.557672139486796];

// ルートポリライン
const FRMU = L.polyline
([Frankfurt,FrankfurtSud,Kaiserlei,Muhlheim,
Hanau,Grosauheim,Groskrotzenburg,Kahl,Dettingen,Ruckersbacher,Kleinostheim,Aschaffenburg_W,
Aschaffenburg,Goldbach,Laufach,Heigenbrucken,Wiesthal,
Lohr,Nantenbach,Wiesenfeld,RohrbachJC_MU,Lichteiche_MU,Leinach_MU,Veitshochheim_MU,Moltkeruh_MU,
Wurzburg_MU,Rottendorf,Dettelbach,Buchbrunn,Kitzingen,Mainbernheim,
Iphofen,Hellmitzheim,MarktBibart,NeustadtAisch,Emskirchen,Siegelsdorf,Burgfarrnbach,Unterfurberg,
Furth_MU,Rothenburger_MU
Nurnberg_MU,IngolstadtJC,IngolstadtNorth
Ingolstadt,Munich
], { color: '#000000' }).addTo(map);
