// 鉄道ルート ベローナ⇔ベネチア　//
const VeronatoVenezia = [45.428597030990964, 10.981918606991616];
const PortaVescovo  = [45.43559005436394, 11.018625066939345];
const RabenItalyVerona  = [45.42373372505869, 11.071405893178781];
const BuonAlbergo  = [45.42153576082142, 11.089027738822539];
const Caldiero  = [45.414052118022, 11.169791385015916];
const Colombaloffia  = [45.40904580828311, 11.215306263450008];
const SanBonifacio  = [45.40276386842591, 11.273924003113764];
const ElBusdelgato  = [45.40912166679554, 11.329644343588857];
const Vicenza = [45.5409930564181, 11.538794841267709];
const Lerino  = [45.51879793908011, 11.63546761145846];
const Grisignano  = [45.48637913689321, 11.710591019613133];
const Mestrino  = [45.45784037918805, 11.773839758587325];
const Padova = [45.417981388217086, 11.880603803267935];
const VeneziaMestre = [45.48203809284769, 12.231620771052933];
const VeneziafromVerona = [45.44134690329801, 12.320284034940498];

// ベローナ⇔ベネチアのルート
const FS_VeronatoVenezia = L.polyline
([VeronatoVenezia,PortaVescovo,RabenItalyVerona,BuonAlbergo,Caldiero,Colombaloffia,SanBonifacio,ElBusdelgato,
Vicenza,Lerino,Grisignano,Mestrino,
Padova,VeneziaMestre,VeneziafromVerona], { color: '#000000' }).addTo(map);