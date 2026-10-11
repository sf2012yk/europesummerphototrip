// 鉄道ルート ベローナ⇔インスブルック　//
const VeronatoInnsbruck = [45.428597030990964, 10.981918606991616];
const Rovereto = [45.890980275878114, 11.033410604586019];
const Trento = [46.07241603514322, 11.118842603474517];
const Bolzano = [46.496727511304, 11.359245439622844];
const Waidbruck = [46.601154505772755, 11.532448305259878];
const Scezze = [46.686286863816356, 11.633281173402318];
const Brixen = [46.7099705579555, 11.649724037174932];
const Fortezza = [46.788858994437476, 11.610034712271315];
const Mezzaselva = [46.80665960164877, 11.570811156792738];
const LeCave = [46.82225648535104, 11.536055138417998];
const CampoDiTrens = [46.86890325598875, 11.488899686274623];
const Vipiteno = [46.89584285283045, 11.43994082091083];
const ColleIsarco = [46.93799476330169, 11.441199465622542];
const LastaIT = [46.95458784793972, 11.392900204307061];
const borderwest_1 = [46.96296295464022, 11.399046537061357];
const borderwest_2 = [46.97081169053385, 11.437327023887642];
const borderBrennero = [46.97420854746137, 11.474062558362094];
const Brenner = [47.002432605909355, 11.505218570977489];
const Gries = [47.04113379380505, 11.48520475600756];
const SteinachinTirol = [47.0895077166199, 11.46974265068146];
const Matrei = [47.127131826080834, 11.452710770822705];
const InnsbruckfromVerona = [47.26253050680029, 11.40060390583582];

// ミラノ⇔ベローナのルート
const FS_VeronatoInnsbruck = L.polyline
([VeronatoInnsbruck,
Rovereto,
Trento,
Bolzano,Waidbruck,Scezze,
Brixen,Fortezza,Mezzaselva,LeCave,CampoDiTrens,Vipiteno,ColleIsarco,LastaIT,
borderwest_1,borderwest_2,borderBrennero,
Brenner,Gries,SteinachinTirol,Matrei,
InnsbruckfromVerona], { color: '#000000' }).addTo(map);