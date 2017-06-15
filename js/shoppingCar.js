
$(document).ready(function(){
   // $(".bubble").text($(".singles").length);
    $(".item_count").text($(".Select_single").length);
})

$(function(){
    //显示购物车中商品数量
   function Initialization(){
     //$(".bubble").text($(".singles").length);
       var length=0;//购物车中商品数量：
       $(".wrapper .Select_single").each(function(index,item){
         
          if($(this).siblings('.prizeBox').attr("status")=="0"){
            length++;
          }


       })
      
       $(".item_count").text(length);
   }
    //全选主键点击事件
    $("#MainSelectAllitems").click(function(){
        var current = $(this);
        if($(this).hasClass("nonSelect")){
            $(".singles").removeClass("nonSelect_single").addClass("Select_single");
            $(".ShopLeverSelectAll").removeClass("shop_select_none").addClass("shop_select_all");
            $(this).removeAttr("class").addClass("selected");
            calcalator(current);
			     var  str =parseFloat(	$("#sums").text()).toFixed(2);
             $("#sums").text(str);
            Initialization();
        }else if($(this).hasClass("selected")){
            $(".singles").removeClass("Select_single").addClass("nonSelect_single");
            $(".ShopLeverSelectAll").removeClass("shop_select_all").addClass("shop_select_none");
            $(this).removeAttr("class").addClass("nonSelect");
            calcalator(current);
			     var  str =parseFloat(	$("#sums").text()).toFixed(2);
             $("#sums").text(str);
            Initialization();

        }
    })

    //店铺全选
    $(".ShopLeverSelectAll").click(function(){
        var  shop_cur = $(this);
        if(shop_cur.hasClass("shop_select_none")){
            shop_cur.removeClass("shop_select_none").addClass("shop_select_all");
            shop_cur.parent().siblings().find(".singles").removeClass("nonSelect_single").addClass("Select_single");
            calcalator(shop_cur);
			     var  str =parseFloat(	$("#sums").text()).toFixed(2);
             $("#sums").text(str);
            Initialization();
        }else if(shop_cur.hasClass("shop_select_all")){
            shop_cur.removeClass("shop_select_all").addClass("shop_select_none");
            shop_cur.parent().siblings().find(".singles").removeClass("Select_single").addClass("nonSelect_single");
            $("#MainSelectAllitems").removeAttr("class").addClass("nonSelect");
            calcalator(shop_cur);
			     var  str =parseFloat(	$("#sums").text()).toFixed(2);
             $("#sums").text(str);
            Initialization();
        }
    })

    //商品单选点击事件
      var user_Id;
    $(".singles").click(function(){
        var Cur_singles = $(this);
        if(Cur_singles.hasClass("nonSelect_single")){
            Cur_singles.removeClass("nonSelect_single").addClass("Select_single");
            calcalator(Cur_singles);
			   var  str =parseFloat(	$("#sums").text()).toFixed(2);
         
             $("#sums").text(str);
            Initialization();
        }else if(Cur_singles.hasClass("Select_single")){
            Cur_singles.removeClass("Select_single").addClass("nonSelect_single");
            $("#MainSelectAllitems").removeAttr("class").addClass("nonSelect");
            Cur_singles. parent().siblings(".Pick_All_Goods").find(".ShopLeverSelectAll").removeClass("shop_select_all").addClass("shop_select_none");
            calcalator(Cur_singles);
			     var  str =parseFloat(	$("#sums").text()).toFixed(2);
             $("#sums").text(str);
            Initialization();
        }
    })
    //删除按钮
    $(".delete").click(function(){
       
        var id=[];

        $(".Select_single").each(function(k,v){
              id.push($(this).siblings(".prizeBox").attr("id"));
           
           
        })
      
        //调用的是删除购物车的接口
        if(id.length==0){
          layer.msg("You have not selected the deleted ");
        }else{
           del(id.join(","));
        }
       
       /* if($(".singles").hasClass("Select_single")){
              singleDel();
              Initialization();            
        }
           //Alldel(); 

        Initialization();*/
    })
    function del(delid){
       Datas({
                url:"goods/remove_goods_cart",
                datas:{"id":delid},//goodsCarts下面的id
                success:function(data){
                  
                    if(data.status){

                         layer.msg(data.message);
                         setTimeout(function(){
                            location.reload();
                        },500)
                         Fn();
                    }
                },
                error:function(data){
                    layer.msg(data.message);
                }
      })
    }
    
    //商品件数加减
    $(".adding").click(function(){
        $(this).prop("disabled",false);
        var t=$(this).siblings(".numberOfArticle");
        var prices = parseFloat($(this).siblings(".price").text());
        $(this).prop("disabled",false);
        var singles = $(this).parent().siblings(".singles");
        var thiss = $(this);
        if (singles.hasClass("Select_single")){
            add_subtract(thiss,prices);
		     var  str =parseFloat($("#sums").text()).toFixed(2);
             $("#sums").text(str);
        }
        if(parseInt(t.val())>=$(this).parents(".goodBox").attr("goods_inventory")){
                        t.val(parseInt(t.val()));
                           layer.msg(getI18nPageByKey("outofStock"));//超出库存
                        $(this).prop("disabled",true);
                        return;
        }else{
               $(this).prop("disabled",false);
              t.val(parseInt(t.val())+1);
        }
       


        Datas({
                url:"goods/update_cart_goods",
                datas:{
                    "user_id":ls.getItem("userId")?ls.getItem("userId"):"0",
                    "goods_cart_id":$(this).parent().attr("id"),
                    "abs":$(this).prev().val()
                },
                success:function(data){
                  
                    if(data.status){
                        
                        
                     }else{
                       
                     } 
                },
                error:function(data){
                    layer.msg(data.message);
                }
        })

    })
  
    $(".subtract").click(function(){
        $(".adding").prop("disabled",false);
      
        var singles = $(this).parent().siblings(".singles");
        var t=$(this).siblings(".numberOfArticle");
        var prices = parseFloat($(this).prev().text());
        var thiss = $(this);
        
        if(t.val()<=1){
            t.val(1);

        }else{
          t.val(parseInt(t.val())-1);
        }
        Datas({
                url:"goods/update_cart_goods",
                datas:{
                    "user_id":ls.getItem("userId")?ls.getItem("userId"):"0",
                    "goods_cart_id":$(this).parent().attr("id"),
                    "abs":t.val()
                },
                success:function(data){
                   
                    if(data.status){
                        
                    }else{
                      layer.msg(data.message);
                    }
                },
                error:function(data){
                    layer.msg(data.message);
                }
        })
        if (singles.hasClass("Select_single")){
            add_subtract(thiss,prices);
           var  str =parseFloat($("#sums").text()).toFixed(2);
            $("#sums").text(str);
        }

    })


})

//添加数量减少数量改变总金额，总数量：
function add_subtract(object,price){
    if (object.is(".adding"))
    {
        var pre_Sum   =   parseFloat($("#sums").text());
        var pre_count =   parseInt($(".item_count").text());
        pre_Sum += price;
        pre_count += 1;
        $("#sums").text(pre_Sum);

    }else if (object.is(".subtract"))
    {var pre_Sum   =   parseFloat($("#sums").text());
        var pre_count =   parseInt($(".item_count").text());
        pre_Sum -= price;
        pre_count -= 1;
        $("#sums").text(pre_Sum);


    }

}

//单选删除
function singleDel(){
  
    var  sums = 0 ;
    var  quantiry = 0;
    $(".Select_single").each(function(){
        var Select_single_num = $(this).parent().parent().find(".nonSelect_single").length;
        if(Select_single_num>0){
            $(this).parent().remove();
            $("#sums").text(sums);

        }else if(Select_single_num == 0){
            $(this).parent().parent().remove();
            $("#sums").text(sums);

        }
    })
}

/*function Alldel(){
    var  sums = 0 ;
    var  quantiry = 0;

    if($("#MainSelectAllitems").hasClass("selected")){
        $(".Store_wrapper").remove();
        $("#sums").text(sums);

    }else if($(".shop_select_all")){
        $(".shop_select_all").each(function(){
            $(this).parent().parent().remove();
            $("#sums").text(sums);

        })
    }

}*/

//计算调用函数
function calcalator(object){
    var  sums = 0 ;
    var  quantiry = 0;
    //当顶层全选为选中时结算方法
    if(object.hasClass("selected")){

        var  numberOfArticleB =  $(".numberOfArticle");
        numberOfArticleB.each(function(index,item){
          
            if($(this).parent().attr("status")=="0"){
              var numberEach =  parseInt($(this).val());
              var priceeach =  parseFloat($(this).siblings(".price").text());
              quantiry += numberEach;
              sums += numberEach*priceeach;
              
            }
            

        })
        $("#sums").text(sums);

    }else if(object.hasClass("nonSelect")){
        //当顶层全选为未选中时结算方法
        $("#sums").text(sums);

    }else if(object.hasClass("nonSelect_single")){
        //当商品单选不选中时计算方法

        var otherHasSelect_single = $(".Select_single");
        otherHasSelect_single.each(function(index,item){
          
            if($(this).siblings(".prizeBox").attr("status")=="0"){
               var priceeach =parseFloat( $(this).siblings(".prizeBox").find(".price").text());
               var numberEach  =parseInt( $(this).siblings(".prizeBox").find(".numberOfArticle").val());
              quantiry += numberEach;
              sums += numberEach*priceeach;
             
             
            }
           


        })
        var getSlected = $(".Select_single");
        if(getSlected.length == 0){
            //如果被选中商品为零 则单选处于未选中的算法
            $("#sums").text(sums);

        }
        $("#sums").text(sums);

    } else if(object.hasClass("Select_single")){
        //当商品单选选中时计算方法
        var otherHasSelect_single = $(".Select_single");
        otherHasSelect_single.each(function(){
          if($(this).siblings(".prizeBox").attr("status")=="0"){
            var priceeach =parseFloat( $(this).siblings(".prizeBox").find(".price").text());
            var numberEach  =parseInt( $(this).siblings(".prizeBox").find(".numberOfArticle").val());
            quantiry += numberEach;
            sums += numberEach*priceeach;
           
          }

        })
         $("#sums").text(sums);
    }else if(object.hasClass("shop_select_all")){
        //店铺商品全选时计算
        var otherHasSelect_single = $(".Select_single");
        otherHasSelect_single.each(function(){
          if($(this).siblings(".prizeBox").attr("status")=="0"){
            var priceeach =parseFloat( $(this).siblings(".prizeBox").find(".price").text());
            var numberEach  =parseInt( $(this).siblings(".prizeBox").find(".numberOfArticle").val());
            quantiry += numberEach;
            sums += numberEach*priceeach;
           
          }

        })
         $("#sums").text(sums);
        

    }else if(object.hasClass("shop_select_none")){
        //店铺商品全选取消时计算
        var otherHasSelect_single = $(".Select_single");
        otherHasSelect_single.each(function(){
          if($(this).siblings(".prizeBox").attr("status")=="0"){
            var priceeach =parseFloat( $(this).siblings(".prizeBox").find(".price").text());
            var numberEach  =parseInt( $(this).siblings(".prizeBox").find(".numberOfArticle").val());
            quantiry += numberEach;
            sums += numberEach*priceeach;
            
          }

        })
        var getSlected = $(".Select_single");
        if(getSlected.length == 0){
            //如果被选中商品0
            $("#sums").text(sums);

        }
        $("#sums").text(sums);
    }
}


//购物车列表：
function Fn(){
     
    Datas({
          url:"goods/cart_list",
          datas:{
              "user_id":userId?userId:"",
              "cart_session_id":ls.getItem("cartSessionId"),
              "cart_type":cartType
          },
          success:function(data){
            
             if (data.status) {
                 var str="",val=data.data;
               
                 $('.empty').hide();
                 $.each(val,function(k,v){
                     str+='<div class="Store_wrapper" >'+
                               '<div class="Pick_All_Goods" id="'+v.storeId+'">'+
                                      '<a href="javascript:void(0);"  class="ShopLeverSelectAll shop_select_none"></a>'+
                                      '<img src="images/stroeIco.png"/>'+
                                      '<span class="shop_name">'+v.storeName+'</span>'+
                                      '<img class="arrow" src="images/property.png"/>'+
                                      '<div class="clearfix"></div>'+
                                '</div>'
                             $.each(v.goodsCarts,function(k1,v1){
                                    str += '<div class="goodBox" id="'+v1.goods.id+'" goods_inventory='+v1.goods.goods_inventory+'>'+
                                              '<a href="javascript:void(0);"  class="singles nonSelect_single"></a>'+
                                              '<a href="javascript:void(0)" class="mainPhot">'+
                                              '<img src="'+v1.goodsUrl+'">'+
                                                '<span class="reminder">'+getI18nPageByKey("isOffShelf")+'</span>'+
                                                '</a>'+
                                              '<a href="javascript:void(0)" class="goods_title">'+
                                                  '<b>'+v1.goods.goods_name+'</b>'+
                                                  '<p><span>'+v1.spec_info+'</span> </p>'+
                                                '</a>'+
                                              '<p class="prizeBox" id="'+v1.id+'" status='+v1.goods.goods_status+'>'+
                                                 ' <span class="money_symbol">RM</span>'+
                                                  '<span class="price">'+v1.price+'</span>'+
                                                  '<input type="button" class="subtract" value="-"/>'+
                                                  '<input type="button" class="numberOfArticle" readonly="readonly" value="'+v1.count+' "/>'+
                                                  '<input type="button" class="adding" value="+"/>'+

                                                 ' <div class="clearfix"></div>'+
                                              '</p>'+
                                         ' <div class="clearfix"></div>'+
                                      '</div>'
                            })
                       str+='</div>';          
                  })
          
                 $('.wrapper').html(str);
                 $(".wrapper .goodBox").each(function(index,item){
                      
                        if($(this).find(".prizeBox").attr("status")!="0"){
                          $(this).find(".reminder").show();

                        }



                  })  
                
                  var script=$("<script>");
                     script.attr("src","js/shoppingCar.js");
                  $('body').append(script);
             }else{
                  layer.msg(data.message);
             }
           },
           error:function(data){
              layer.msg(data.message);
              $('.empty').show();
           }
    })
}
