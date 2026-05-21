// 座標
const RomatoNapoli = [41.90087073150933, 12.502142953698526];
const NapolifronRoma = [40.8529073790409, 14.273130614605218];


// ルート
const FS_RomatoNapoli = L.polyline
([RomatoNapoli,NapolifronRoma], { color: '#000000' }).addTo(map);