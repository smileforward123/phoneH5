(function (doc, win) {
    var docEl = doc.documentElement, //获取html标签
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;

            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            // console.log(100 * (clientWidth / 750) + 'px');
            //console.log(100 * (clientWidth / 640))
            //console.log(clientWidth)            
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
