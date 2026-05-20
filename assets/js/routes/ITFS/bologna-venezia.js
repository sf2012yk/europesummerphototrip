// 鉄道ルート ボローニャ⇔ベネチア　//
const BolognatoVenezia = [44.50625199262663, 11.342946531828515];
const Ferrara = [44.84278732679243, 11.60368909440825];
const PadovafromBologna = [45.417981388217086, 11.880603803267935];
const MestrefromBologna = [45.48203809284769, 12.231620771052933];
const VeneziafromBologna = [45.44134690329801, 12.320284034940498];



// ボローニャ⇔ベネチアのルート
const FS_BolognatoVenezia = L.polyline
([BolognatoVenezia,Ferrara,PadovafromBologna,MestrefromBologna,VeneziafromBologna], { color: '#000000' }).addTo(map);