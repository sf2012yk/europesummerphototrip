// 座標
const FirenzetoRoma = [43.776672747755704, 11.247826497426637];
const CampoMarte = [43.77701263109392, 11.276934674255093];

const Rovezzano = [43.76858370841619, 11.308005382763852];
const Candeli = [43.76164135053058, 11.333325435236347];
const Candeli_s = [43.75546684453242, 11.335478870753526];
const Giuliothetruffle = [43.744306644163956, 11.348696796894354];
const SanDonatoInCollina = [43.721483758499815, 11.382685749354525];
const Cellai = [43.7103172228471, 11.400881855474527];
const Salceto = [43.697067309355674, 11.430824941164131];
const Matassino = [43.62386516262195, 11.48147751722698];
const BadiolaI = [43.577091524890335, 11.534223204461473];
const Monticello = [43.53194729233898, 11.626036025668531];
const Vitereta = [43.52261303414887, 11.6640514641842];
const Indicatore = [43.48478734472558, 11.786645425762789];
const SanZeno = [43.42323577835426, 11.825730424687118];
const Rigutino = [43.36586201891346, 11.852107565235778];
const Frassineto = [43.357322150236755, 11.855653873955713];
const Ronzano = [43.26552948728117, 11.874105393163711];
const Creti = [43.24945218528813, 11.878151985378574];
const Orvieto = [42.72404732095011, 12.126645649350241];
const RomaTiburtina = [41.91137876844585, 12.53091769172978];
const TerminiEastRM = [41.89418849874925, 12.512855650904784];
const RomaTermini = [41.90087073150933, 12.502142953698526];

// ルート
const FS_FirenzetoRoma = L.polyline
([FirenzetoRoma,CampoMarte,Rovezzano,Candeli,Candeli_s,Giuliothetruffle,SanDonatoInCollina,
Cellai,Salceto,Matassino,BadiolaI,Monticello,Vitereta,Indicatore,SanZeno,Rigutino,
Frassineto,Ronzano,Creti,
Orvieto,RomaTiburtina,TerminiEastRM,RomaTermini], { color: '#000000' }).addTo(map);