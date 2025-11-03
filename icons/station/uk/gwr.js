// Icons module

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

     //通過駅等（station_2）アイコン：
    var station_2_Icon = L.icon({
    iconUrl: "image/icon/train_2.png",
    iconRetinaUrl:"image/icon/train_2@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station_2"
    });

// GW_01 Paddington駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczN-sXjoM_julfAy79icUCV25Jx_1CgoMlUECJzCB21aRBYp1jlUCBZLjb9DlH3QEMWpk20o4Muq4yOVerUDbbNvuvWdrXCTfQUgUne3GRTUPPAgKQUXOdYCGdRPg6DNwtfcWhbnmrW50D8pt129W7_ZYw=w855-h641-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Paddington">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczN-sXjoM_julfAy79icUCV25Jx_1CgoMlUECJzCB21aRBYp1jlUCBZLjb9DlH3QEMWpk20o4Muq4yOVerUDbbNvuvWdrXCTfQUgUne3GRTUPPAgKQUXOdYCGdRPg6DNwtfcWhbnmrW50D8pt129W7_ZYw=w855-h641-s-no-gm?authuser=0" alt="Paddington Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczN-sXjoM_julfAy79icUCV25Jx_1CgoMlUECJzCB21aRBYp1jlUCBZLjb9DlH3QEMWpk20o4Muq4yOVerUDbbNvuvWdrXCTfQUgUne3GRTUPPAgKQUXOdYCGdRPg6DNwtfcWhbnmrW50D8pt129W7_ZYw=w855-h641-s-no-gm?authuser=0" data-lightbox="image" data-title="Paddington Station" class="popup_link">Paddington Station</a>
    <p>
    ヴィクトリア様式の美しい駅舎を持つ、ロンドン西部のターミナル駅。映画『パディントン』の舞台として知られている。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="PaddingtonToWindsorCard">
    <p class="next_text">◀ Windsor (35km)</span>
    </div>
    <div class="next_card" id="goToBristolCard">
    <p class="next_text">◀ Bristol (190km)</span>
    </div>
    <div class="next_card" id="goToPlymouthCard">
    <p class="next_text">◀ Plymouth (360km)</span>
    </div>
    </div>
  </div>
`;
var markerPaddington = L.marker([51.516894337841045, -0.17712164609673156], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


// GW_01 Paddington空港専用
    var popupContent = `
     <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczO4-iwcVGYR2BbXSEI7aNjC4ozoZeKqS_pfd7NpYw8uVbRZp6eU0Km3YMxNjBWn1PNpvJ6VRJNhWnXDsCE8wJfEoxrxo1VtSVFTGpfimav0KEjhZDw5IY1fixCC71ahzVCH9Vgnw4nN1gUcaKUvLbBwZQ=w1216-h913-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Paddington">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczO4-iwcVGYR2BbXSEI7aNjC4ozoZeKqS_pfd7NpYw8uVbRZp6eU0Km3YMxNjBWn1PNpvJ6VRJNhWnXDsCE8wJfEoxrxo1VtSVFTGpfimav0KEjhZDw5IY1fixCC71ahzVCH9Vgnw4nN1gUcaKUvLbBwZQ=w1216-h913-s-no-gm?authuser=0" alt="Paddington Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczO4-iwcVGYR2BbXSEI7aNjC4ozoZeKqS_pfd7NpYw8uVbRZp6eU0Km3YMxNjBWn1PNpvJ6VRJNhWnXDsCE8wJfEoxrxo1VtSVFTGpfimav0KEjhZDw5IY1fixCC71ahzVCH9Vgnw4nN1gUcaKUvLbBwZQ=w1216-h913-s-no-gm?authuser=0" data-lightbox="image" data-title="Paddington Station" class="popup_link">Paddington (&#x2708; Access)</a>
    <p>
    ヴィクトリア様式の美しい駅舎を持つ、ロンドン西部のターミナル駅。パディントン駅からロンドン・ヒースロー空港へ直接アクセスすることが可能だ。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="goToHeathrowTerminal3Card">
    <p class="next_text">&#x2708; Terminal3 (23km)</span>
    </div>
    <div class="next_card" id="goToHeathrowTerminal5Card">
    <p class="next_text">&#x2708; Terminal5 (25km)</span>
    </div>
    </div>
  </div>
`;
var markerPaddingtonLHR = L.marker([51.51820949995243, -0.1781408423165258], {
  icon: AirportIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);
  
//  Slough
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Slough">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" alt="Slough Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" data-lightbox="image" data-title="Slough Station" class="popup_link">Slough Station</a>
    <p>
    Slough駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="SloughToLondonCard">
    <p class="next_text">▶ London（30km）</span>
    </div>
    <div class="next_card" id="SloughToReadingCard">
    <p class="next_text">◀ Reading（27km）</span>
    </div>
    <div class="next_card" id="SloughToWindsorCard">
    <p class="next_text">▼ Windsor（5km）</span>
    </div>
    </div>
  </div>
`;
var markerSlough = L.marker([51.511845860102135, -0.591373216810744], {
  icon: station_2_Icon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Windsor
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Windsor">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" alt="Windsor Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" data-lightbox="image" data-title="Windsor Station" class="popup_link">Windsor Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="WindsorToPaddingtonCard">
    <p class="next_text">▶ London（35km）</span>
    </div>
    <div class="next_card" id="WindsorToSloughCard">
    <p class="next_text">▲ Slough（5km）</span>
    </div>
    </div>
  </div>
`;
var markerWindsor = L.marker([51.48317195088449, -0.6100296685527282], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//  GW_03 Reading駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Reading">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" alt="Reading Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" data-lightbox="image" data-title="Reading Station" class="popup_link">Reading Station</a>
    <p>
    レディング駅は実質乗換専用駅。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="RedingToPaddingtonCard">
    <p class="next_text">▶ London（57km）</span>
    </div>
    <div class="next_card" id="RedingToBathSpaCard">
    <p class="next_text">◀ Bath（120km）</span>
    </div>
    <div class="next_card" id="RedingToPlymouthCard">
    <p class="next_text">▼ Plymouth（300km）</span>
    </div>
    </div>
  </div>
`;
var markerReading = L.marker([51.45934668763566, -0.9732287208600584], {
  icon: station_2_Icon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


//  GWR Bath Spa
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Bath Spa">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" alt="Bath Spa Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" data-lightbox="image" data-title="Bath Spa Station" class="popup_link">Bath Spa Station</a>
    <p>
    Bath Spaの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="BathSpaToBristolCard">
    <p class="next_text">◀ Bristol（20km）</span>
    </div>
    <div class="next_card" id="BathSpaToReadingCard">
    <p class="next_text">▶ Reading（115km）</span>
    </div>
    <div class="next_card" id="BathSpaToPaddingtonCard">
    <p class="next_text">▶ London（170km）</span>
    </div>
    </div>
  </div>
`;
var markerBathSpa = L.marker([51.37779463871984, -2.3569100502506695], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Bristol_Temple_Meads駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczO5hSjMiE555ijI6J4l8zDoi4_LMwBZcEWdKWgwM8dRPn2hxGsCKr7y5ynZT3c2DO8LdeOQ3UoQ-JZxGkM-41eGpqRnpVzsRJOdQqeb16oI5ZRKINsNA8D9j-5NLd9wSvf56F9iTS18GH7lda-oQUmFpQ=w1130-h848-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Bristol Temple Meads">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczO5hSjMiE555ijI6J4l8zDoi4_LMwBZcEWdKWgwM8dRPn2hxGsCKr7y5ynZT3c2DO8LdeOQ3UoQ-JZxGkM-41eGpqRnpVzsRJOdQqeb16oI5ZRKINsNA8D9j-5NLd9wSvf56F9iTS18GH7lda-oQUmFpQ=w1130-h848-s-no-gm?authuser=0" alt="Bristol Temple Meads Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczO5hSjMiE555ijI6J4l8zDoi4_LMwBZcEWdKWgwM8dRPn2hxGsCKr7y5ynZT3c2DO8LdeOQ3UoQ-JZxGkM-41eGpqRnpVzsRJOdQqeb16oI5ZRKINsNA8D9j-5NLd9wSvf56F9iTS18GH7lda-oQUmFpQ=w1130-h848-s-no-gm?authuser=0" data-lightbox="image" data-title="Bristol Temple Meads Station" class="popup_link">Bristol Temple Meads Station</a>
    <p>
    ブリストルの代表駅。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card">
    <p class="next_text">▲ Birmingham（150km）</span>
    </div>
    <div class="next_card" id="BristoltoPaddingtonCard">
    <p class="next_text">▶ London（192km）</span>
    </div>
    <div class="next_card">
    <p class="next_text">▼ Plymouth（200km）</span>
    </div>
    </div>
  </div>
`;
var markerBristol = L.marker([51.44953427862961, -2.5807735188100613], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Taunton駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczPu9G7xWwGwJQP7AAIq93SteLojmMik74lh_tqtGNhLpJLrRre9BPqxiu2HKW11LsHrQK79CFo6BreKgVTtJUS-VJjeQdp6tJAW2BRu7_cGBv7U8caK16jEwe8WrkvOSR4iPefWzBsHiyoWICVSqPUzDg=w855-h641-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Taunton Station">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" alt="Paddington Station">
    </a>
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" data-lightbox="image" data-title="Paddington Station" class="popup_link">Paddington Station</a>
  </div>
`;
var marker = L.marker([51.02331377215021, -3.1035371321110854], {
  icon: station_2_Icon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Exeter St Davids駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOviB6qZjQrmVMm3AFlXsN0gsgksZOe6JwLQolHFtbTA0NjBJ_Hqb0FKSyIND3hVgldnRyMgcq5MOhNI1GrZSJlR3c8VnInEkcAVxfMMU9JAoeRQ5fzHXF4KpZnxVTgHF29je_YjEZTYkNuBuZGiOvuqw=w855-h641-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Exeter St Davids Station">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOviB6qZjQrmVMm3AFlXsN0gsgksZOe6JwLQolHFtbTA0NjBJ_Hqb0FKSyIND3hVgldnRyMgcq5MOhNI1GrZSJlR3c8VnInEkcAVxfMMU9JAoeRQ5fzHXF4KpZnxVTgHF29je_YjEZTYkNuBuZGiOvuqw=w855-h641-s-no-gm?authuser=0" alt="Exeter St Davids Station">
    </a>
    <a href="https://lh3.googleusercontent.com/pw/AP1GczOviB6qZjQrmVMm3AFlXsN0gsgksZOe6JwLQolHFtbTA0NjBJ_Hqb0FKSyIND3hVgldnRyMgcq5MOhNI1GrZSJlR3c8VnInEkcAVxfMMU9JAoeRQ5fzHXF4KpZnxVTgHF29je_YjEZTYkNuBuZGiOvuqw=w855-h641-s-no-gm?authuser=0" data-lightbox="image" data-title="Exeter St Davids Station" class="popup_link">Exeter St Davids Station</a>
  </div>
`;
var marker = L.marker([50.7294333305537, -3.543730040076946], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Dawlish駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNmJ9AAjh-18RYEDIF6X_2Wv13MpyqRCbF6KHn9S67rRV3z0sYvnQtwYRWRLeBgAyF-1OuTsv4bypP1e6D6rrxEcYsqErBzOn_J_jn8cPdesNLPPzvtkiJdYvl-oN_ByKd1HAbhEMGQvP0ZhrrjTGlq7w=w855-h641-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Dawlish Station">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNmJ9AAjh-18RYEDIF6X_2Wv13MpyqRCbF6KHn9S67rRV3z0sYvnQtwYRWRLeBgAyF-1OuTsv4bypP1e6D6rrxEcYsqErBzOn_J_jn8cPdesNLPPzvtkiJdYvl-oN_ByKd1HAbhEMGQvP0ZhrrjTGlq7w=w855-h641-s-no-gm?authuser=0" alt="Dawlish Station">
    </a>
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNmJ9AAjh-18RYEDIF6X_2Wv13MpyqRCbF6KHn9S67rRV3z0sYvnQtwYRWRLeBgAyF-1OuTsv4bypP1e6D6rrxEcYsqErBzOn_J_jn8cPdesNLPPzvtkiJdYvl-oN_ByKd1HAbhEMGQvP0ZhrrjTGlq7w=w855-h641-s-no-gm?authuser=0" data-lightbox="image" data-title="Dawlish Station" class="popup_link">Dawlish Station</a>
  </div>
`;
var marker = L.marker([50.58064708288686, -3.4645937602425056], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


// GW_06 Plymouth駅：
    var popupContent = `

     <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczMjjKuhNTuRs4DjHeVRR_TVSfbMDXQGgI1jbGQgrBBqjI0yhi_TNRI9_OAKYRoW6dv3wgMp0fS8Q2PEpF99zr3Vdp9fEhNorFKiaIe3invwyUEf25gjjF2iKxDiBI7M-n1A2TlnncYwWJiuYgQt3ITsgg=w855-h641-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Plymouth Station">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczMjjKuhNTuRs4DjHeVRR_TVSfbMDXQGgI1jbGQgrBBqjI0yhi_TNRI9_OAKYRoW6dv3wgMp0fS8Q2PEpF99zr3Vdp9fEhNorFKiaIe3invwyUEf25gjjF2iKxDiBI7M-n1A2TlnncYwWJiuYgQt3ITsgg=w855-h641-s-no-gm?authuser=0" alt="Plymouth Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczMjjKuhNTuRs4DjHeVRR_TVSfbMDXQGgI1jbGQgrBBqjI0yhi_TNRI9_OAKYRoW6dv3wgMp0fS8Q2PEpF99zr3Vdp9fEhNorFKiaIe3invwyUEf25gjjF2iKxDiBI7M-n1A2TlnncYwWJiuYgQt3ITsgg=w855-h641-s-no-gm?authuser=0" data-lightbox="image" data-title="Plymouth Station" class="popup_link">Plymouth Station</a>
    <p>
    プリマスの代表駅。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="PlymouthToPaddingtonCard">
    <p class="next_text">▶ London（360km）</span>
    </div>
    <div class="next_card" id="goToPenzanceFromPlymouth">
    <p class="next_text">◀ Penzance（140km）</span>
    </div>
    </div>
  </div>
`;
var markerPlymouth = L.marker([50.3776674014801, -4.144099241952264], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//  Penzance
    var popupContent = `
    
      <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczPVN3pw1fT0DCD8T_YAty8jHqZf5SlE3s6ZGvxNJIzkJ0UlnRx1fF1U2U5HwiYoIQa1-ST2UKJhpIIYunuhswCDnTPkngg101gju2FUir1Rbsp_VRbDYNTL6g_UE26EfU7lfvT84n9UT9Ci2GeHyMHF9A=w855-h641-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Penzance">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczPVN3pw1fT0DCD8T_YAty8jHqZf5SlE3s6ZGvxNJIzkJ0UlnRx1fF1U2U5HwiYoIQa1-ST2UKJhpIIYunuhswCDnTPkngg101gju2FUir1Rbsp_VRbDYNTL6g_UE26EfU7lfvT84n9UT9Ci2GeHyMHF9A=w855-h641-s-no-gm?authuser=0" alt="Penzance Station">
    </a>
    <div class="popup_caption">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczPVN3pw1fT0DCD8T_YAty8jHqZf5SlE3s6ZGvxNJIzkJ0UlnRx1fF1U2U5HwiYoIQa1-ST2UKJhpIIYunuhswCDnTPkngg101gju2FUir1Rbsp_VRbDYNTL6g_UE26EfU7lfvT84n9UT9Ci2GeHyMHF9A=w855-h641-s-no-gm?authuser=0" data-lightbox="image" data-title="Penzance Station" class="popup_link">Penzance Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="PenzanceToPlymouthCard">
    <p class="next_text">▶ Plymouth（140km）</span>
    </div>
    <div class="next_card" id="PenzanceToStIvesCard">
    <p class="next_text">▶ StIves（17km）</span>
    </div>
    </div>
  </div>
`;
var markerPenzance = L.marker([50.12204180137364, -5.532390786439714], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);