function  checkRadio(obj){    
    $(obj).parent().find('.radio').attr("class","radio");
    $(obj).parent().find('input[type=radio]').removeAttr('checked');
    $(obj).attr("class","radio radio_checked");
    $(obj).find('input[type=radio]').attr('checked',"checked");
}
//左侧导航
function changeNav(obj){
    $(".left .nav li").css("background","#364860");
    $(obj).css("background","#2a3950");
    $(".left").animate({left:"-13.1em"},"500");
    $(".right").animate({left:"0"},"500");
    setTimeout("$('.left').hide()",500);
}
function showNav(){
    if($(".left").css("display")=="none"){
        $(".left").show();
        $(".left").animate({left:"0"},"500");
        $(".right").animate({left:"13.1em"},"500");        
    }
    else{
        $(".left").animate({left:"-13.1em"},"500");
        $(".right").animate({left:"0"},"500"); 
        setTimeout("$('.left').hide()",500);
    }
        
}
//选择行
function check(obj){
    $("input[type=radio]").removeAttr("checked");
    $(".radio").attr("class","radio");
    $(obj).parent().find("tr").css("background","#fff");
    $(obj).find("input[type=radio]").attr('checked','checked');
    $(obj).find(".radio").attr("class","radio radio_checked");
    $(obj).css("background","#dceafc");
}

//搜索
function search(obj){
    var value=$(obj).val();
    if(value==""){
        $("li").show();
    }
    else{
        $(".list li").each(function(){
            if(this.innerHTML.indexOf(value)>=0){
                $(this).show();
            }                       
            else{
                $(this).hide();
            }
                
        })
    }
    
}
//表格添加行
function addTd(table){ 
    if(table=="lxrxx"){//联系人信息
        var num= $('#lxrxx tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' value=''/></td>"+
                                "<td><input type='text' value=''/></td>"+
                                "<td><input type='text' value=''/></td>"+
                            "</tr>");      
    }
    if(table=="csqy"){//初始权益
        $("#"+table).append("<tr>"+    
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                            "</tr>");      
    }
    if(table=="dxzc"){//大项支出
        $("#"+table).append("<tr>"+    
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                            "</tr>");      
    }
    if(table=="szzj"){//升值/折旧
        $("#"+table).append("<tr>"+    
                                "<td><input type='text' value=''/></td>" +
                                "<td><input type='text' value=''/></td>" +
                            "</tr>");      
    }
    if(table=="yyfy"){//营业费用
        var num= $('#yyfy tr').length+1;
        $("#"+table).append("<tr>"+    
                                "<th>"+num+"</th>"+
                                "<td>费用名称</td>" +
                                "<td><input type='text' value=''/></td>" +
                                "<td>费用金额</td>" +
                                "<td><input type='text' value=''/></td>" +
                            "</tr>");      
    }
    if(table=="khxx"){//企业开户信息
        var num= $('#khxx tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text'/></td>"+  
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="dhd"){//点货单
        var num= $('#dhd tr').length;
        $("#"+table).append("<tr>"+    
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="gdzcqd"){//固定资产清单
        var num= $('#gdzcqd tr').length-1;
        $("#"+table).append("<tr>"+   
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="ysyfqd"){//应收预付清单
        var num= $('#ysyfqd tr').length-1;
        $("#"+table).append("<tr>"+   
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="yfysqd"){//应付预收清单
        var num= $('#yfysqd tr').length-1;
        $("#"+table).append("<tr>"+   
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="fzxmmxqd"){//负债项目明细清单
        var num= $('#fzxmmxqd tr').length-1;
        $("#"+table).append("<tr>"+   
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='date' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                                "<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
	if(table=="fcxx"){//房产信息
        var num= $('#fcxx tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td><input type='date' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td>" +
                                    "<select>" +
                                        "<option>现金</option>" +
                                    "</select>" +
                                "</td>"+
								"<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
	if(table=="ccxx"){//车产信息
        var num= $('#ccxx tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td><input type='date' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td><input type='text' class='addinput'/></td>"+
								"<td>" +
                                    "<select>" +
                                        "<option>现金</option>" +
                                    "</select>" +
                                "</td>"+
								"<td><input type='text' class='addinput'/></td>"+
                            "</tr>");      
    }
    if(table=="fcz"){//房产证
        var num= $('#fcz tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='fcz_sheet"+num+"' class='readonly' readonly='readonly'/><input type='button' class='btn' value='选择文件' onclick='getMedia(\"fcz_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"fcz_sheet"+num+"\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>");      
    }
    if(table=="jhz"){//结婚证
        var num= $('#jhz tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='jhz_sheet"+num+"' class='readonly' readonly='readonly'/><input type='button' class='btn' value='选择文件' onclick='getMedia(\"jhz_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"jhz_sheet"+num+"\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>");      
    }
    if(table=="zxbg"){//征信报告
        var num= $('#zxbg tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='zxbg_sheet"+num+"' class='readonly' readonly='readonly'/><input type='button' class='btn' value='选择文件' onclick='getMedia(\"zxbg_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"zxbg_sheet"+num+"\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>");      
    }
    if(table=="yhls"){//银行流水
        var num= $('#yhls tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='yhls_sheet"+num+"' class='readonly' readonly='readonly'/><input type='button' class='btn' value='选择文件' onclick='getMedia(\"yhls_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"yhls_sheet"+num+"\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>");      
    }
  if(table=="gzjh"){//工作计划
      var num= $('#gzjh tr').length;
      $("#"+table).append("<tr>"+    
                              "<td>"+num+"</td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='date' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                              "<td><input type='text' class='addinput'/></td>"+
                          "</tr>");      
  }
}
//表格删除行
function removeTd(table){   
    var tr= document.getElementById(table).getElementsByTagName("tr");
    if(table=="yyfy"||table=="dxzc"){
        if(tr.length>1)//至少要保留一行
            document.getElementById(table).deleteRow(tr.length-1);//删除最后一行
    }
    else{
        if(tr.length>2)//至少要保留一行
            document.getElementById(table).deleteRow(tr.length-1);//删除最后一行
    }
        
       
}
