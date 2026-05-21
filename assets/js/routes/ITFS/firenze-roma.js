// 座標
const FirenzetoRoma = [43.776672747755704, 11.247826497426637];
const Orvieto = [42.72404732095011, 12.126645649350241];
const RomaTiburtina = [41.91137876844585, 12.53091769172978];
const RomaTermini = [41.90087073150933, 12.502142953698526];

// ルート
const FS_FirenzetoRoma = L.polyline
([FirenzetoRoma,Orvieto,RomaTiburtina,RomaTermini], { color: '#000000' }).addTo(map);