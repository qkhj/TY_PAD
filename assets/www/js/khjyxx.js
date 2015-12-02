
//企业基本信息
function qyjbxx_add(){
  $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                  "<div class='content'>"+
                      "<table class='cpTable'>"+
                          "<tr>"+                             
                              "<td>企业名称</td>"+          
                              "<td><input type='text'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>组织类型</td>"+  
                              "<td><input type='text'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>法人代表</td>"+    
                              "<td><input type='text'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>实际控制人</td>"+    
                              "<td><input type='text'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>股东股份情况</td>"+    
                              "<td><input type='text'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>营业执照</td>"+           
                              "<td>" +
                                  "<select>" +
                                      "<option>有</option>" +
                                      "<option>无</option>" +
                                  "</select>" +
                               "</td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>经营起始时间</td>"+    
                              "<td><input type='date'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>经营年限</td>"+    
                              "<td><input type='text'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>地址</td>"+    
                              "<td><input type='text' class='addinput'/></td>"+
                          "</tr>"+
                          "<tr>"+                             
                              "<td>电话</td>"+    
                              "<td><input type='text'/></td>"+
                          "</tr>"+
                      "</table>"+
                      "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                  "</div>");
  $(".right").hide();
  $("#khgl").show();
}
function qyjbxx_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td>企业名称</td>"+          
                                "<td><input type='text' value='味香村'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>组织类型</td>"+  
                                "<td><input type='text' value='个体工商户'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>法人代表</td>"+    
                                "<td><input type='text' value='郝俊芝'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>实际控制人</td>"+    
                                "<td><input type='text' value='郝俊芝、阎育强'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>股东股份情况</td>"+    
                                "<td><input type='text' value='无'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>营业执照</td>"+           
                                "<td>" +
                                    "<select>" +
                                        "<option>有</option>" +
                                        "<option>无</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>经营起始时间</td>"+    
                                "<td><input type='date' value='2015-03-15'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>经营年限</td>"+    
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>地址</td>"+    
                                "<td><input type='text' class='addinput' value='尖草坪街48号（北院）128幢五单元1号房'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>电话</td>"+    
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }
//企业业务信息
function qyywxx_add(){
$("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                "<div class='content'>"+
                    "<table class='cpTable'>"+
                        "<tr>"+                             
                            "<td>主要业务范围</td>"+          
                            "<td><input type='text'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                            "<td>主要经营模式</td>"+  
                            "<td><input type='text'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                            "<td>组织架构</td>"+    
                            "<td><input type='text'/></td>"+
                        "</tr>"+
                        "<tr>"+                             
                            "<td>业务流程</td>"+    
                            "<td><input type='text'/></td>"+
                        "</tr>"+
                    "</table>"+
                    "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                "</div>");
$(".right").hide();
$("#khgl").show();
}
function qyywxx_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
            "<div class='content'>"+
                "<table class='cpTable'>"+
                    "<tr>"+                             
                        "<td>主要业务范围</td>"+          
                        "<td><input type='text' value='中餐'/></td>"+
                    "</tr>"+
                    "<tr>"+                             
                        "<td>主要经营模式</td>"+  
                        "<td><input type='text' value=''/></td>"+
                    "</tr>"+
                    "<tr>"+                             
                        "<td>组织架构</td>"+    
                        "<td><input type='text' value=''/></td>"+
                    "</tr>"+
                    "<tr>"+                             
                        "<td>业务流程</td>"+    
                        "<td><input type='text' value=''/></td>"+
                    "</tr>"+
                "</table>"+
                "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
            "</div>");
$(".right").hide();
$("#khgl").show();
}
//企业店铺信息
function qydpxx_add(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td>营业场所类型</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>自有</option>" +
                                        "<option>自建</option>" +
                                        "<option>住经营场所</option>" +
                                        "<option>租住</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+                         
                                "<td>装修情况</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>好</option>" +
                                        "<option>中</option>" +
                                        "<option>差</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房面积</td>"+  
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房格局</td>"+    
                                "<td>" +
                                    "<select>" +
                                        "<option>一室一厅</option>" +
                                        "<option>两室一厅</option>" +
                                        "<option>两室两厅</option>" +
                                        "<option>三室一厅</option>" +
                                        "<option>三室两厅</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>启用起始年月</td>"+    
                                "<td><input type='date'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td>" +
                                    "<select>" +
                                        "<option>现场调查</option>" +
                                        "<option>外围调查</option>" +
                                        "<option>未调查</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }
function qydpxx_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table class='cpTable'>"+
                            "<tr>"+                             
                                "<td>营业场所类型</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>自有</option>" +
                                        "<option>自建</option>" +
                                        "<option>住经营场所</option>" +
                                        "<option selected>租住</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+                         
                                "<td>装修情况</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>好</option>" +
                                        "<option selected>中</option>" +
                                        "<option>差</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房面积</td>"+  
                                "<td><input type='text' value='93㎡'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房格局</td>"+    
                                "<td>" +
                                    "<select>" +
                                        "<option>一室一厅</option>" +
                                        "<option>两室一厅</option>" +
                                        "<option>两室两厅</option>" +
                                        "<option>三室一厅</option>" +
                                        "<option>三室两厅</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>启用起始年月</td>"+    
                                "<td><input type='date' value='2015-03-15'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td>" +
                                    "<select>" +
                                        "<option>现场调查</option>" +
                                        "<option>外围调查</option>" +
                                        "<option>未调查</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                        "</table>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }
//企业开户信息
function qykhxx_add(){
  $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                  "<div class='content'>"+
                      "<table id='khxx' class='cpTable'>"+
                          "<tr>"+      
                              "<td>序号</td>"+  
                              "<td>开户行</td>"+          
                              "<td>账号</td>"+
                          "</tr>"+
                          "<tr>"+                          
                              "<td>1</td>"+                   
                              "<td><input type='text'/></td>"+  
                              "<td><input type='text' class='addinput'/></td>"+
                          "</tr>"+
                      "</table>"+
                      "<p class='Left'>" +
                          "<button class='btn btn-info btn-small' onclick='addTd(\"khxx\")'><img src='images/add.png'/></button>" +
                          "<button class='btn btn-info btn-small' onclick='removeTd(\"khxx\")'><img src='images/del.png'/></button>" +
                      "</p>"+
                      "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                  "</div>");
  $(".right").hide();
  $("#khgl").show();
}
function qykhxx_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<table id='khxx' class='cpTable'>"+
                            "<tr>"+      
                                "<td>序号</td>"+                        
                                "<td>开户行</td>"+          
                                "<td>账号</td>"+
                            "</tr>"+
                            "<tr>"+                    
                                "<td>1</td>"+                         
                                "<td><input type='text' value='农村信用社'/></td>"+  
                                "<td><input type='text' class='addinput' value='101341010100002497889'/></td>"+
                            "</tr>"+
                            "<tr>"+              
                                "<td>2</td>"+                    
                                "<td><input type='text' value='邮政储蓄'/></td>"+    
                                "<td><input type='text' class='addinput' value='601610166200091962'/></td>"+
                            "</tr>"+
                        "</table>"+
                        "<p class='Left'>" +
                            "<button class='btn btn-info btn-small' onclick='addTd(\"khxx\")'><img src='images/add.png'/></button>" +
                            "<button class='btn btn-info btn-small' onclick='removeTd(\"khxx\")'><img src='images/del.png'/></button>" +
                        "</p>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
  }
//企业其他信息
function qyqtxx_add(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<textarea placeholder='请在文本框内记录相关情况' style='width:98%;height:25em;margin:0;border-width:1px 0;border-radiuso:none;'></textarea>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
    }
function qyqtxx_edit(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>郝俊芝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 320404165620223102<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content'>"+
                        "<textarea placeholder='请在文本框内记录相关情况' style='width:98%;height:25em;margin:0;border-width:1px 0;border-radiuso:none;'>1999-2000年 于太钢六校对面经营熟肉店；2002-2004 将熟食店变更为小饭店（赚4、5万）；2004春-2004夏 于漪汾桥西开饭店（投入10万，几乎全赔，余5000元）；2004夏-2005年中 回清徐；2005.8-2007年 于晋安门口小饭馆（转让费1万6，房租1万5，赚了5、6万，炒股花去3万，余2万元）；2007年 盘下旁边理发店，扩大经营；2007-2010买房用完积蓄（至2010年赚50万，买房30万，装修、家具等，几乎花光）；2012-2013：赚5、6万；2013-2014：赚3、4万（共余9万）；2014-2015：赚10-11万；（共余：195000元）2015.3月：与合伙人两家盘下现较大店面经营味香村，转让费10万元，初始运营资金2万元，共12万。几天后两家协商由客户郝俊芝独立经营，付清合伙人投资部分，并多给合伙人2万元将生意转为己有（因此客户转让初始共支出14万，装修2万7，请客1万多，余18000元）。可证实盘下味香村时资金为自有。</textarea>"+
                        "<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='khxxzlcj()'/></p>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
    }