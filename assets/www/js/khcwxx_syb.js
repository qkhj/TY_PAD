//损益表-利润表标准表
function lrbbzb_add(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td>主营业务收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>可变成本（成本率<input type='text' value='' style='width:100px;'/>）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                 
                                "<td colspan='4'>" +
                                    "营业费用"+
                                    "<button class='btn btn-info my-btn' onclick='addTd(\"yyfy\")'><img src='images/add.png'/></button>" +
                                    "<button class='btn btn-info my-btn' onclick='removeTd(\"yyfy\")'><img src='images/del.png'/></button>" +
                                    "<table class='cpTable' id='yyfy'>" +
                                        "<tr>" +
                                            "<th>1</th>"+
                                            "<td>费用名称</td>" +
                                            "<td><input type='text' value=''/></td>" +
                                            "<td>费用金额</td>" +
                                            "<td><input type='text' value=''/></td>" +
                                        "</tr>" +
                                    "</table>"+
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期还款（经营）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>家庭开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期付款(私人用途)</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>其它开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其它收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
								"<td></td>"+    
								"<td></td>"+    
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
$(".right").hide();
$("#khgl").show();
}
function lrbbzb_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td>主营业务收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>可变成本（成本率<input type='text' value='' style='width:100px;'/>）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                 
                                "<td colspan='4'>" +
                                    "营业费用"+
                                    "<button class='btn btn-info my-btn' onclick='addTd(\"yyfy\")'><img src='images/add.png'/></button>" +
                                    "<button class='btn btn-info my-btn' onclick='removeTd(\"yyfy\")'><img src='images/del.png'/></button>" +
                                    "<table class='cpTable' id='yyfy'>" +
                                        "<tr>" +
                                            "<th>1</th>"+
                                            "<td>费用名称</td>" +
                                            "<td><input type='text' value=''/></td>" +
                                            "<td>费用金额</td>" +
                                            "<td><input type='text' value=''/></td>" +
                                        "</tr>" +
                                    "</table>"+
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期还款（经营）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>家庭开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期付款(私人用途)</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>其它开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其它收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
								"<td></td>"+    
								"<td></td>"+    
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
$(".right").hide();
$("#khgl").show();
}
//损益表-利润表简表
function lrbjb_add(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
            "<div class='content'>"+
                "<table class='cpTable'>"+
                    "<tr>"+                             
                        "<td>月主营业务收入</td>"+          
                        "<td><input type='text' value=''/></td>"+
                        "<td>可变成本（成本率<input type='text' value='' style='width:100px;'/>）</td>"+          
                        "<td><input type='text' value=''/></td>"+
                    "</tr>"+
                    "<tr>"+                 
                        "<td colspan='4'>" +
                            "营业费用"+
                            "<button class='btn btn-info my-btn' onclick='addTd(\"yyfy\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info my-btn' onclick='removeTd(\"yyfy\")'><img src='images/del.png'/></button>" +
                            "<table class='cpTable' id='yyfy'>" +
                                "<tr>" +
                                    "<th>1</th>"+
                                    "<td>费用名称</td>" +
                                    "<td><input type='text' value=''/></td>" +
                                    "<td>费用金额</td>" +
                                    "<td><input type='text' value=''/></td>" +
                                "</tr>" +
                            "</table>"+
                        "</td>"+
                    "</tr>"+
                    "<tr>"+                             
                        "<td>分期还款（经营）</td>"+          
                        "<td><input type='text' value=''/></td>"+
                        "<td>家庭开支</td>"+          
                        "<td><input type='text' value=''/></td>"+
                    "</tr>"+
                    "<tr>"+                             
                        "<td>分期付款(私人用途)</td>"+          
                        "<td><input type='text' value=''/></td>"+
                        "<td>其它开支</td>"+          
                        "<td><input type='text' value=''/></td>"+
                    "</tr>"+
                    "<tr>"+                             
                        "<td>其它收入</td>"+          
                        "<td><input type='text' value=''/></td>"+
                        "<td></td>"+  
                        "<td></td>"+  
                    "</tr>"+
                "</table>"+
                "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
            "</div>");
$(".right").hide();
$("#khgl").show();
}
function lrbjb_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td>月主营业务收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>可变成本（成本率<input type='text' value='' style='width:100px;'/>）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                 
                                "<td colspan='4'>" +
                                    "营业费用"+
                                    "<button class='btn btn-info my-btn' onclick='addTd(\"yyfy\")'><img src='images/add.png'/></button>" +
                                    "<button class='btn btn-info my-btn' onclick='removeTd(\"yyfy\")'><img src='images/del.png'/></button>" +
                                    "<table class='cpTable' id='yyfy'>" +
                                        "<tr>" +
                                            "<th>1</th>"+
                                            "<td>费用名称</td>" +
                                            "<td><input type='text' value=''/></td>" +
                                            "<td>费用金额</td>" +
                                            "<td><input type='text' value=''/></td>" +
                                        "</tr>" +
                                    "</table>"+
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期还款（经营）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>家庭开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期付款(私人用途)</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>其它开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其它收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td></td>"+  
                                "<td></td>"+  
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
$(".right").hide();
$("#khgl").show();
}
//损益表-其他信息
function syqtxx_add(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td style='width:25%;'>其它影响现金流的因素、 未来12个月的支出/收入计划:</td>"+          
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>主营业务收入详述</td>"+              
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>可变成本详述</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他收入分析</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭开支及其他开支详情</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>利润表其他介绍</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
$(".right").hide();
$("#khgl").show();
}
function syqtxx_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td style='width:25%;'>其它影响现金流的因素、 未来12个月的支出/收入计划:</td>"+          
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>主营业务收入详述</td>"+              
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>可变成本详述</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他收入分析</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭开支及其他开支详情</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>利润表其他介绍</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
$(".right").hide();
$("#khgl").show();
}