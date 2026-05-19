// 鉄道ルート ベローナ⇔インスブルック　//
const VeronatoInnsbruck = [45.428597030990964, 10.981918606991616];
const InnsbruckfromVerona = [47.26253050680029, 11.40060390583582];

// ミラノ⇔ベローナのルート
const FS_VeronatoInnsbruck = L.polyline
([VeronatoInnsbruck,InnsbruckfromVerona], { color: '#000000' }).addTo(map);