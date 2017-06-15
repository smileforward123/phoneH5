/*弹出层*/
$(".property").on("click",function(){
   addThis=$(this);
    $(".mask").show();
    $(".goodsBox").css({
         "bottom":"0"
    })
})




/*数量增加或减少*/
//减少
/*var number=$(".num").html();
$(".reduce").on("click",function(){

    
    number--;
    if(number<=1){
        number=1;
    }
    $(".num").html(number);

})*/
/*//增加;
$(".add").on("click",function(){

    
    number++;
    
    $(".num").html(number);
    
   

})*/



var mySwiper = new Swiper('.swiper-container',{
        autoplay:3000,
        pagination: '.pagination',
        loop:true,//设置为true 则开启loop模式。loop模式：会在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换。
        grabCursor: true,
        paginationClickable: true//值为true时，点击分页器的指示点时会发生Swiper。
})


