//我的首页
function user(){
    $("#yhxx").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>李丽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00001<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding:2em 10em;'>"+
                        "<table class='cpTable'>"+
                           "<tr>"+                             
                               "<th colspan='3'>客户经理信息</th>"+
                           "</tr>"+
                            "<tr>"+   
                                "<td rowspan='7' style='width:290px;'>" +
                                    "<img src='images/user/01.png'/>" +
                                "</td>"+
                                "<td style='width:25%;'>姓名</td>"+          
                                "<td>李丽</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>性别</td>"+  
                                "<td>女</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>年龄</td>"+  
                                "<td>36岁</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>所属银行</td>"+  
                                "<td>总行</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>客户经理编号</td>"+  
                                "<td>00001</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>职位</td>"+  
                                "<td>客户经理主管</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>授信权限</td>"+  
                                "<td>50万</td>"+
                            "</tr>"+
                            "<tr>"+   
                                "<td colspan='3' style='text-align:center;'>" +
                                    "<input id='xgBtn' type='button' class='btn btn-lagre btn-info' value='修改头像' onclick='$(\"#xgtx\").show();$(this).hide();'/>" +
                                    "<div style='display:none;' id='xgtx'>"+
                                        "<input type='text' id='user' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"user\",\"img\");' value='选择文件'/>"+
                                        "<button class='btn btn-success btn-small' onclick='capture(\"user\",\"img\");'><img src='images/ps.png'/></button><br/>"+
                                        "<input type='button' class='btn btn-info' value='保存头像' onclick='$(\"#xgBtn\").show();$(\"#xgtx\").hide();'/>" +
                                    "</div>"+
                                "</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#yhxx").show();
}
