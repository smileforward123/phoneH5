   (function(doc, win) {
   	var docEl = doc.documentElement,
   		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
   		recalc = function() {
   			var clientWidth = docEl.clientWidth;
   			if(!clientWidth) return;
   			if(clientWidth >= 640) {
   				docEl.style.fontSize = '25px';
   			} else {
   				docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';
   			}
   		};

   	if(!doc.addEventListener) return;
   	win.addEventListener(resizeEvt, recalc, false);
   	doc.addEventListener('DOMContentLoaded', recalc, false);
   })(document, window);
//手动控制轮播图
function lunbo_onclick(className) {
  var len=$('.'+className).find('.banner').children('li').length;
      // console.log($('.'+className).children('.banner').children('li'));
    $('.' + className).children('.banner').children('li').eq(0).show();
    $('.' + className).children('.circle').children('li').mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        i = index;
        $('.' + className).children('.banner').children('li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    })
    //自动播放
    var i = 0;
    var t = setInterval(move, 10000);
    //自动播放核心函数
    function move() {
        i++;
        if (i == len) {
            i = 0;
        }
        $('.' + className).children('.circle').children('li').eq(i).addClass('on').siblings().removeClass('on');
        $('.' + className).children('.banner').children('li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    //鼠标移入移除
    $('.carousel').hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(move, 1500);
    })
}

// window.onload = function () {
//     lunbo_onclick('carousel2');
//     lunbo_onclick('carousel1')
// }
//菜单切换
$(function () {
    			var left = $('.btn_slide_bar');
     			var bg = $('.layer');
    			var leftNav = $('#nav_conter');
    			showNav(left, leftNav, "left");
			    function showNav(btn, navDiv, direction) {
			        btn.on('click', function () {
			            bg.css({
			                display: "block",
			                transition: "opacity .5s"
			            });
			           if (direction == "left") {
			                navDiv.css({
			                    left: "0px",
			                    transition: "left 1s"
			                });
			            }
			        });
			    }
			    $('.menu_ul li').each(function () {
			        var dom = $(this);
			        dom.on('click', function () {
			            hideNav();
			            alert(dom.text())
			        });
			    });
			    bg.on('click', function () {
			        hideNav();
			    });

			    function hideNav() {
			        leftNav.css({
			            left: "-80%",
			            transition: "left .5s"
			        });
			        bg.css({
			            display: "none",
			            transition: "display 1s"
			        });
			    }
});
