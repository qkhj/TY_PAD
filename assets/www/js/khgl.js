//客户管理
function mykhgl(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>客户管理<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding-left:1em;position:absolute;right:0;left:0;height:680px;;background:#fff url(images/logo.jpg) no-repeat;background-position:bottom center;'>" +
                        "<div class='box box1' onclick='newUser()'><img src='images/xjkh.png'/><span>新建客户</span></div>"+
                        "<div class='box box3' onclick='editUser()'><img src='images/khwh.png'/><span>客户维护</span></div>"+
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}
//新建客户
function newUser(){
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>客户管理-新建客户<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
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
    $("#khgl").html("<div class='title'><img src='images/show.png' onclick='showNav()'/>客户管理-客户维护<img class='Right' src='images/dc.png' onclick='dc()'/></div>"+  
                    "<div class='content' style='padding-left:1em;'>" +
                        "<div class='box box13' onclick='khzlcx()'><img src='images/khzlcx.png'/><span>客户资料查询</span></div>"+
                        "<div class='box box14' onclick='khwhjh()'><img src='images/khwhjh2.png'/><span>客户维护计划</span></div>"+
                        "<div class='box box15' onclick='khwhrz()'><img src='images/khwhrz.png'/><span>客户维护日志</span></div>"+
                        "<div class='box box16' onclick='khcsrz()'><img src='images/khcsrz.png'/><span>客户催收日志</span></div>"+
                        //"<p><input type='button' class='tab' value='客户资料查询' onclick='khzlcx()'/></p>"+
                        //"<p><input type='button' class='tab' value='客户维护计划' onclick='khwhjh()'/></p>"+
                        //"<p><input type='button' class='tab' value='客户维护日志' onclick='khwhrz()'/></p>"+
                        //"<p><input type='button' class='tab' value='客户催收日志' onclick='khcsrz()'/></p>" +
                        //"<p><input type='button' class='btn btn-large' value='返回' onclick='mykhgl()'/></p>" +
                    "</div>"+
                    "<div class='buttons'>" +
                        "<input type='button' class='btn btn-large' value='返回' onclick='mykhgl()'/>" +
                    "</div>");
    $(".right").hide();
    $("#khgl").show();
}