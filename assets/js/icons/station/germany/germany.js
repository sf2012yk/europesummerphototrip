// Icons module

  //主要駅（station）アイコン：
    var stationIcon = L.icon({
    iconUrl: "../../assets/image/icon/train.png",
    iconRetinaUrl:"../../assets/image/icon/train@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station"
    });

//  Cologne
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/cologne.webp" 
       data-lightbox="image" 
       data-title="Cologne">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/cologne.webp" alt="Cologne Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/cologne.webp" data-lightbox="image" data-title="Cologne Station" class="popup_link">Cologne Station</a>
    </div>
  </div>
`;
var markerCologne = L.marker([50.94325481600945, 6.9585388293166295], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Flughafen
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Flughafen">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/flughafen.webp" alt="Flughafen">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Frankfurt Station" class="popup_link">Flughafen (Airport)</a>
    </div>
  </div>
`;
var markerFlughafen = L.marker([50.05293131033702, 8.570193641183682], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Frankfurt
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Frankfurt">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/frankfurt.webp" alt="Frankfurt Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Frankfurt Station" class="popup_link">Frankfurt Station</a>
    </div>
  </div>
`;
var markerFrankfurt = L.marker([50.10686863147775, 8.662539152027437], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

  //  nurnberg
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Nurnberg">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/nurnberg.webp" alt="Nurnberg Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Nurnberg Station" class="popup_link">Nurnberg Station</a>
    </div>
  </div>
`;
var markerNurnberg = L.marker([49.44567847015998, 11.081854166258191], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

 //  Wurzburg
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Wurzburg">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/wurzburg.webp" alt="Wurzburg Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Wurzburg Station" class="popup_link">Wurzburg Station</a>
    </div>
  </div>
`;
var markerWurzburg = L.marker([49.80211087604598, 9.935629793264921], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);