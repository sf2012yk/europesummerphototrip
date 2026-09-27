// 始発 終着 
const LeipzigDE = [51.34592967003053, 12.382321489123433];
const Stannebeinplatz = [51.349815057216695, 12.405810817733231];
const Paunsdorf = [51.344248111323076, 12.445103222619803];
const Engelsdorf = [51.343859273168505, 12.478204229181229];
const Borsdorf = [51.345528512862934, 12.540600332167074];
const Gerichshain = [51.35361544112563, 12.586610643096625];
const Machern = [51.35763661722712, 12.627252025231599];
const Altenbach = [51.35590122093612, 12.68082719290744];
const Bennewitz = [51.35601243682524, 12.708684136339224];
const Kuhren = [51.34934256210348, 12.83312278521922];
const MarkSchonstadt = [51.35091558127427, 12.866287412601201];
const Radegast = [51.35382708185254, 12.92996157423919];
const Dahlen = [51.35119808062277, 12.982267266533237];
const Oschatz = [51.31170489376715, 13.10384758940707];
const Pochra = [51.31225091592678, 13.248805725704747];
const Riesa = [51.309766116006614, 13.28776399520987];
const RoderauBobersen = [51.322670866756454, 13.315979861486309];
const Glaubitz = [51.31743246332902, 13.365960251450492];
const Nunchritz = [51.30268437387979, 13.392052352941004];
const Nunchritz_E = [51.29221911660141, 13.410634696844252];
const Striesen = [51.26299225332443, 13.482638696054735];
const Priestewitz = [51.25100318735977, 13.508140690327826];
const Niederau = [51.17643859387305, 13.560609402900443];
const WeinbohlaHp = [51.15910128424312, 13.561521596868634];
const BikeparkCoswig = [51.13612251172887, 13.56986533645337];
const Coswig_E = [51.12025574655795, 13.587472260367006];
const Radebeul_LP  = [51.11445308275689, 13.606456994621118];
const Kotzschenbroda_LP  = [51.107586262274666, 13.628645185970715];
const Weintraube_LP  = [51.10311917816266, 13.65569489256003];
const RadebeulOst_LP  = [51.098358112913, 13.680034860786856];
const Trachau_LP  = [51.08990692138327, 13.70405223425129];
const Pieschen_LP  = [51.08188577616254, 13.725439265300274];
const DresdenNeustadt_LP  = [51.06591908540031, 13.740443430436299];
const DresdenMitte_LP  = [51.05612063809271, 13.724040722254376];
const Dresden = [51.04057033145552, 13.731107960804325];


// ルートポリライン
const LPDE = L.polyline
([LeipzigDE,Stannebeinplatz,Paunsdorf,Engelsdorf,Borsdorf,Gerichshain,
Machern,Altenbach,Bennewitz,Kuhren,MarkSchonstadt,Radegast,Dahlen,Oschatz,Pochra,
Riesa,RoderauBobersen,Glaubitz,Nunchritz,Nunchritz_E,Striesen,
Priestewitz,Niederau,WeinbohlaHp,BikeparkCoswig,Coswig_E,
Radebeul_LP,Kotzschenbroda_LP,Weintraube_LP,RadebeulOst_LP,Trachau_LP,Pieschen_LP,
DresdenNeustadt_LP,DresdenMitte_LP,
Dresden
], { color: '#000000' }).addTo(map);
