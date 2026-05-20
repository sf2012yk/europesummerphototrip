// 鉄道ルート ミラノ⇔ベローナ　//
const MilanotoVerona = [45.486022373628984, 9.20430169797116];
const Brescia = [45.53216810616962, 10.212877398712628];
const Peschiera = [45.43832702879209, 10.702334192700855];
const VeronaPortaNova = [45.428597030990964, 10.981918606991616];

// ミラノ⇔ベローナのルート
const FS_MilanotoVerona = L.polyline
([MilanotoVerona,Brescia,Peschiera,VeronaPortaNova], { color: '#000000' }).addTo(map);