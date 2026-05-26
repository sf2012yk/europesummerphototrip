// Zurich Lyon module

// 鉄道ルート チューリッヒ⇔ベルン⇔ジュネーブ⇔リヨン駅　//
const ZurichtoMilano = [47.37828613669217, 8.539567674375348];
const Bellinzona = [46.195065033818025, 9.029263978447709];
const Lugano = [46.00485220354984, 8.946722968889283];

const Chiasso = [45.831818639498245, 9.03154687608663];
const ComoS_Giovanni = [45.80812938571758, 9.073289642948026];
const Monza = [45.57669886148378, 9.272415167587344];
const Centrale_NEZR = [45.49380541011251, 9.211797676557616];
const MilanofromZurich = [45.486022373628984, 9.20430169797116];

// チューリッヒ⇔ミラノのルート
const FS_ZurichtoMilano = L.polyline
([ZurichtoMilano,Bellinzona,Lugano,Chiasso,ComoS_Giovanni,Monza,Centrale_NEZR,MilanofromZurich], 
{ color: '#000000', 
  opacity: '0.7' ,
  weight: 3
}
).addTo(map);