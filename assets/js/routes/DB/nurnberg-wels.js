// 始発 終着 
const NurnbergOBB = [49.44567847015998, 11.081854166258191];
const WelsOBB  = [48.16636798232817, 14.02726211324162];


// ルートポリライン
const NUWE = L.polyline
([NurnbergOBB,WelsOBB
], { color: '#000000' }).addTo(map);
