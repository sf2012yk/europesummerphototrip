// 鉄道ルート 
const LausanneToMilano = [46.51675788314949, 6.6288213303053105];
const Centrale_NELS = [45.49380541011251, 9.211797676557616];
const MilanofromLausanne = [45.486022373628984, 9.20430169797116];

// ルート
const SBB_LausanneToMilano = L.polyline
([LausanneToMilano,Centrale_NELS,
  MilanofromLausanne], { color: '#000000' }).addTo(map);