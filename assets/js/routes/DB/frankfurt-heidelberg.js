// 始発 終着 
const FrankfurtHE = [50.10686863147775, 8.662539152027437];

const Louisa  = [50.083850672597286, 8.670469828940416];
const NeuIsenburg   = [50.052953988543, 8.665601432405422];
const Langen  = [49.99344598038716, 8.656916506100067];
const Egelsbach  = [49.96905309803369, 8.653479626627908];
const Arheilgen  = [49.913579146412715, 8.645339773559831];
const Darmstadt  = [49.87228696869196, 8.62988492872985];
const DarmstadtSud  = [49.85602687397774, 8.636290274598066];
const Bickenbach  = [49.76013048598493, 8.603522452679757];
const HahnleinAlsbach  = [49.73941884987657, 8.606517471625335];
const Auerbach  = [49.701924787078596, 8.61321973500423];
const Bensheim  = [49.68129911359879, 8.61674060005169];
const Bensheim_s  = [49.6765292652387, 8.617677808013223];
const Heppenheim  = [49.64116910840247, 8.63359099915006];
const Laudenbach_n  = [49.61865381101486, 8.64316524765037];
const Laudenbach  = [49.61178018639977, 8.64463242129698];
const Hemsbach  = [49.59044348552454, 8.648724890787388];
const Sulzbach  = [49.57611350985299, 8.656133476354148];
const Weinheim  = [49.553117757766266, 8.665155323016803];
const Lutzelsachsen  = [49.527980316318065, 8.649996531699298];
const Hirschberg  = [49.5093124374796, 8.63347841303076];
const Ladenburg  = [49.4741395462014, 8.602562928665488];
const NeuEdingen  = [49.448435507401975, 8.579937994303773];
const Pfaffengrund  = [49.41198582129036, 8.641273867885962];
const Heidelberg  = [49.40372754662851, 8.675195233717874];
const KarlsruheHE = [48.99331884774764, 8.401167393215417];

// ルートポリライン
const FRHE = L.polyline
([FrankfurtHE,Louisa,NeuIsenburg,
Langen,Egelsbach,Arheilgen,
Darmstadt,DarmstadtSud,Bickenbach,HahnleinAlsbach,Auerbach,
Bensheim,Bensheim_s,Heppenheim,Laudenbach_n,Laudenbach,Hemsbach,Sulzbach,
Weinheim,Lutzelsachsen,Hirschberg,Ladenburg,NeuEdingen,Pfaffengrund,
Heidelberg,
KarlsruheHE
], { color: '#000000' }).addTo(map);
