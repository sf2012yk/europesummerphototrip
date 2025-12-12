// 地図クリック時のポップアップ表示を制限
map.on('click', function(e) {
  // クリックされたレイヤー（マーカーなど）を取得
  var clickedLayer = e.originalEvent.target;

  // マーカー以外なら何もしない
  if (!clickedLayer.classList.contains('leaflet-marker-icon')) {
    return;
  }
});