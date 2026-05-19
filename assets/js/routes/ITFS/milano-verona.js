// 鉄道ルート ミラノ⇔ベローナ　//
const MilanotoVerona = [47.37828613669217, 8.539567674375348];
const Brescia = [45.53216810616962, 10.212877398712628];
const Peschiera = [45.43832702879209, 10.702334192700855];
const VeronaPortaNova = [45.428597030990964, 10.981918606991616];

// ミラノ⇔ベローナのルート
const FS_MilanotoVerona = L.polyline
([MilanotoVerona,Brescia,Peschiera,VeronaPortaNova], { color: '#000000' }).addTo(map);