//现金流表
function xjlb_add(){	
    window.scrollTo(0,0);//滚动条回到顶端
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td>期初现金</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>现金销售额</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>应收账款回收</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>客户预付款</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>现金购买原材料、服务、货物</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>应付账款的支付</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>购货的预付款项（原材料、服务费）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>固定费用支付</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>固定资产出售流入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>其他流入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>购买新固定资产的支出</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>建设和装修等的支出</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他支出</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>银行贷款</td>"+   
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他借款</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>偿还银行贷款本金以及利息</td>"+   
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>偿还其他借款</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>其他现金来源</td>"+   
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>私人使用资金</td>"+   
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
$(".right").hide();
$("#khgl").show();
}
function xjlb_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td>期初现金</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>现金销售额</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>应收账款回收</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>  客户预付款</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td> 现金购买原材料、服务、货物</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td> 应付账款的支付</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td> 购货的预付款项（原材料、服务费）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td> 固定费用支付</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>固定资产出售流入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>其他流入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>购买新固定资产的支出</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>建设和装修等的支出</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他支出</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>银行贷款</td>"+   
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他借款</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>偿还银行贷款本金以及利息</td>"+   
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>偿还其他借款</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>其他现金来源</td>"+   
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td>私人使用资金</td>"+   
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
$(".right").hide();
$("#khgl").show();
}
//点货单
function dhd_add(){
  $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                  "<div class='content'>"+
                      "<table id='dhd' class='cpTable'>"+
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
                      "<p class='Left'>" +
                          "<button class='btn btn-info btn-small' onclick='addTd(\"dhd\")'><img src='images/add.png'/></button>" +
                          "<button class='btn btn-info btn-small' onclick='removeTd(\"dhd\")'><img src='images/del.png'/></button>" +
                      "</p>"+
                      "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                  "</div>");
  $(".right").hide();
  $("#khgl").show();
}   
function dhd_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table id='dhd' class='cpTable'>"+
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
                                "<td><input type='text' class='addinput' value='啤酒'/></td>"+
                                "<td><input type='text' class='addinput' value='6'/></td>"+
                                "<td><input type='text' class='addinput' value='22.5'/></td>"+
                                "<td><input type='text' class='addinput' value='135'/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td><input type='text' class='addinput' value='白酒'/></td>"+
                                "<td><input type='text' class='addinput' value='40'/></td>"+
                                "<td><input type='text' class='addinput' value='7.5'/></td>"+
                                "<td><input type='text' class='addinput' value='300'/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td><input type='text' class='addinput' value='猪肉'/></td>"+
                                "<td><input type='text' class='addinput' value='25'/></td>"+
                                "<td><input type='text' class='addinput' value='15'/></td>"+
                                "<td><input type='text' class='addinput' value='375'/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"dhd\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"dhd\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   
//固定资产清单
function gdzcqd_add(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table id='gdzcqd' class='cpTable'>"+
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
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"gdzcqd\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"gdzcqd\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }  
function gdzcqd_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table id='gdzcqd' class='cpTable'>"+
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
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput' value='冰柜'/></td>"+
                                "<td><input type='date' class='addinput' value='2015-3'/></td>"+
                                "<td><input type='text' class='addinput' value='4000'/></td>"+
                                "<td><input type='text' class='addinput' value='50%'/></td>"+
                                "<td><input type='text' class='addinput' value='1'/></td>"+
                                "<td><input type='text' class='addinput' value='4000'/></td>"+
                                "<td><input type='text' class='addinput' value='2000'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"gdzcqd\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"gdzcqd\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   
//应收预付清单
function ysyfqd_add(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table id='ysyfqd' class='cpTable'>"+
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
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"ysyfqd\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"ysyfqd\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   
function ysyfqd_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table id='ysyfqd' class='cpTable'>"+
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
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='date' class='addinput' value=''/></td>"+
                                "<td><input type='date' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"ysyfqd\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"ysyfqd\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   
//应付预收清单
function yfysqd_add(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table id='yfysqd' class='cpTable'>"+
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
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"yfysqd\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"yfysqd\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   
function yfysqd_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table id='yfysqd' class='cpTable'>"+
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
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='date' class='addinput' value=''/></td>"+
                                "<td><input type='date' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"yfysqd\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"yfysqd\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   
//负债项目明细清单
function fzxmmxqd_add(){
  $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                  "<div class='content'>"+
                      "<table id='fzxmmxqd' class='cpTable'>"+
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
                              "<td>1</td>"+
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
                      "<p class='Left'>" +
                          "<button class='btn btn-info btn-small' onclick='addTd(\"fzxmmxqd\")'><img src='images/add.png'/></button>" +
                          "<button class='btn btn-info btn-small' onclick='removeTd(\"fzxmmxqd\")'><img src='images/del.png'/></button>" +
                      "</p>"+
                      "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                  "</div>");
  $(".right").hide();
  $("#khgl").show();
}   
function fzxmmxqd_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table id='fzxmmxqd' class='cpTable'>"+
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
                                "<td>1</td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='date' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='date' class='addinput' value=''/></td>"+
                                "<td><input type='date' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                                "<td><input type='text' class='addinput' value=''/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"fzxmmxqd\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"fzxmmxqd\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }   