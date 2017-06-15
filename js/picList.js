// JavaScript Document
 
$(function(){
  	$("#dimensionsUl  li").toggle(function(){
          $(this).children("a").children(".addface").show();
	 },function(){
		 $(this).children("a").children(".addface").hide();
	  });
    
	var orderBy,follow_type;
			var params = getParam(),
			  signType=getParam().signType,
			  goods_id=getParam().goods_id;
			  //解析地址栏获取orderBy的值				
			var params=getParam();
				orderBy=params.orderBy;
				signType=params.signType;
			var gc_id = params.id ? params.id : null,
				goods_id =params.goods_id?params.goods_id:null;
				// follow_type=params.follow_type;
			$('#botindexhref').on("click",function(){
			    location.href="index.html?goods_id="+goods_id+"&signtype="+signType;
			});
			
			$('#carhopinghref').on("click",function(){
			    
			});
			$('#myminehref').on("click",function(){
			   
			});
			$('#tomorehref').on("click",function(){
			    
			});
			$("#redbtnin").on("click",function(){
				location.href="integralconvert_record.html?goods_id="+goods_id+"&signtype="+signType;
           })
	
});