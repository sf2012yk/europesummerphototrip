// Icons module

    //他の町（city）アイコン：
    var cityIcon = L.icon({
    iconUrl: "image/icon/city.png",
    iconRetinaUrl:"image/icon/city@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-city"
    });

// 現在位置
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOCf5-1RbmdkYQKC2u_GuIX80H0bsXlVl8pKz_lojWCiuF_PlKiSEGtuNdabWB0NfM3GgEvD32HOmGruyipUy58eDs1bJjkTmh0pLu3OBjFXmk-TGRHBUn8jpA5DpM5N7VXuiGujBLgEVOFfEzS0R9KMQ=w1216-h913-s-no-gm?authuser=0" alt="Geneva">
    <a href="Geneva.html" class="popup_link">Geneva</a>
    <div class="popup_caption">
    <p>
    Genevaの紹介
    </p>
    </div>
  </div>
`;
var markerGenevaCity = L.marker([46.20482063647935, 6.156612231092377], {
  icon: cityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);
