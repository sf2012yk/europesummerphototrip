    //名所（place）アイコン：
    var placeIcon = L.icon({
    iconUrl: "../../assets/image/icon/place.png",
    iconRetinaUrl:"../../assets/image/icon/place@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-place"
    });

// 4) 緑アイコン用 LayerGroup を作成してマップに追加
const greenIconEdinburgh = L.layerGroup().addTo(map);



// グループに入れる（ここが重要）
// 配列にまとめて一括追加
[markerEdinburghCastle
].forEach(m => greenIconEdhinburgh.addLayer(m));

const HIDE_ZOOM_Edhinburgh = 11;  // 例：ズーム11未満で非表示

//  ズームに応じた表示/非表示
function updateGreenIconsVisibility() {
  const z = map.getZoom();
  if (z < HIDE_ZOOM_Edhinburgh) {
    if (map.hasLayer(greenIconEdinburgh)) map.removeLayer(greenIconEdinburgh);
  } else {
    if (!map.hasLayer(greenIconEdinburgh)) map.addLayer(greenIconEdinburgh);
  }
}

// 初期反映＆イベント登録
updateGreenIconsVisibility();
map.on('zoomend', updateGreenIconsVisibility);
