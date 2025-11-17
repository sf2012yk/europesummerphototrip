    //隠し（hidden）アイコン：
    var hiddenIcon = L.icon({
    iconUrl: "image/icon/hidden.png",
    iconRetinaUrl:"image/icon/hidden@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-hidden"
    });

//ロンドンマラソンする、体操服全力少女
    var popupContent = `
    <div class="popup_summer">
    <a href="Hidden.html" class="popup_link">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNL_pB_U8ulCGMkYJf0m12C4mb0xXOWV8rJFxoC2k4o08VTpVhSxtMcBamHet20iij7UCQWyEPA-RZlH_JOikyQxmtWOK6NqyoZ9Xbj-b6Mk_C8YVo9a2pb3okb0s_mbIxjN3ySIgsQEbMgB4AylcL_GA=w1216-h913-s-no-gm?authuser=0" alt="ロンドンマラソンする、体操服全力少女">
    ロンドンマラソンする<br/>体操服全力少女</a>
    <div class="popup_caption">
    <p>
    場所の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([51.501073829838674, -0.127194699081446], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//ワイン畑でほほ笑む少女
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNtEOw7wkv6XSq3aGN73eNjlsmfbJB-eJZNC7rXjRei9peGK0fGYV3fxJcyqo_03pVW2FWQZXSAD4p-x3HN932lyxR0N3NohLvTIHJVjE0mO-2Hk3JtmQX9hf4s2wesC2CUrI0tTNoe2rm_WK-E6pPjzQ=w1216-h913-s-no-gm?authuser=0" alt="場所名">
    <a href="Hidden.html" class="popup_link">ワイン畑でほほ笑む少女</a>
    <div class="popup_caption">
    <p>
    ワイン畑でほほ笑む少女
    </p>
    </div>
  </div>
`;
var marker = L.marker([46.494551269807005, 6.727661990211627], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);



//澄み渡った山頂でハイ、チーズ！
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczPqeZ5rdN-7ruzWKVyhUaMceW_wgTzfIWxFjhuI5gLQQh2A0nLPWcz5uhVJ4sbQqGbr0TKrdGrQrKoEGWIQW6n1S6NbTOKaeIBh-YTDlU-W7n6DqphvjL7AHu7Wr19s-IBnD5E8Os6tYYdYW3ihqyaGjA=w1216-h913-s-no-gm?authuser=0" alt="場所名">
    <a href="Hidden.html" class="popup_link">澄み渡った山頂でハイ、チーズ！</a>
    <div class="popup_caption">
    <p>
    澄み渡った山頂でハイ、チーズ！
    </p>
    </div>
  </div>
`;
var marker = L.marker([47.210341080084504, 11.452044198424705], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//SLを楽しむ学ラン少女
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczPOkbaospIegFBkyINyxlkNvXuDPzgpIQkX-srx4XTovIBU7G-iJkVNE5Cb-XA4yg00qZv49UiJXypgzaQ-2C1cAbjIMCRtOKPTfWxmVW5c0n0SJDoLwA2wmL8UqncpKWazy7utwUl-fH3p_C7gpKXZPQ=w1216-h913-s-no-gm?authuser=0" alt="場所名">
    <a href="Hidden.html" class="popup_link">SLを楽しむ学ラン少女</a>
    <div class="popup_caption">
    <p>
    SLを楽しむ学ラン少女
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
