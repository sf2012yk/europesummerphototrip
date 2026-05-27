// 座標
const RomatoNapoli = [41.90087073150933, 12.502142953698526];
const TerminiEastMP = [41.89418849874925, 12.512855650904784];
const NapolifronRoma = [40.8529073790409, 14.273130614605218];


// ルート
const FS_RomatoNapoli = L.polyline
([RomatoNapoli,TerminiEastMP,NapolifronRoma], { color: '#000000' }).addTo(map);