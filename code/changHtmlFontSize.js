window.onresize = function() {
    let clientWith = document.documentElement.clientWidth;
    let size = clientWith / 1920 * 16;
    size = Math.max(8, max);
    document.documentElement.style.fontSize = size + 'px';
}