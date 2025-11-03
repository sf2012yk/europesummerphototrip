// Icons module

 //現在の都市（citynow）アイコン：
    var maincityIcon = L.icon({
    iconUrl: "image/icon/maincity.png",
    iconRetinaUrl:"image/icon/maincity@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-city"
    });


// ロンドンの現在位置：
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNKJ8ncBVCHZJSmkZd8RnKlW3o8fNJDOSGIucr2Xq7ci4ladtOqfFt6wvZi24SrLkLrNrIFFZ7v45PZywRcjko_dx8jn8BvK27pBCMObZc0DdymmJhwU6-3adf4mrd3azvzCTO8NTOmGuVQCdQEvjOrgA=w1324-h869-s-no-gm?authuser=0" alt="London">
    <a href="London.html" class="popup_link">London</a>
    <div class="popup_caption">
    <p>
    ロンドンの紹介
    </p>
    </div>
  </div>
`;
var markerLondonCity = L.marker([51.51066089388474, -0.11054466987584811], {
  icon: maincityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);