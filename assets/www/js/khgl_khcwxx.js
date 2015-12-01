//点货单
function dhd(){
  $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>张三&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                  "<div class='content'>"+
                      "<table class='cpTable'>"+
                          "<tr>"+                             
                              "<th colspan='5'>点货时间<input type='date'/><input type='time'/></th>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<th>货物名称</th>"+  
                              "<th>数量</th>"+
                              "<th>买进单价</th>"+
                              "<th>买进总价</th>"+
                              "<th>卖出总价</th>"+
                          "</tr>"+
                          "<tr>"+    
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                          "</tr>"+
                      "</table>"+
                      "<p><input type='button' class='btn btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                  "</div>");
  $(".right").hide();
  $("#khgl").show();
}   
//固定资产清单
function gdzcqd(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>张三&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<th colspan='8'>点货时间<input type='date'/><input type='time'/></th>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>名称</th>"+
                                "<th>购置时间</th>"+
                                "<th>原始单价</th>"+
                                "<th>折旧比率</th>"+
                                "<th>数量</th>"+
                                "<th>总价</th>"+
                                "<th>折后价</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   
//应收预付清单
function ysyfqd(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>张三&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<th colspan='8'>点货时间<input type='date'/><input type='time'/></th>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>应收/预付对方名</th>"+
                                "<th>交易时间</th>"+
                                "<th>到期时间</th>"+
                                "<th>应收/预付金额</th>"+
                                "<th>对方联系方式</th>"+
                                "<th>原因</th>"+
                                "<th>关系/生意模式</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   
//应付预收清单
function yfysqd(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>张三&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<th colspan='8'>点货时间<input type='date'/><input type='time'/></th>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>应付/预收对方名</th>"+
                                "<th>交易时间</th>"+
                                "<th>到期时间</th>"+
                                "<th>应付/预收金额</th>"+
                                "<th>对方联系方式</th>"+
                                "<th>原因</th>"+
                                "<th>关系/生意模式</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   

//负债项目明细清单
function fzxmmxqd(){
  $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>张三&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                  "<div class='content'>"+
                      "<table class='cpTable'>"+
                          "<tr>"+                             
                              "<th>序号</th>"+  
                              "<th>欠款对象</th>"+
                              "<th>欠款金额</th>"+
                              "<th>余额</th>"+
                              "<th>期限</th>"+
                              "<th>用途</th>"+
                              "<th>欠款日期</th>"+
                              "<th>还款日期</th>"+
                              "<th>逾期利息</th>"+
                              "<th>担保方式</th>"+
                          "</tr>"+
                          "<tr>"+    
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='date' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='date' class='addinput'/></td>"+
                              "<td><input type='date' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                          "</tr>"+
                      "</table>"+
                      "<p><input type='button' class='btn btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                  "</div>");
  $(".right").hide();
  $("#khgl").show();
}   