//新建进件
function myjjgl(){
    $("#jjgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>进件管理-新建进件<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
					"<div class='content'>" +
						"<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                         
                                "<th></th>"+                 
                                "<th>产品名称</th>"+  
                                "<th>产品类别</th>"+
                                "<th>产品授信区间</th>"+
                                "<th>产品期限</th>"+
                                "<th>产品利率</th>"+ 
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><input type='radio'/></td>"+
                                "<td>集群通</td>"+
                                "<td>经营贷款</td>"+
                                "<td>5000元—500万元</td>"+
                                "<td>2018-01-01</td>"+
                                "<td>8%</td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><input type='radio'/></td>"+
                                "<td>繁星通</td>"+
                                "<td>经营贷款</td>"+
                                "<td>5000元—500万元</td>"+
                                "<td>2018-01-01</td>"+
                                "<td>8%</td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><input type='radio'/></td>"+
                                "<td>信薪通</td>"+
                                "<td>消费贷款</td>"+
                                "<td>5000元—100万元</td>"+
                                "<td>2018-01-01</td>"+
                                "<td>8%</td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><input type='radio'/></td>"+
                                "<td>个税通</td>"+
                                "<td>消费贷款</td>"+
                                "<td>5000元—100万元</td>"+
                                "<td>2018-01-01</td>"+
                                "<td>8%</td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><input type='radio'/></td>"+
                                "<td>税信通</td>"+
                                "<td>经营性贷款</td>"+
                                "<td>5000元—100万元</td>"+
                                "<td>2018-01-01</td>"+
                                "<td>8%</td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-primary btn-large' value='确定' onclick='myjjgl2()'/></p>"+
					"</div>");
    $(".right").hide();
    $("#jjgl").show();    
}
function myjjgl2(){
    $("#jjgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>进件管理-新建进件<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
					"<div class='content'>" +
						"<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                         
                                "<th></th>"+                 
                                "<th>客户名称</th>"+  
                                "<th>证件号码</th>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><input type='radio'/></td>"+
                                "<td>郝俊芝</td>"+
                                "<td>320404197702656264</td>"+
                            "</tr>"+
                            "<tr onclick='check(this)'>"+    
                                "<td><input type='radio'/></td>"+
                                "<td>阎育强</td>"+
                                "<td>320404198002356125</td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-primary btn-large' value='确定' onclick='newUser1()'/></p>"+
					"</div>");
    $(".right").hide();
    $("#jjgl").show();
    
}
//新建进件1
function newUser1(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32014556952222&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;集群通<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding-top:9em;text-align:center;'>" +
                        "<div class='box box4' onclick='khxxzlcj()' style='float:none;margin-right:50px;display:inline-block;'>" +
                            "<img src='images/xxzl.png'/>" +
                            "<span>客户信息资料采集</span>"+
                        "</div>"+
                        "<div class='box box4' onclick='khyxzlcj()' style='float:none;display:inline-block;'>" +
                            "<img src='images/yxzl.png'/>" +
                            "<span>客户影像资料采集</span>"+
                        "</div>"+                      
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
//客户信息资料采集
function khxxzlcj(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32014556952222&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;集群通<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>" +
                        "<table id='message1' class='cpTable'>"+
                            "<tr>"+                             
                                "<th colspan='6'>客户基本信息</th>"+ 
                            "</tr>"+
                            "<tr>"+                             
                                "<td>个人信息<span class='label label-success'>已录入</span></td>"+             
                                "<td>房产信息<span class='label label-success'>已录入</span></td>"+
                                "<td>家庭信息<span class='label label-success'>已录入</span></td>"+ 
                                "<td>车产信息<span class='label label-important'>未录入</span></td>"+ 
                                "<td>联系人信息<span class='label label-important'>未录入</span></td>"+ 
                                "<td>居住信息<span class='label label-success'>已录入</span></td>"+
                            "</tr>"+
                            "<tr>"+       
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='grxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='grxx_edit()'/>" +
                                "</td>"+         
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='fcxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='fcxx_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='jtxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='jtxx_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='ccxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='ccxx_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='lxrxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='lxrxx_edit()'/>" +
                                "</td>"+   
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='jzxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='jzxx_edit()'/>" +
                                "</td>"+
                            "</tr>"+                           
                        "</table>"+
                        "<table id='message2' class='cpTable'>"+
                            "<tr>"+                             
                                "<th colspan='5'>客户经营信息</th>"+ 
                            "</tr>"+
                            "<tr>"+                             
                                "<td>企业基本信息<span class='label label-success'>已录入</span></td>"+             
                                "<td>企业业务信息<span class='label label-success'>已录入</span></td>"+            
                                "<td>企业店铺信息<span class='label label-success'>已录入</span></td>"+            
                                "<td>企业开户信息<span class='label label-success'>已录入</span></td>"+            
                                "<td>其他信息<span class='label label-success'>已录入</span></td>"+     
                            "</tr>"+
                            "<tr>"+                             
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='qyjbxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='qyjbxx_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='qyywxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='qyywxx_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='qydpxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='qydpxx_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='qykhxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='qykhxx_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='qyqtxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='qyqtxx_edit()'/>" +
                                "</td>"+
                            "</tr>"+
                        "</table>"+
                        "<table id='message3' class='cpTable'>"+
                            "<tr>"+                             
                                "<th colspan='6'>客户财务信息</th>"+ 
                            "</tr>"+
                            "<tr>"+                             
                                "<td rowspan='2'>资产负债表</td>"+              
                                "<td>资产状况<span class='label label-success'>已录入</span></td>"+                  
                                "<td>负债情况<span class='label label-success'>已录入</span></td>"+             
                                "<td>权益状况<span class='label label-important'>未录入</span></td>"+             
                                "<td>其他信息<span class='label label-important'>未录入</span></td>"+            
                                "<td></td>"+ 
                            "</tr>"+
                            "<tr>"+
								"<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='zczk_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='zczk_edit()'/>" +
                                "</td>"+
								"<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='fzqk_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='fzqk_edit()'/>" +
                                "</td>"+								
								"<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='qyzk_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='qyzk_edit()'/>" +
                                "</td>"+															
								"<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='zcfzqtxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='zcfzqtxx_edit()'/>" +
                                "</td>"+           
                                "<td></td>"+ 
                            "</tr>"+
                            "<tr>"+   								
                                "<td rowspan='2'>损益表</td>"+              
                                "<td>利润表简表<span class='label label-important'>未录入</span></td>"+                  
                                "<td>利润表标准表<span class='label label-important'>未录入</span></td>"+             
                                "<td>其他信息<span class='label label-important'>未录入</span></td>"+                 
                                "<td></td>"+            
                                "<td></td>"+ 
                            "</tr>"+
                            "<tr>"+
								"<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='lrbjb_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='lrbjb_edit()'/>" +
                                "</td>"+
								"<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='lrbbzb_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='lrbbzb_edit()'/>" +
                                "</td>"+								
								"<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='syqtxx_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='syqtxx_edit()'/>" +
                                "</td>"+           
                                "<td></td>"+            
                                "<td></td>"+ 
                            "</tr>"+	
                            "</tr>"+          
                                "<td>现金流表<span class='label label-important'>未录入</span></td>"+            
                                "<td>点货单<span class='label label-success'>已录入</span></td>"+            
                                "<td>固定资产清单<span class='label label-success'>已录入</span></td>"+        
                                "<td>应收预付清单<span class='label label-important'>未录入</span></td>"+      
                                "<td>应付预收清单<span class='label label-important'>未录入</span></td>"+      
                                "<td>负债项目明细清单<span class='label label-important'>未录入</span></td>"+   
                            "</tr>"+
                            "<tr>"+  
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='xjlb_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='xjlb_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='dhd_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='dhd_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='gdzcqd_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='gdzcqd_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='ysyfqd_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='ysyfqd_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='yfysqd_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='yfysqd_edit()'/>" +
                                "</td>"+
                                "<td>" +
                                    "<input type='button' class='btn btn-info' value='添加' onclick='fzxmmxqd_add()'/>" +
                                    "<input type='button' class='btn btn-warning' value='查看' onclick='fzxmmxqd_edit()'/>" +
                                "</td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large' value='返回' onclick='newUser1()'/></p>" +
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
//客户影像资料采集
function khyxzlcj(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>影像资料采集<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding-left:1em;'>" +  
                        "<div class='box box1' onclick='fcz()'><img src='images/fcz.png'/><span>房产证</span></div>"+
                        "<div class='box box9' onclick='jhz()'><img src='images/jhz.png'/><span>结婚证</span></div>"+
                        "<div class='box box3' onclick='zxbg()'><img src='images/zxbg.png'/><span>征信报告</span></div>"+
                        "<div class='box box7' onclick='yhls()'><img src='images/yhls.png'/><span>银行流水</span></div>"+  
                       // "<p><input type='button' class='tab' value='房产证' onclick='fcz()'/></p>"+
                       // "<p><input type='button' class='tab' value='结婚证' onclick='jhz()'/></p>"+
                       // "<p><input type='button' class='tab' value='征信报告' onclick='zxbg()'/></p>"+
                        //"<p><input type='button' class='tab' value='银行流水' onclick='yhls()'/></p>" +
                        //"<p><input type='button' class='btn btn-large' value='返回' onclick='newUser1()'/></p>" +
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
//客户影像资料采集-房产证
function fcz(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>影像资料采集<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>" +
                        "<table id='fcz' class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>房产证文件路径</th>"+
                                "<th>操作</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td><input type='text' id='fcz_sheet1' class='readonly' readonly='readonly'/><input type='file' onclick='getMedia(\"fcz_sheet1\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"fcz_sheet1\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"fcz\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"fcz\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p>" +
                            "<input type='button' class='btn btn-large btn-primary' value='确定'/>" +
                            "<input type='button' class='btn btn-large' value='返回' onclick='khyxzlcj()'/>" +
                        "</p>" +
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
//客户影像资料采集-结婚证
function jhz(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>影像资料采集<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>" +
                        "<table id='jhz' class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>结婚证文件路径</th>"+
                                "<th>操作</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td><input type='text' id='jhz_sheet1' class='readonly' readonly='readonly'/><input type='file' onclick='getMedia(\"jhz_sheet1\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"jhz_sheet1\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"jhz\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"jhz\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p>" +
                            "<input type='button' class='btn btn-large btn-primary' value='确定'/>" +
                            "<input type='button' class='btn btn-large' value='返回' onclick='khyxzlcj()'/>" +
                        "</p>" +
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
//客户影像资料采集-征信报告
function zxbg(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>影像资料采集<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>" +
                        "<table id='zxbg' class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>征信报告文件路径</th>"+
                                "<th>操作</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td><input type='text' id='zxbg_sheet1' class='readonly' readonly='readonly'/><input type='file' onclick='getMedia(\"zxbg_sheet1\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"zxbg_sheet1\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"zxbg\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"zxbg\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p>" +
                            "<input type='button' class='btn btn-large btn-primary' value='确定'/>" +
                            "<input type='button' class='btn btn-large' value='返回' onclick='khyxzlcj()'/>" +
                        "</p>" +
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
//客户影像资料采集-银行流水
function yhls(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>影像资料采集<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>" +
                        "<table id='yhls' class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>银行流水文件路径</th>"+
                                "<th>操作</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td><input type='text' id='yhls_sheet1' class='readonly' readonly='readonly'/><input type='file' onclick='getMedia(\"yhls_sheet1\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"yhls_sheet1\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"yhls\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"yhls\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p>" +
                            "<input type='button' class='btn btn-large btn-primary' value='确定'/>" +
                            "<input type='button' class='btn btn-large' value='返回' onclick='khyxzlcj()'/>" +
                        "</p>" +
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
