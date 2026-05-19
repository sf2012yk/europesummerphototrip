// 鉄道ルート ベローナ⇔ベネチア　//
const VeronatoVenezia = [45.428597030990964, 10.981918606991616];
const Vicenza = [45.5409930564181, 11.538794841267709];
const Padova = [45.417981388217086, 11.880603803267935];
const VeneziaMestre = [45.48203809284769, 12.231620771052933];
const VeneziafromVerona = [45.44134690329801, 12.320284034940498];

// ベローナ⇔ベネチアのルート
const FS_VeronatoVenezia = L.polyline
([VeronatoVenezia,Vicenza,Padova,VeneziaMestre,VeneziafromVerona], { color: '#000000' }).addTo(map);