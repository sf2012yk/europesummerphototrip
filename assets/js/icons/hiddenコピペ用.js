    //隠し（hidden）アイコン：
    var hiddenIcon = L.icon({
    iconUrl: "image/icon/hidden.png",
    iconRetinaUrl:"image/icon/hidden@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-photo"
    });

//※タイトル（上書き禁止）
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="画像を張る" alt="場所名">
    <a href="Hidden.html" class="popup_link">※タイトル（上書き禁止）</a>
    <div class="popup_caption">
    <p>
    場所の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([場所の座標], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);