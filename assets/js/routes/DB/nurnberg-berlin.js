// 始発 終着 
const NurnbergBE = [49.44567847015998, 11.081854166258191];
const RothenburgerBE = [49.445401316160705, 11.05482890362677];
const FurthBE  = [49.46985188318612, 10.989870547573046];
const Klinikum  = [49.48295700910558, 10.966944631855934];
const Vach  = [49.517177513250054, 10.985952481855717];
const Eltersdorf  = [49.552407242469485, 10.996433097801551];
const ErlangenBruck  = [49.57037736162475, 10.997045132495753];
const Erlangen  = [49.59610660022165, 11.001697801708104];
const Bubenreuth  = [49.629316399556075, 11.011740594425827];
const Baiersdorf  = [49.65627732521943, 11.037035965415381];
const Baiersdorf_N  = [49.66551130523826, 11.045638798178931];
const Kersbach  = [49.68608303661976, 11.06026913117825];
const Forchheim  = [49.71707447485989, 11.069973278278182];
const Forchheim_N  = [49.73211271076613, 11.06442395973038];
const Eggolsheim  = [49.77435999820868, 11.037320322816917];
const Buttenheim  = [49.799648930747665, 11.013439496000283];
const Hirschaid  = [49.81958791374776, 10.991066540477147];
const Strullendorf  = [49.8453299615769, 10.961679356346446];
const Bamberg_S  = [49.8929741070335, 10.908887058083154];
const Bamberg  = [49.90062356088548, 10.899776879778614];
const CoburgJC_S  = [50.212876457265196, 11.004812420052968];
const CoburgJC_N  = [50.291557321631814, 11.010976069186706];
const Erfurt  = [50.971957039947505, 11.037586687669473];
const Erfurt_E  = [50.97739231522237, 11.074017697367267];
const AmEttersberg  = [51.07230464539126, 11.244268443294143];
const Nermsdorf  = [51.10728075333558, 11.35020535661314];
const Judendorf  = [51.307677688651324, 11.697387302080436];
const Korbetha  = [51.407854065924724, 11.950864775375662];
const Grobers  = [51.43257374181624, 12.117914628405487];
const LeipzigAirport = [51.42357607012894, 12.222939032595644];
const LeipzigMesseBE = [51.39601640834038, 12.388404626503629];
const EssenerStraseBE = [51.37645433376871, 12.39631124668708];
const HamburgerStraseBE = [51.35848413806431, 12.395430787346239];
const LeipzigBE = [51.34592967003053, 12.382321489123433];
const HamburgerStraseLP = [51.35848413806431, 12.395430787346239];
const EssenerStraseLP = [51.37645433376871, 12.39631124668708];
const LeipzigMesseLP = [51.39601640834038, 12.388404626503629];
const Rackwitz  = [51.441119689441486, 12.374471411533046];
const Zschortau  = [51.48408358303902, 12.36082934626432];
const Delitzsch  = [51.5243701321388, 12.345753503943174];
const Bitterfeld  = [51.62268772717748, 12.316498778530175];
const Burgkemnitz  = [51.68953907493726, 12.408062720442533];
const Grafenhainichen  = [51.72471922434223, 12.459808259269817];
const Radis  = [51.75461725890832, 12.503974034129222];
const Bergwitz  = [51.8035030035358, 12.576350619027746];
const Pratau  = [51.84333174463929, 12.63593669215351];
const LutherstadtWittenberg  = [51.86787700435274, 12.661747515888795];
const Bulzig  = [51.8944772118699, 12.752158020064007];
const Zahna_S  = [51.91666523181289, 12.776860548409196];
const Blonsdorf  = [51.955326726748744, 12.895145876673974];
const Wolmsdorf  = [51.963476650227356, 12.941845236727511];
const Niedergorsdorf  = [51.96794391096224, 12.978457588136568];
const Juterbog  = [51.9974912079011, 13.053955661957966];
const Luckenwalde  = [52.09072405843885, 13.160363774875464];
const NutheUrstromtal  = [52.116637233857354, 13.194138208560322];
const Trebbin  = [52.21680933398283, 13.22957339845333];
const Thyrow  = [52.246971328957486, 13.2595093192693];
const Ludwigsfelde  = [52.298086223819396, 13.26732998489966];
const Birkengrund  = [52.315351510304524, 13.271708633566238];
const Grosbeeren  = [52.35098443968499, 13.28466329048004];
const Teltow  = [52.388669444573075, 13.299763626968971];
const LichterfeldeSud  = [52.41081805435211, 13.308770972036209];
const LichterfeldeOst  = [52.429913226024986, 13.328185496163812];
const Lankwitz  = [52.43888836215948, 13.34234755090273];
const BerlinSudkreuz  = [52.47599044551001, 13.364986315731054];
const Gleisdreieck  = [52.49905404222827, 13.372581057511715];
const BerlinHbf = [52.52502885143288, 13.369368039466343];


// ルートポリライン
const NUBE = L.polyline
([NurnbergBE,RothenburgerBE,FurthBE,Klinikum,Vach,Eltersdorf,ErlangenBruck,
Erlangen,Bubenreuth,Baiersdorf,Baiersdorf_N,Kersbach,
Forchheim,Forchheim_N,Eggolsheim,Buttenheim,Hirschaid,Strullendorf,Bamberg_S,
Bamberg,CoburgJC_S,CoburgJC_N,
Erfurt,Erfurt_E,AmEttersberg,Nermsdorf,Judendorf,Korbetha,Grobers,
LeipzigAirport,LeipzigMesseBE,EssenerStraseBE,HamburgerStraseBE,
LeipzigBE,HamburgerStraseLP,EssenerStraseLP,LeipzigMesseLP,Rackwitz,Zschortau,Delitzsch,
Bitterfeld,Burgkemnitz,Grafenhainichen,Radis,Bergwitz,Pratau,
LutherstadtWittenberg,Bulzig,Zahna_S,Blonsdorf,Wolmsdorf,Niedergorsdorf,Juterbog,Luckenwalde,NutheUrstromtal,
Trebbin,Thyrow,Ludwigsfelde,Birkengrund,Grosbeeren,Teltow,LichterfeldeSud,LichterfeldeOst,Lankwitz,
BerlinSudkreuz,Gleisdreieck,
BerlinHbf
], { color: '#000000' }).addTo(map);
