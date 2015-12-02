/*//产品查询
function mycpgl(){
	//工厂模式
    var data = JSON.stringify({
        "userId": window.sessionStorage.getItem("userId")
    });
    var post = crud.dom.factory("POST");
    post.doPost(wsProductList,data,ProductListCallback,"连接失败！");
    
}
//回调
function ProductListCallback(json){
	var obj = $.evalJSON(json);
    var result = obj.result;
    var str = "";
    str+="<div class='title'><img src='images/show.png' onclick='showNav()'/>产品查询<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
	    "<div class='content'>"+
	    "<ul class='list'>"
    for(var i=0;i<result.length;i++){
    	str+="<li onclick='mycpxx("+result[i].id+","+result+")'><img src='images/cp/1.jpg'/><span>"+result[i].productName+"<br/>"+
    	"<font>产品期限：<font class='blue'>"+result[i].prodLimitTime+"</font></font>" +
        "<font>产品利率：<font class='red'>"+result[i].rateRange+"</font></font>" +
    	"</span></li>";
    }
    str+= "</ul>"+
		    "</div>"+
		    "<div class='buttons'><input type='text' placeholder='搜索'/></div>";
    $("#cpgl").html(str);
	$(".right").hide();
	$("#cpgl").show();
}


//产品信息
function mycpxx(id,result){
	var str="";
	for(var i=0;i<result.length;i++){
		if(id==result[i].id){
			str="<div class='title'><img src='images/show.png' onclick='showNav()'/>"+result[i].productName+"<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
	            "<div class='content'>"+
	            "<table class='cpTable'>"+
	                "<tr>"+                             
	                    "<td style='width:25%;'>产品类别</td>"+         
	                    "<td>"+result[i].productTypeCode+"</td>"+
	                "</tr>"+
	                "<tr>"+                             
	                    "<td>产品描述</td>"+            
	                    "<td>XXXXXXXXX</td>"+
	                "</tr>"+
	                "<tr>"+                             
	                    "<td>产品授信区间</td>"+          
	                    "<td>"+result[i].prodCreditRange+"</td>"+
	                "</tr>"+
	                "<tr>"+                             
	                    "<td>产品期限</td>"+            
	                    "<td>"+result[i].prodLimitTime+"</td>"+
	                "</tr>"+
	                "<tr>"+                             
	                    "<td>产品利率</td>"+            
	                    "<td>"+result[i].rateRange+"</td>"+
	                "</tr>"+
	            "</table>"+
	        "</div>"+
	        "<div class='buttons'>" +
	            "<input type='button' class='btn btn-info' value='申请'/>"+                       
	            "<input type='button' class='btn' value='返回' onclick='mycpgl()'/>" +
	        "</div>"
		}
	}
    $("#cpgl").html(str);
    $(".right").hide();
    $("#cpgl").show();
}*/
//产品管理
function mycpgl(){
    $("#cpgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>产品查询<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding-bottom:30px;'>"+
                        "<ul class='list'>"+
                            "<li onclick='mycpxx1()'>" +
                                "<img src='images/cp/1.jpg'/>" +
                                "<span>" +
                                    "集群通<br/>" +
                                    "<font>产品类别：<font class='blue'>经营性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                            "<li onclick='mycpxx2()'>" +
                                "<img src='images/cp/2.jpg'/>" +
                                "<span>" +
                                    "繁星通<br/>" +
                                    "<font>产品类别：<font class='blue'>经营性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                            "<li onclick='mycpxx3()'>" +
                                "<img src='images/cp/3.jpg'/>" +
                                "<span>" +
                                    "信薪通<br/>" +
                                    "<font>产品类别：<font class='blue'>消费性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                            "<li onclick='mycpxx4()'>" +
                                "<img src='images/cp/4.jpg'/>" +
                                "<span>" +
                                    "个税通<br/>" +
                                    "<font>产品类别：<font class='blue'>消费性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                            "<li onclick='mycpxx5()'>" +
                                "<img src='images/cp/5.jpg'/>" +
                                "<span>" +
                                    "税信通<br/>" +
                                    "<font>产品类别：<font class='blue'>经营性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                        "</ul>"+
                    "</div>"+
                    "<div class='buttons'><input type='text' placeholder='搜索' onchange='search(this)'/></div>");
    $(".right").hide();
    $("#cpgl").show();
}
//产品信息
function mycpxx1(){
    $("#cpgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>集群通<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding:2em 10em;'>"+
                         "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<th colspan='2'>产品信息</th>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td style='width:20%;'>产品类别</td>"+         
                                "<td>经营贷款</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品描述</td>"+            
                                "<td>集群通”是太原市城区农村信用合作联社小微金融事业部为适应太原市小微市场的需要，为满足太原市小微企业主的融资需求，基于小微企业主的经营情况，向在辖区专业市场内的、从事正当生意的小微企业主发放的用于满足其生产经营资金需求的贷款。最低5000元，最高可达500万</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品授信区间</td>"+          
                                "<td>5000元—500万元</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品期限</td>"+            
                                "<td>2018-01-01</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品利率</td>"+            
                                "<td>8%</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品还款规则</td>"+          
                                "<td>按月还款</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>"+
                    "<div class='buttons'>" +
                        "<input type='button' class='btn btn-large' value='返回' onclick='mycpgl()'/>" +
                    "</div>");
    $(".right").hide();
    $("#cpgl").show();
}//产品信息
function mycpxx2(){
    $("#cpgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>繁星通<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding:2em 10em;'>"+
                    "<table class='cpTable'>"+
                       "<tr>"+                             
                           "<th colspan='2'>产品信息</th>"+
                       "</tr>"+
                            "<tr>"+                             
                                "<td style='width:20%;'>产品类别</td>"+         
                                "<td>经营贷款</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品描述</td>"+            
                                "<td>“繁星通”是太原市城区农村信用合作联社小微金融事业部根据差异化、特色化发展战略要求，引进国际先进贷款技术进行本土化改造推出的一项贷款业务品种，专门为在辖区内非集群市场内的、从事正当生意的小微企业主提供5000元—500万元的资金支持。</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品授信区间</td>"+          
                                "<td>5000元—500万元</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品期限</td>"+            
                                "<td>2018-01-01</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品利率</td>"+            
                                "<td>8%</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品还款规则</td>"+          
                                "<td>按月还款</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>"+
                    "<div class='buttons'>" +
                        "<input type='button' class='btn btn-large' value='返回' onclick='mycpgl()'/>" +
                    "</div>");
    $(".right").hide();
    $("#cpgl").show();
}//产品信息
function mycpxx3(){
    $("#cpgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>信薪通<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding:2em 10em;'>"+
                        "<table class='cpTable'>"+
                           "<tr>"+                             
                               "<th colspan='2'>产品信息</th>"+
                           "</tr>"+
                            "<tr>"+                             
                                "<td style='width:20%;'>产品类别</td>"+         
                                "<td>消费贷款</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品描述</td>"+            
                                "<td>“信薪通”是太原市城区农村信用合作联社小微金融事业部以辖区内消费者信用为基础，对辖区内有明确消费意向的自然人发放的用于购置耐用消费品或支付指定消费用途的贷款。最低5000元，最高可达100万。</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品授信区间</td>"+          
                                "<td>5000元—100万元</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品期限</td>"+            
                                "<td>2018-01-01</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品利率</td>"+            
                                "<td>8%</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品还款规则</td>"+          
                                "<td>按月还款</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>"+
                    "<div class='buttons'>" +
                        "<input type='button' class='btn btn-large' value='返回' onclick='mycpgl()'/>" +
                    "</div>");
    $(".right").hide();
    $("#cpgl").show();
}//产品信息
function mycpxx4(){
    $("#cpgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>个税通<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding:2em 10em;'>"+
                        "<table class='cpTable'>"+
                           "<tr>"+                             
                               "<th colspan='2'>产品信息</th>"+
                           "</tr>"+
                            "<tr>"+                             
                                "<td style='width:20%;'>产品类别</td>"+         
                                "<td>消费贷款</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品描述</td>"+            
                                "<td>“个税通”是太原市城区农村信用合作联社小微金融事业部对按时缴纳个人所得税的个人发放的，用于个人或家庭消费、旅游、装修等可循环的人民币信用贷款业务. 最低5000元，最高可达100万</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品授信区间</td>"+          
                                "<td>5000元—100万元</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品期限</td>"+            
                                "<td>2018-01-01</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品利率</td>"+            
                                "<td>8%</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品还款规则</td>"+          
                                "<td>按月还款</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>"+
                    "<div class='buttons'>" +
                        "<input type='button' class='btn btn-large' value='返回' onclick='mycpgl()'/>" +
                    "</div>");
    $(".right").hide();
    $("#cpgl").show();
}//产品信息
function mycpxx5(){
    $("#cpgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>税信通<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding:2em 10em;'>"+
                        "<table class='cpTable'>"+
                           "<tr>"+                             
                               "<th colspan='2'>产品信息</th>"+
                           "</tr>"+
                            "<tr>"+                             
                                "<td style='width:20%;'>产品类别</td>"+         
                                "<td>经营性贷款</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品描述</td>"+            
                                "<td>“税信通”是太原市城区农村信用合作联社小微金融事业部根据税务局推荐，在综合评价小微企业经营情况及小微企业主纳税情况的基础上，对资信好的、按时足额纳税的小微企业客户发放的，用于短期生产经营周转的可循环使用的贷款业务。</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品授信区间</td>"+          
                                "<td>5000元—100万元</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品期限</td>"+            
                                "<td>2018-01-01</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品利率</td>"+            
                                "<td>8%</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>产品还款规则</td>"+          
                                "<td>按月还款</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>"+
                    "<div class='buttons'>" +
                        "<input type='button' class='btn btn-large' value='返回' onclick='mycpgl()'/>" +
                    "</div>");
    $(".right").hide();
    $("#cpgl").show();
}