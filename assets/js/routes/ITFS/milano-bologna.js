// 鉄道ルート ミラノ⇔ボローニャ　//
const MilanotoBologna = [45.486022373628984, 9.20430169797116];
const BolognafromMilano = [44.50625199262663, 11.342946531828515];

// ミラノ⇔ボローニャのルート
const FS_MilanotoBologna = L.polyline
([MilanotoBologna,BolognafromMilano], { color: '#000000' }).addTo(map);