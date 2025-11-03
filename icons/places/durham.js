
    //名所（place）アイコン：
    var placeIcon = L.icon({
    iconUrl: "image/icon/place.png",
    iconRetinaUrl:"image/icon/place@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-place"
    });

    
    //その他（photo）アイコン：
    var photoIcon = L.icon({
    iconUrl: "image/icon/photo.png",
    iconRetinaUrl:"image/icon/photo@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-photo"
    });

//1. 場所名
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="画像を張る" alt="場所名">
    <a href="" class="popup_link">場所名</a>
    <div class="popup_caption">
    <p>
    場所の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([場所の座標], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);
