//activeクリックでレイアウトが切り替える
document.querySelectorAll('.genre_img').forEach(thumb => {
    thumb.addEventListener('click', () => {

        // すべて非表示
        document.querySelectorAll('.genre_item_info')
                       .forEach(sec => sec.classList.remove('active'));

        // 指定レイアウトだけ表示
        const targetId = thumb.dataset.target;
        document.getElementById(targetId).classList.add('active');

    });
});
