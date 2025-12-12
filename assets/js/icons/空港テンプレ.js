// Icons module

 

//空港（airportnow）アイコン：
var AirportIcon = L.icon({
iconUrl: "image/icon/airport.png",
iconRetinaUrl:"image/icon/airport@2x.png",
shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
iconSize:     [40, 40], // アイコンのサイズ
shadowSize:   [41, 25], // size of the shadow
iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
shadowAnchor: [16, 28],  // the same for the shadow
popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
className: "icon-airport"
});


//  空港名
    var popupContent = `
      <div class="popup_summer">
    <a href="image/map/airport/空港名.JPG" 
       data-lightbox="image" 
       data-title="空港名">
      <img class="popup_img" loading="eager" src="image/map/airport/空港名.JPG" alt="空港名 Airport">
    </a>
    <div class="popup_caption">
    <a href="image/map/airport/空港名.JPG" data-lightbox="image" data-title="空港名 Airport" class="popup_link">空港名 Airport</a>
    <p>
    空港名の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="空港名ToA空港Card">
    <p class="next_text">▶ A空港（aakm）</span>
    </div>
    <div class="next_card" id="空港名ToB空港Card">
    <p class="next_text">▶ B空港（bbkm）</span>
    </div>
    <div class="next_card" id="空港名ToC空港Card">
    <p class="next_text">▶ C空港（cckm）</span>
    </div>
    </div>
  </div>
`;
var marker空港名 = L.marker([空港の座標], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);
