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

//1. エディンバラ城
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="image/map/place/Edinburgh/EdhinburghCastle.JPG" alt="London">
    <a href="" class="popup_link">Edhinburgh Castle</a>
    <div class="popup_caption">
    <p>
    エディンバラ城の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([55.948444921561936, -3.2011290508602874], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);
