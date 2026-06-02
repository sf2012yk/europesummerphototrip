// 鉄道ルート ボローニャ⇔ベネチア　//
const BolognatoVenezia = [44.50625199262663, 11.342946531828515];
const Corticella  = [44.551885066803756, 11.353939563541593];
const CastelMaggiore  = [44.576745455191215, 11.366897094081786];
const FunoCentergross  = [44.593538629787254, 11.370944583078874];
const SGiorgioDiPiano  = [44.6466138732352, 11.379087729953747];
const SanPietroInCasale  = [44.69794011786028, 11.404702679541213];
const IlGhetto  = [44.71104168963528, 11.413613019780708];
const Galliera  = [44.73764173494533, 11.441284772405346];
const SanVincenzo  = [44.742691470828625, 11.44675828584945];
const PoggioRenatico  = [44.76778477886933, 11.484777796948391];
const Coronella  = [44.79601078156822, 11.544457370520131];
const Ferrara = [44.84278732679243, 11.60368909440825];
const Pontelagoscuro  = [44.87308358513907, 11.612468215228272];
const Occhiobello  = [44.8993414697851, 11.62106355831639];
const Canaro  = [44.92288259090279, 11.674956785132437];
const CMella  = [44.94104991863289, 11.722063365965466];
const Polesella  = [44.96090555771575, 11.73846491933466];
const Arqua  = [45.00640736783211, 11.748478144629255];
const Borsea  = [45.05829037093835, 11.776240630812685];
const Rovigo  = [45.077032971070174, 11.78098858928224];
const Ferrata  = [45.09801958961659, 11.77498528497158];
const Stanghella  = [45.13209230033069, 11.749078738016804];
const Savellon  = [45.162937421441555, 11.72564908663468];
const Battisti  = [45.181409500984344, 11.71167866440646];
const SantElena  = [45.199237900213376, 11.712950262464025];
const Marendole  = [45.229255741992894, 11.73536354922998];
const Monselice  = [45.246061229103965, 11.747607771813035];
const Monticelli  = [45.28018876555576, 11.772774850289062];
const BattagliaTerme  = [45.29140152340091, 11.778231367690848];
const TermeMontegrotto  = [45.32732276703621, 11.796367120599022];
const LevanteFerrovia  = [45.34823914226694, 11.806923045491672];
const Abano  = [45.355205842593996, 11.811300410517402];
const Guazzi  = [45.365567805498635, 11.818365708746164];
const Caldonlavezzolo  = [45.38064527771668, 11.830721635232079];
const PadovafromBologna = [45.417981388217086, 11.880603803267935];
const MestrefromBologna = [45.48203809284769, 12.231620771052933];
const VeneziafromBologna = [45.44134690329801, 12.320284034940498];

// ボローニャ⇔ベネチアのルート
const FS_BolognatoVenezia = L.polyline
([BolognatoVenezia,Corticella,CastelMaggiore,FunoCentergross,SGiorgioDiPiano,
SanPietroInCasale,IlGhetto,Galliera,SanVincenzo,PoggioRenatico,Coronella,
Ferrara,Pontelagoscuro,Occhiobello,Canaro,CMella,Polesella,Arqua,Borsea,
Rovigo,Ferrata,Stanghella,Savellon,Battisti,SantElena,Marendole,
Monselice,Monticelli,BattagliaTerme,TermeMontegrotto,LevanteFerrovia,Abano,Guazzi,Caldonlavezzolo,
PadovafromBologna,MestrefromBologna,VeneziafromBologna], { color: '#000000' }).addTo(map);