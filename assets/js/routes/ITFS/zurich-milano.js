// Zurich Lyon module

// 鉄道ルート チューリッヒ⇔ベルン⇔ジュネーブ⇔リヨン駅　//
const ZurichtoMilano = [47.37828613669217, 8.539567674375348];
const Bellinzona = [46.195065033818025, 9.029263978447709];
const MilanofromZurich = [45.486022373628984, 9.20430169797116];

// チューリッヒ⇔ミラノのルート
const FS_ZurichtoMilano = L.polyline
([ZurichtoMilano,Bellinzona,MilanofromZurich], { color: '#000000' }).addTo(map);