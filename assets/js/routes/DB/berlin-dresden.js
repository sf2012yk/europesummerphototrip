// 始発 終着 
const BerlinDE = [52.52502885143288, 13.369368039466343];
const Gleisdreieck_DE  = [52.49905404222827, 13.372581057511715];
const Sudkreuz_DE  = [52.47599044551001, 13.364986315731054];
const Attilastr  = [52.44766483113916, 13.36102656023887];
const Buckower  = [52.411059198312046, 13.382392608506832];
const Schichauweg  = [52.39861188298902, 13.389046813651111];
const Lichtenrade  = [52.38723310134964, 13.396367896676724];
const Friederikenhof  = [52.377238023106315, 13.40225860526616];
const Mahlow = [52.36016179043615, 13.407898635999786];
const Rangsdorf  = [52.29407590424255, 13.430750956583546];
const Pramsdorf  = [52.27650879348714, 13.436525086558087];
const Dabendorf  = [52.23730773182275, 13.437539984504962];
const Bernhardsmuh  = [52.196036373900775, 13.448024569892452];
const Wunsdorf  = [52.16531564334669, 13.468122841117067];
const Neuhof  = [52.13953427016087, 13.479439551553291];
const Baruth  = [52.05846291897863, 13.511686732114514];
const Klasdorf  = [52.0213157271693, 13.543731679371405];
const Golsen  = [51.97421397131961, 13.574823096133102];
const Drahnsdorf  = [51.915690854428014, 13.58144469156895];
const LuckauUckro  = [51.85205257075311, 13.607787171718245];
const Walddrehna  = [51.77286192521354, 13.617164030523188];
const Brenitz  = [51.70232744204757, 13.59637177496483];
const Doberlug  = [51.62068699912552, 13.564106237455908];
const Ruckersdorf  = [51.567256656167025, 13.574165029090075];
const Hohenleipisch  = [51.492709321019696, 13.5649339003935];
const Elsterwerda  = [51.45994397124668, 13.516221550648764];
const ProsenOst  = [51.42534708171095, 13.500526264102417];
const Frauenhain  = [51.384256307325415, 13.503550887643593];
const Treugebohla  = [51.362496770988066, 13.51295714009022];
const Zabeltitz  = [51.348969497620736, 13.515647260406215];
const Grosenhain_n  = [51.30218887875119, 13.519955163386232];
const Geislitz  = [51.234615949166596, 13.547234323740101];
const Weinbohla  = [51.162903925225365, 13.574797811611289];
const Krankenhaus  = [51.129580301712785, 13.591556511453192];
const RadebeulDE  = [51.11445308275689, 13.606456994621118];
const KotzschenbrodaDE  = [51.107586262274666, 13.628645185970715];
const WeintraubeDE  = [51.10311917816266, 13.65569489256003];
const RadebeulOstDE  = [51.098358112913, 13.680034860786856];
const TrachauDE  = [51.08990692138327, 13.70405223425129];
const PieschenDE  = [51.08188577616254, 13.725439265300274];
const DresdenNeustadtDE  = [51.06591908540031, 13.740443430436299];
const DresdenMitteDE  = [51.05612063809271, 13.724040722254376];
const DresdenDE = [51.04057033145552, 13.731107960804325];


// ルートポリライン
const BEDE = L.polyline
([BerlinDE,Gleisdreieck_DE,
Sudkreuz_DE,Attilastr,Buckower,Schichauweg,Lichtenrade,Friederikenhof,
Mahlow,Rangsdorf,Pramsdorf,Dabendorf,Bernhardsmuh,Wunsdorf,Neuhof,Baruth,Klasdorf,
Golsen,Drahnsdorf,LuckauUckro,Walddrehna,Brenitz,Doberlug,Ruckersdorf,Hohenleipisch,
Elsterwerda,ProsenOst,Frauenhain,Treugebohla,Zabeltitz,Grosenhain_n,Geislitz,
Weinbohla,Krankenhaus,RadebeulDE,KotzschenbrodaDE,WeintraubeDE,RadebeulOstDE,TrachauDE,PieschenDE,
DresdenNeustadtDE,DresdenMitteDE,
DresdenDE
], { color: '#000000' }).addTo(map);
