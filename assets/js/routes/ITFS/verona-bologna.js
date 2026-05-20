// 鉄道ルート ベローナ⇔ボローニャ　//
const VeronatoBologna = [45.428597030990964, 10.981918606991616];
const BolognafromVerona = [44.50625199262663, 11.342946531828515];

// ミラノ⇔ボローニャのルート
const FS_VeronatoBologna = L.polyline
([VeronatoBologna,BolognafromVerona], { color: '#000000' }).addTo(map);