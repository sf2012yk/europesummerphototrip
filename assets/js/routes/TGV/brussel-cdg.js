// Brussel Amsterdam
const BrusselMidi_cdg = [50.83545522369974, 4.334752425478581];
const CDG_Terminal2 = [49.0048525524923, 2.570804097237211];
const MarnelaVallee_Chessy = [48.87034604956755, 2.782487028308822];
const FR_D96_CDGJC_cdg = [48.680356488445724, 2.7259448041472787]; 


// ブリュッセル⇔アムステルダムのルート
const TGV_BRCD = L.polyline
([BrusselMidi_cdg,CDG_Terminal2, MarnelaVallee_Chessy,
FR_D96_CDGJC_cdg], { color: '#000000' }).addTo(map);