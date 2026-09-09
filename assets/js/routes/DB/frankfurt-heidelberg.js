// 始発 終着 
const FrankfurtHE = [50.10686863147775, 8.662539152027437];
const Darmstadt  = [49.87228696869196, 8.62988492872985];
const Bensheim  = [49.68129911359879, 8.61674060005169];
const Weinheim  = [49.553117757766266, 8.665155323016803];
const Heidelberg  = [49.40372754662851, 8.675195233717874];

const KarlsruheHE = [48.99331884774764, 8.401167393215417];

// ルートポリライン
const FRHE = L.polyline
([FrankfurtHE,Darmstadt,Bensheim,Weinheim,Heidelberg,KarlsruheHE
], { color: '#000000' }).addTo(map);
