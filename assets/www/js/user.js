//我的首页
function user(){
    $("#yhxx").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>李丽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00001<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding:2em 10em;'>"+
                        "<table class='cpTable'>"+
                           "<tr>"+                             
                               "<th colspan='2'>客户经理信息</th>"+
                           "</tr>"+
                            "<tr>"+                             
                                "<td style='width:25%;'>性别</td>"+          
                                "<td>女</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>所属银行</td>"+  
                                "<td>总行</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>职位</td>"+  
                                "<td>客户经理主管</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>授信权限</td>"+  
                                "<td>50万</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#yhxx").show();
}
