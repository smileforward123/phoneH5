var zh_pageI18n_key_val = {};
//底部list
zh_pageI18n_key_val["index"] = "首页";
zh_pageI18n_key_val["intRecord"] = "兑换记录";
zh_pageI18n_key_val["intShoping"] = "积分商城";
zh_pageI18n_key_val["shoppingCart"] = "购物车";
zh_pageI18n_key_val["mine"] = "我的";
zh_pageI18n_key_val["more"] = "更多";
// 积分商城
zh_pageI18n_key_val["myIntegral"] = "我的积分";
zh_pageI18n_key_val["noneData"] = "没有更多数据了";
zh_pageI18n_key_val["myconvert"] = "我要兑换";
zh_pageI18n_key_val["interal"] = "积分";
zh_pageI18n_key_val["marketprice"] = "市场价";
//商品详情
zh_pageI18n_key_val["textTitle"] = "Apple iPhone 6s (A1700) 64G 玫瑰金色 移动联通电信4G手机";
zh_pageI18n_key_val["goodmarketprice"]="市场价";
zh_pageI18n_key_val["interalleft"]="积分";
zh_pageI18n_key_val["point"]="分";
zh_pageI18n_key_val["ProductID"]="商品编号";
zh_pageI18n_key_val["dateissued"]="上架时间";
zh_pageI18n_key_val["productsintroduction"]="商品介绍";
zh_pageI18n_key_val["myIntegral"]="我的积分";
zh_pageI18n_key_val["tochange"]="我要兑换";
//购物清单
zh_pageI18n_key_val["intInventory"]="积分兑换清单";
zh_pageI18n_key_val["intpresent"]="已选择兑换的礼品";
zh_pageI18n_key_val["confirmexchange"]="填写并确定兑换";
zh_pageI18n_key_val["listIntegral"]="积分";
zh_pageI18n_key_val["listMarketprice"]="市场价";
zh_pageI18n_key_val["total"]="合计";
zh_pageI18n_key_val["common"]="共";
zh_pageI18n_key_val["piece"]="件";
zh_pageI18n_key_val["ntegration"]="积分";
zh_pageI18n_key_val["myToat"]="我的积分";
zh_pageI18n_key_val["theDay"]="请您至少选择一件商品!";
zh_pageI18n_key_val["theconsignee"]="确定收货人";
zh_pageI18n_key_val["exchangeofgifts"]="已选择兑换的礼品";
zh_pageI18n_key_val["leaveMessage"]="我要留言";
zh_pageI18n_key_val["Certificate"]="选填（25字）";
zh_pageI18n_key_val["successConvert"]="完成兑换";
zh_pageI18n_key_val["conmarketprice"]="市场价";
zh_pageI18n_key_val["conintegral"]="积分";
zh_pageI18n_key_val["establishAaddres"]="您还没有选择收货地址，去创建收货地址吧";

















//页面布局中写死的
function writeI18nPageByKey(key){
    document.write(zh_pageI18n_key_val[key]);
}
//动态拼上的结构;
function getI18nPageByKey(key){
    return  zh_pageI18n_key_val[key];
}
