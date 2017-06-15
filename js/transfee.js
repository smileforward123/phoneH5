$(function(){
     var swiper = new Swiper('.swiper-container', {
       
        slidesPerView: 4,
        //设置slider容器能够同时显示的slides数量(carousel模式)。
        //可以设置为number或者 'auto'则自动根据slides的宽度来设定数量
       
        /*spaceBetween: 30*/
    });
    $('.goodsfeeBox').each(function(){
        $(this).swiper({
            slidesPerView:'4',
            
        })
    }) 






})

