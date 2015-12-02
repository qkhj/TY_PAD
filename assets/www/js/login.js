
//登录
function dl(){
	/*//工厂模式
    var data = JSON.stringify({
        "user_name": $("#user_name").val(),
        "pass_word": $("#user_name").val()
    });
    var post = crud.dom.factory("POST");
    post.doPost(wsLogin,data,checkLoginCallback,"登陆失败！");*/
	
	checkLoginCallback(1);
}
//回调
function checkLoginCallback(json){
    /*var obj = $.evalJSON(json);
    var result = obj.result;
    if(result="fail"){
    	$(".errorMessage").css('display','block');
    	return;
    }
    var session = window.sessionStorage;//有些不支持sessionStorage，而是globalStroage.
    session.setItem("user_id",obj.userId);*/
    //$("#page1").show();
    $("#login").hide();
    $("#wdsy").show();
    $("#index").click();
}

    
//登出
function dc(){
    $("#login").show();
    $(".right").hide();
    $(".left .nav li").css("background","#364860");
    $(".left").hide();
}