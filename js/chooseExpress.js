/*$(".txtC").click(function(){
    console.log($(this));
    $(".txtC").removeClass("active");
    $(this).addClass("active");
    console.log($(this)[0].innerText);
    if($(this)[0].innerText=="普通快递"){
        $(".date").hide();
    }else{
        $(".date").show();
    }
  
})*/
//弹出日历插件：
    var now = new Date();
    var nowTime=now.getTime();
    var untilTime=nowTime+24*3600*1000*30;
    var until=new Date(untilTime);
    var y=until.getFullYear();
    var m=until.getMonth();
    var d=until.getDate();
   
// $('#expressDate input').mobiscroll().date({
//             theme: 'mobiscroll',       
//             lang: 'zh',                 
//             display: 'bottom', 
//             dateFormat: 'yy-mm-dd',          
//             min: new Date(now.getFullYear(), now.getMonth(), now.getDate()), 
//             max: new Date(y,m,d),
//             setText: 'confirm',//确认按钮名称 
//             cancelText: 'Cancel',
//             dayText: 'day',
//             monthText: 'month', 
//             yearText: 'year' //面板中年月日文字
// });
 var instance = mobiscroll.date('#demo', {
            theme: 'mobiscroll',
            display: 'bottom',
            // rtl: true,
            dateFormat: 'yy-mm-dd',          
            min: new Date(now.getFullYear(), now.getMonth(), now.getDate()), 
            max: new Date(y,m,d)
});

//弹出下拉列表;

$(".defTime").click(function(){
    $(".timeWhile").fadeIn();
    $(this).find(".blackTri").css({
        "transform":"rotate(180deg)",
    })
    


})
$(".timeWhile").delegate("li","click",function(){
    var txt=$(this).text();
    $(".timeWhile .correct").hide();
    $(this).find(".correct").show();
    $(".defTime strong").text(txt);
    $(".timeWhile").fadeOut();
    $(".blackTri").css({
        "transform":"rotate(0deg)",
    })



})
