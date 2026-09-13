 //主要駅（station）アイコン：
    var stationIcon = L.icon({
    iconUrl: "image/icon/train.png",
    iconRetinaUrl:"image/icon/train@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station"
    });


//  Changi Airport
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Changi Airport">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/singapore/changi.webp" alt="Changi Airport">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Changi Airport Station" class="popup_link">Changi Airport</a>
    </div>
  </div>
`;
var markerChangiAirport = L.marker([1.357498138269599, 103.98833398368646], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Tanah Merah
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Tanah Merah">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/singapore/tanahmerah.webp" alt="Tanah Merah Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Tanah Merah Station" class="popup_link">Tanah Merah Station</a>
    </div>
  </div>
`;
var markerTanahMerah = L.marker([1.3272411492366385, 103.94652956758296], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Bugis
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Bugis">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/singapore/bugis.webp" alt="Bugis Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Bugis Station" class="popup_link">Bugis Station</a>
    </div>
  </div>
`;
var markerBugis = L.marker([1.300501193271015, 103.85610157289547], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Bayfront
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Bayfront">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/singapore/bayfront.webp" alt="Bayfront Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Bayfront Station" class="popup_link">Bay front Station</a>
    </div>
  </div>
`;
var markerBayfront = L.marker([1.2813273586611666, 103.85882983475442], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);