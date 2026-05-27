// 始発 終着 
const RomatoFiumicino = [41.90087073150933, 12.502142953698526];
const TerminiEastFCO = [41.89418849874925, 12.512855650904784];
const ElColmadonFCO = [41.8889332818551, 12.522297026607491];

const RomaTuscolana  = [41.87867737061037, 12.522377913250414];

const Ostiense  = [41.8726933836221, 12.483840048075606];
const Ostiense_west  = [41.873172722442504, 12.480299532245972];

const RomaTrastevere  = [41.87221863480084, 12.465844755643412];
const VillaBonelli  = [41.847834274828855, 12.454999259153354];
const Magliana  = [41.8343305534218, 12.430754730777874];
const Muratella  = [41.82464019071216, 12.40808503039352];

const PonteGaleria  = [41.81827307925165, 12.345081061252525];
const FieraDiRoma  = [41.80979682562834, 12.318734989906897];
const ParcoLeonardo  = [41.799646512589, 12.29600640927251];

//カーブ南東//
const LagoTraiano_w = [41.78532230133605,12.263238509986687];
const Cn_LagoTraiano = [
(41.78532230133605 + 41.78657827669958) / 2 - 0.0014, //東//
(12.263238509986687 + 12.258571466317113) / 2 - 0.0014 //南//
];
const LagoTraiano_e = [41.78657827669958,12.258571466317113];
const CP_LagoTraiano = adaptiveBezierCurve(LagoTraiano_w,Cn_LagoTraiano,LagoTraiano_e,1);
const CP_LagoTraiano_Un = resamplePath(CP_LagoTraiano, 8);
const FiumicinofromRoma = [41.79398762260918, 12.251412147828841];

// ルートポリライン
const FS_RomatoFiumicino = L.polyline
([RomatoFiumicino,TerminiEastFCO,ElColmadonFCO,RomaTuscolana,
Ostiense,Ostiense_west,RomaTrastevere,VillaBonelli,Magliana,Muratella,
PonteGaleria,FieraDiRoma,ParcoLeonardo,...CP_LagoTraiano_Un,
FiumicinofromRoma
], { color: '#000000' }).addTo(map);
