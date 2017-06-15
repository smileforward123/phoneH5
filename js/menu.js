//取消定单
function cancelOrder(id,order_id){	
	var str='<div class="content_dialog">'+
						'<h2>'+getI18nPageByKey("OrderNumber")/*订单号*/+'：<span>'+order_id+'</span></h2>'+
						'<h3>'+getI18nPageByKey("reasonOfCancelling")/*取消原因*/+':</h3>'+
						'<div class="list">'+
							'<label><span class="radio_left">'+getI18nPageByKey("otherReason")/*其他原因*/+'</span><span class="radio_rig"><input type="radio" id="radio1" name="radio" checked><i></i></span></label>'+
							'<label><span class="radio_left">'+getI18nPageByKey("unwillingToget")/*不想要了*/+'</span><span class="radio_rig"><input type="radio" id="radio2" name="radio"><i></i></span></label>'+
							'<label><span class="radio_left">'+getI18nPageByKey("incorrectAddress")/*地址填写错误*/+'</span><span class="radio_rig"><input type="radio" id="radio3" name="radio"><i></i></span></label>'+
						'</div>	'+
					'</div>'
		
        layer.open({
          type: 1,
          title :getI18nPageByKey("sureToCancelTheORder")/*'您确定要取消此定单吗？'*/,
          area: ['14.8rem', '12rem'],
          closeBtn: 0,
          content:str,
          btn: [getI18nPageByKey("cancel"), getI18nPageByKey("okBtn")],btn2:function(){//
          	  var stateInfo=$("input:checked").parent().siblings().text();
           		Datas({
           			url:"order_cancel",
           			datas:{"id":id,"user_id":ls.getItem("userId"),"other_state_info":"","state_info":stateInfo},
           			success:function(data){
           				layer.msg(data.message);
           				setTimeout(function(){
 							        location.reload();
           				},500)
           				
           			},
           			error:function(){
           				/*console.log("请求失败");*/
           			}
           		})

          }
          
        })
	 $('.layui-layer-title').css({"text-align":"center","width":"100%","padding-left":"24%"});
	 $('#layui-layer1').css({"border-radius":"5px 5px"});
	 $('.layui-layer-btn').css({"border-top":"1px solid #ccc","height":"1.5rem"});
	 $('.layui-layer-btn0').css({"float":"left","font-size":"0.6rem","border-right":"1px solid #ccc","display":"inline-block","background":"#fff","width":"42%","color":"#666","text-align":"center",'border':0,"border-right": "1px solid #ccc"});
	  $('.layui-layer-btn1').css({"float":"right","font-size":"0.6rem","border-right":"1px solid #ccc","display":"inline-block","background":"#fff","width":"42%","color":"#666","text-align":"center",'border':0});
    $('.nav_info .right>a').on('click',function(){
		if (!$(this).hasClass('cur')) {
			$(this).addClass('cur').siblings().removeClass('cur');
		};
	
	})
}
//申请退款
function applayOrder(id){
	var str1='<div class="rease"><h2>'+getI18nPageByKey("reasonOfRefunding")/*退款原因*/+'</h2><textarea  id="textarea" ></textarea></div>';
		layer.open({
          type: 1,
          title :getI18nPageByKey("applyForReturn")/*'申请退款'*/,
          area: ['14.8rem', '12rem'],
          closeBtn: 0,
          content: str1,
          btn: [getI18nPageByKey("cancel"), getI18nPageByKey("okBtn")],btn2:function(){//
           var val= $(".rease").find("textarea").val();
           		Datas({
           			url:"buyer/buyer_refund_save",
           			datas:{"of_id":id,"user_id":ls.getItem('userId'),"content":val},
           			success:function(data){
                  // console.log(data);
           				if (data.status) {
           					// layer.msg(data.message);
           					setTimeout(function(){
 								         location.reload();
           					},500)
           				};
           			},
           			error:function(){
           				console.log("请求失败");
           			}
           		})


          }

         })
		 $('.layui-layer-title').css({"text-align":"center","width":"100%","padding-left":"24%"});
	 		$('#layui-layer1').css({"border-radius":"5px 5px"});
		 $('.layui-layer-btn').css({"border-top":"1px solid #ccc","height":"1.5rem"});
		 $('.layui-layer-btn0').css({"float":"left","font-size":"0.6rem","border-right":"1px solid #ccc","display":"inline-block","background":"#fff","width":"42%","color":"#666","text-align":"center",'border':0,"border-right": "1px solid #ccc"});
		  $('.layui-layer-btn1').css({"float":"right","font-size":"0.6rem","border-right":"1px solid #ccc","display":"inline-block","background":"#fff","width":"42%","color":"#666","text-align":"center",'border':0});
		$('.nav_info .right>a').on('click',function(){
			if (!$(this).hasClass('cur')) {
				$(this).addClass('cur').siblings().removeClass('cur');
			};
		
		})
}
//确定收货
function confirmOrder(id){
  var str2=getI18nPageByKey("sureYouGotTheGoods")/*'是否确定已收货？'*/;
    layer.open({
              type: 1,
              title :false,
              area: ['14.8rem', '10rem'],
              closeBtn: 0,
              content: str2,
              btn: [getI18nPageByKey("cancel"), getI18nPageByKey("okBtn")],btn2:function(){//  
                    Datas({
                        url:"Confirm_receipt",
                        datas:{"orderId":id},
                        success:function(data){
                            if (data.status) {
                              layer.msg(data.message);
                              setTimeout(function(){
                                   location.reload();
                              },500)
                            };
                        },
                        error:function(){
                         /* console.log('请求失败');*/
                        }
                  })
              }

             })
     $('.layui-layer-content').css({"text-align":"center","padding-top":"24%"});
     $('.layui-layer').css({"border-radius":"10px 10px"})
     $('.layui-layer-btn').css({"border-top":"1px solid #ccc","height":"2.1rem","padding":"0 0","border-radius":"0 0 10px 10px","line-height":"2.1rem"});
     $('.layui-layer-btn0').css({"float":"left","font-size":"0.65rem","height":"2.1rem","line-height":"2.1rem","width":"50%","text-align":"center","background":"#fff","border":0,"color":"#999","border-radius":"0 0 0 10px","margin":"0 0","padding":"0 0","border-radius":"0 0 0 10px"});
      $('.layui-layer-btn1').css({"float":"right","font-size":"0.65rem","height":"2.1rem","line-height":"2.1rem","width":"50%","text-align":"center","background":"#c90c1e","color":"#fff","border-radius":"0 0 10px 0","border":"0","margin":"0 0","padding":"0 0"});
    $('.nav_info .right>a').on('click',function(){
      if (!$(this).hasClass('cur')) {
        $(this).addClass('cur').siblings().removeClass('cur');
      };
    
    })
}
//查看评价
function watchEval(ele,id){
  $(ele).attr('href',"evaluationDetail.html?menuId="+id);
}
//去支付
function pay(lineTypes,totalPrice,orderId){
  var lineType;
  if (lineTypes==true) {
     lineType=1;
    location.href="guestPayBill.html?lineType="+lineType+"&totalPrice="+totalPrice+"&orderId="+orderId;
  }else{
     lineType=0;
     location.href="guestPayBill.html?lineType="+lineType+"&totalPrice="+totalPrice+"&orderId="+orderId;
  }
}
//卖家留言
function contactSaller(ele,store_userId,store_userName){
  $(ele).attr("href","talkingMessage.html?storeUserId="+store_userId+"&storeUserName="+store_userName);
}
//定单详情
function menuDetai(id,storeId,orderStatus){
  location.href=" orderDetailWaitGoods.html?order_id="+id+"&store_id="+storeId+"&orderStatus="+orderStatus;
 
}
//店铺
function shopDetail(id){
   location.href=" obussinessmanShop.html?goods_store="+id;
 
}
//商品
function Item(goodId){
  location.href="product.html?goods_id="+goodId;
}
//已收货更多
function more(ele,id){
    var display=$(ele).parent().find(".box").css("display");
    if (display=="none") {
        $(ele).parent().find(".box").css({"display":"block"});
      }else if(display=="block"){
        $(ele).parent().find(".box").css({"display":"none"});
      }
     

}
//退款记录详情
function recode_detail(id){
  location.href="returnmoneyAgreen.html?order_id="+id;
}
//去评价
function Evaluate(id,store_id){
  location.href="publicComment.html?order_id="+id+"&store_id="+store_id;
}
function complain(id,storeId){
   location.href="chooseSubmitPro.html?order_id="+id+"&storeId="+storeId;
}
