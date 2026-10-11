// Zurich Lyon module

// 鉄道ルート チューリッヒ⇔ベルン⇔ジュネーブ⇔リヨン駅　//
const ZurichtoMilano = [47.37828613669217, 8.539567674375348];
const TN_North_ffs = [47.37569528657373, 8.518599199038311];
const TN_South_ffs = [47.30029760678326, 8.559522398936306];
const Binz_ffs = [47.36237975737446, 8.51929519508454];
const Saalsporthalle_ffs = [47.357979238727374, 8.520153501992596];
const Albisstrasse_ffs = [47.33170378117955, 8.52981873295796];
const SwHW3_ffs = [47.302931968446096, 8.547086200648463];
const Thalwil_ffs = [47.29591289732868, 8.5643930473244];
const OberriedenDorf = [47.2767925357176, 8.577758257431073];
const HorgenOberdorf = [47.2586825699017, 8.589764084031442];
const GartenvereinGeduld = [47.25236909152312, 8.591598714950102];
const TN_Sihlbrugg = [47.244678301672984, 8.576277937136831];
const Sihlbrugg = [47.23831838851524, 8.57720811880266];
const Albistunnel = [47.23516417191689, 8.574547367468371];
const TN_zug = [47.21337091032369, 8.54319770849934];
const BaarNeufeld = [47.188645008858536, 8.517598705707034];
const Zug = [47.17365289406265, 8.515661822650495];
const Walchwil = [47.09865855493973, 8.517228018627453];
const TierparkGoldau = [47.04873827338437, 8.554587909537439];
const Steinen = [47.04774405352824, 8.607009002683647];
const Brunnen = [46.99916321733583, 8.610345411542188];
const Sisikon = [46.95049568693758, 8.620698182289402];
const Fluelen = [46.90161452307057, 8.624613244796908];
const AltdorfUR = [46.87577000538478, 8.631315324870947];
const Gotthard_swissTN = [46.83635140930004, 8.646264068328541];
const Gotthard_Silenen = [46.79952421640491, 8.665919296262995];
const Gotthard_italyTN  = [46.3729014529052, 8.925060958096081];
const Biasca = [46.346693320260755, 8.966350368652778];
const Riviera_s = [46.305695886395085, 8.990943201413984];
const Cresciano = [46.278534558432916, 9.00603332665001];
const Castione = [46.223488204006884, 9.041477597134142];
const Bellinzona = [46.195065033818025, 9.029263978447709];
const Lugano = [46.00485220354984, 8.946722968889283];

const Chiasso = [45.831818639498245, 9.03154687608663];
const ComoS_Giovanni = [45.80812938571758, 9.073289642948026];
const Monza = [45.57669886148378, 9.272415167587344];
const Centrale_NEZR = [45.49380541011251, 9.211797676557616];
const MilanofromZurich = [45.486022373628984, 9.20430169797116];

// チューリッヒ⇔ミラノのルート
const FS_ZurichtoMilano = L.polyline
([ZurichtoMilano,TN_North_ffs,TN_South_ffs,Binz_ffs,Saalsporthalle_ffs,Albisstrasse_ffs,SwHW3_ffs,
Thalwil_ffs,OberriedenDorf,HorgenOberdorf,GartenvereinGeduld,TN_Sihlbrugg,
Sihlbrugg,Albistunnel,TN_zug,BaarNeufeld,
Zug,Walchwil,TierparkGoldau,Steinen,Brunnen,Sisikon,Fluelen,AltdorfUR,
Gotthard_swissTN,Gotthard_Silenen,Gotthard_italyTN,
Biasca,Riviera_s,Cresciano,Castione,
Bellinzona,
Lugano,
Chiasso,
ComoS_Giovanni,
Monza,
Centrale_NEZR,
MilanofromZurich], 
{ color: '#000000', 
  opacity: '0.7' ,
  weight: 3
}
).addTo(map);