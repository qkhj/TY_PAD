//客户管理
function mykhgl(){
    $("#khgl").html("<div class='title'>客户管理</div>"+  
                    "<div class='content' style='padding-left:1em;'>" +
                        "<div class='box box1' onclick='newUser()'><img src='images/xjkh.png'/><span>新建客户</span></div>"+
                        "<div class='box box3' onclick='editUser()'><img src='images/khwh.png'/><span>客户维护</span></div>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
//新建客户
function newUser(){
    $("#khgl").html("<div class='title'>客户管理-新建客户</div>"+  
                    "<div class='content' style='margin-top:100px;'>" +
                        "<p>客户姓名:<input type='text'/></p>"+
                        "<p>证件类型:<select><option>身份证</option></select></p>"+
                        "<p>证件号码:<input type='text'/></p>"+
                        "<p>" +
                            "<input type='button' class='btn btn-large btn-primary' value='确定'/>"+                       
                            "<input type='button' class='btn btn-large' value='返回' onclick='mykhgl()'/>" +
                        "</p>" +
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
//客户维护
function editUser(){
    $("#khgl").html("<div class='title'>客户管理-客户维护</div>"+  
                    "<div class='content' style='margin-top:100px;'>" +
                        "<p><input type='button' class='tab' value='客户资料查询' onclick='khzlcx()'/></p>"+
                        "<p><input type='button' class='tab' value='客户维护计划' onclick='khwhjh()'/></p>"+
                        "<p><input type='button' class='tab' value='客户维护日志' onclick='khwhrz()'/></p>"+
                        "<p><input type='button' class='tab' value='客户催收日志' onclick='khcsrz()'/></p>" +
                        "<p><input type='button' class='btn btn-large' value='返回' onclick='mykhgl()'/></p>" +
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}