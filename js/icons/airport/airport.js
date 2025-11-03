// Icons module

 //airportnow）アイコン：
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

//  HeathrowTerminal3
    var popupContent = `
      <div class="popup_summer">
    <a href="Heathrow.html">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOVA0lszW19T33CQSVnR3jkgabom6r_pQom9wzyj0W0bCJL0oKGwdAOs9mWv-LtYRiiHbcCNq0tkhS1-AeLwCiiYeqp5O_yq4jHa1UkrX21317okVCm-ryXcinGeJOAMw2_4QIM6dpwJRE2sI9qdXc9Uw=w1216-h913-s-no-gm?authuser=0" alt="Heathrow Terminal5">
    </a>
    <div class="popup_caption">
    <a href="Heathrow.html" class="popup_link">Heathrow Terminal3</a>
    <p>
    ヒースロー空港第3ターミナルの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="HeathrowToDubaiCard">
    <p class="next_text">&#x2708; Dubai（5000km）</span>
    </div>
    <div class="next_card" id="HeathrowTerminal3ToPaddingtonCard">
    <p class="next_text">London City（23km）</span>
    </div>
    </div>
  </div>
`;
var markerHeathrowTerminal3 = L.marker([51.46896718671588, -0.4574958618544679], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  HeathrowTerminal4
    var popupContent = `
      <div class="popup_summer">
     <a href="Heathrow.html">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczP-jQJd_W8nNrmnZAKKLHERH5ZDyWr_9Grg98hhnSm2QaJnTjxe7hGTSb5EXxMebp8IVKMN7v-dShDDKY3QT6vbjAW76N1OQ8DSw-5SqhlWaQTtei_X4cB8wJRl02DnpsYLNGvE6bitDzl1nFIy0A1DEA=w1216-h913-s-no-gm?authuser=0" alt="Heathrow Terminal4">
    </a>
    <div class="popup_caption">
    <a href="Heathrow.html" class="popup_link">Heathrow Terminal4</a>
    <p>
    ヒースロー空港第4ターミナルの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="HeathrowToDohaCard">
    <p class="next_text">&#x2708; Doha（5500km）</span>
    </div>
    </div>
  </div>
`;
var markerHeathrowTerminal4 = L.marker([51.460130701266216, -0.44843566368321325], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);




//  HeathrowTerminal5
    var popupContent = `
      <div class="popup_summer">
    <a href="Heathrow.html">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczPfjXvfkWlO54wlW6HbEc02M3bOtF5CApFJFjLzPLebQA9t14qtfcsA1hEWMTuZSSFP734n5xf7CUQIYEmioXWjnKBZ0mw3U3v3bWUyw0kS8E9U-J67z_0QCwfDCKFbHya1z-5g4HGS6NSUL8O7GR9jxQ=w1216-h913-s-no-gm?authuser=0" alt="Heathrow Terminal5">
    </a>
    <div class="popup_caption">
    <a href="Heathrow.html" class="popup_link">Heathrow Terminal5</a>
    <p>
    ヒースロー空港第5ターミナルの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="HeathrowToGenevaCard">
    <p class="next_text">&#x2708; Geneva（600km）</span>
    </div>
    <div class="next_card" id="HeathrowToViennaCard">
    <p class="next_text">&#x2708; Vienna（1200km）</span>
    </div>
    <div class="next_card" id="HeathrowToJFKCard">
    <p class="next_text">&#x2708; New York（5000km）</span>
    </div>
    <div class="next_card" id="HeathrowTerminal5ToPaddingtonCard">
    <p class="next_text">London City（25km）</span>
    </div>
    </div>
  </div>
`;
var markerHeathrowTerminal5 = L.marker([51.47259800120853, -0.4859364875464297], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Geneva
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOm2vt8paVC9oT1CMYiFFFZY4rgzo_7RK0ET4XqINc52AvEXqrCej8eONv7STcbpureGwW7XX8Q1bfxD5gf3hQh60G1Z1B1Sr9DotCyBeQZwLN_MnHLFU_L2EAjiPW68iQsm1XAtOWu06EEafF_OeNuKg=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Geneva">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOm2vt8paVC9oT1CMYiFFFZY4rgzo_7RK0ET4XqINc52AvEXqrCej8eONv7STcbpureGwW7XX8Q1bfxD5gf3hQh60G1Z1B1Sr9DotCyBeQZwLN_MnHLFU_L2EAjiPW68iQsm1XAtOWu06EEafF_OeNuKg=w1216-h913-s-no-gm?authuser=0" alt="Geneva Airport">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOm2vt8paVC9oT1CMYiFFFZY4rgzo_7RK0ET4XqINc52AvEXqrCej8eONv7STcbpureGwW7XX8Q1bfxD5gf3hQh60G1Z1B1Sr9DotCyBeQZwLN_MnHLFU_L2EAjiPW68iQsm1XAtOWu06EEafF_OeNuKg=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Geneva Airport" class="popup_link">Geneva Airport</a>
    <p>
    Genevaの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="GenevaToHeathrowCard">
    <p class="next_text">▶ London（aakm）</span>
    </div>
    <div class="next_card" id="GenevaToViennaCard">
    <p class="next_text">▶ Vienna（bbkm）</span>
    </div>
    <div class="next_card" id="GenevaToDubaiCard">
    <p class="next_text">▶ Dubai（5000km）</span>
    </div>
    </div>
  </div>
`;
var markerGenevaAirport = L.marker([46.2314339144919, 6.10746786781946], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Dubai
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczP2tYXenesUh0lNLxK9NLDpkldkmcxIriEipbHICpM-Kwll-DhtvmxJ4U5lKASlZcwHsFZ2c5PT0gkId54ukfS6mLG3cvXJMzF6hnRVloXbjjG2JVNUWmS_kfVBALYOtXtEoD9zrjuRwykS0a9JU_olGQ=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Dubai">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczP2tYXenesUh0lNLxK9NLDpkldkmcxIriEipbHICpM-Kwll-DhtvmxJ4U5lKASlZcwHsFZ2c5PT0gkId54ukfS6mLG3cvXJMzF6hnRVloXbjjG2JVNUWmS_kfVBALYOtXtEoD9zrjuRwykS0a9JU_olGQ=w1216-h913-s-no-gm?authuser=0" alt="Dubai Airport">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczP2tYXenesUh0lNLxK9NLDpkldkmcxIriEipbHICpM-Kwll-DhtvmxJ4U5lKASlZcwHsFZ2c5PT0gkId54ukfS6mLG3cvXJMzF6hnRVloXbjjG2JVNUWmS_kfVBALYOtXtEoD9zrjuRwykS0a9JU_olGQ=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Dubai Airport" class="popup_link">Dubai Airport</a>
    <p>
    Dubai空港の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="DubaiToHeathrowCard">
    <p class="next_text">◀ London（5500km）</span>
    </div>
    <div class="next_card" id="DubaiToGenevaCard">
    <p class="next_text">◀ Geneva（5400km）</span>
    </div>
    <div class="next_card" id="DubaiToViennaCard">
    <p class="next_text">◀ Vienna（5000km）</span>
    </div>
     <div class="next_card" id="DubaiToDohaCard">
    <p class="next_text">◀ Doha（500km）</span>
    </div>
    </div>
  </div>
`;
var markerDubai = L.marker([25.24916816381139, 55.361520925952654], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Doha
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNyN0NtbaJucFiRe0oh4yokeYLae4gqb5L7NgfBnoDsvue9hY9gYP73trcVmtb2rGLJPlaiS5xB3ycWuynvGSc26fTJDw2jlAWnf6xe2J9qWXCojuLbXw5F3q_KX2mc3_O-oVTmWMfrTWo1_fOz_gVJjw=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Doha">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNyN0NtbaJucFiRe0oh4yokeYLae4gqb5L7NgfBnoDsvue9hY9gYP73trcVmtb2rGLJPlaiS5xB3ycWuynvGSc26fTJDw2jlAWnf6xe2J9qWXCojuLbXw5F3q_KX2mc3_O-oVTmWMfrTWo1_fOz_gVJjw=w1216-h913-s-no-gm?authuser=0" alt="Doha Airport">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNyN0NtbaJucFiRe0oh4yokeYLae4gqb5L7NgfBnoDsvue9hY9gYP73trcVmtb2rGLJPlaiS5xB3ycWuynvGSc26fTJDw2jlAWnf6xe2J9qWXCojuLbXw5F3q_KX2mc3_O-oVTmWMfrTWo1_fOz_gVJjw=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Doha Airport" class="popup_link">Doha Airport</a>
    <p>
    Dohaの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="DohaToHeathrowCard">
    <p class="next_text">▶ London（5500km）</span>
    </div>
    <div class="next_card" id="DohaToGenevaCard">
    <p class="next_text">▶ Geneva（5400km）</span>
    </div>
    <div class="next_card" id="DohaToDubaiCard">
    <p class="next_text">▶ Dubai（500km）</span>
    </div>
    </div>
  </div>
`;
var markerDoha = L.marker([25.26393391919446, 51.61163864611003], {
  icon: AirportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


