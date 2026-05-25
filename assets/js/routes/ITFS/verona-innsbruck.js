// 鉄道ルート ベローナ⇔インスブルック　//
const VeronatoInnsbruck = [45.428597030990964, 10.981918606991616];
const Rovereto = [45.890980275878114, 11.033410604586019];
const Trento = [46.07241603514322, 11.118842603474517];
const Bolzano = [46.496727511304, 11.359245439622844];
const InnsbruckfromVerona = [47.26253050680029, 11.40060390583582];

// ミラノ⇔ベローナのルート
const FS_VeronatoInnsbruck = L.polyline
([VeronatoInnsbruck,Rovereto,Trento,Bolzano,InnsbruckfromVerona], { color: '#000000' }).addTo(map);