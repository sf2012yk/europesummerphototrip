    //隠し（hidden）アイコン：
    var hiddenIcon = L.icon({
    iconUrl: "../../assets/image/icon/hidden.png",
    iconRetinaUrl:"../../assets/image/icon/hidden@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-hidden"
    });

//ローマの少女
    var popupContent = `
    <div class="popup_summer">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_1.webp" alt="ローマの少女">
    ローマの少女</a>
    <div class="popup_caption">
    <p>
    場所の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([41.89501247191476, 12.482844272597719], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//アムステルダムの少女
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_2.webp" alt="場所名">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">アムステルダムの少女</a>
    <div class="popup_caption">
    <p>
    アムステルダムの少女
    </p>
    </div>
  </div>
`;
var marker = L.marker([52.37283293674396, 4.892959737598786], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//SLを楽しむ少女
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_3.webp" alt="場所名">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">SLを楽しむ少女</a>
    <div class="popup_caption">
    <p>
    SLを楽しむ少女
    </p>
    </div>
  </div>
`;
var marker = L.marker([50.434463914316396, -3.565016090145747], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);



//ベルサイユの庭にて
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_4.webp" alt="場所名">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">ベルサイユの庭にて</a>
    <div class="popup_caption">
    <p>
    ベルサイユの庭にて
    </p>
    </div>
  </div>
`;
var marker = L.marker([48.80535950888077, 2.1181667141239684], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//シーフード
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_5.webp" alt="場所名">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">シーフード</a>
    <div class="popup_caption">
    <p>
    シーフード
    </p>
    </div>
  </div>
`;
var marker = L.marker([50.2152235572057, -5.477994454332828], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//噴水の雨でアイスをどうぞ
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_6.webp" alt="場所名">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">噴水の雨でアイスをどうぞ</a>
    <div class="popup_caption">
    <p>
    噴水の雨でアイスをどうぞ
    </p>
    </div>
  </div>
`;
var marker = L.marker([46.20899547593764, 6.150054768882521], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


