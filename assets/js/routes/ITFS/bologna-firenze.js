// 鉄道ルート　//
const BolognatoFirenze = [44.50625199262663, 11.342946531828515];
const FirenzefromBologna = [43.776672747755704, 11.247826497426637];

// ボローニャ⇔フィレンツェのルート
const FS_BolognatoFirenze = L.polyline
([BolognatoFirenze,FirenzefromBologna], { color: '#000000' }).addTo(map);