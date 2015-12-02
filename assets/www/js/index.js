//左侧导航
function changeNav(obj){
    $(".left .nav li").css("background","#364860");
    $(obj).css("background","#2a3950");
    $(".left").animate({left:"-7.1em"},"500");
    $(".right").animate({left:"0"},"500");
}
function showNav(){
    $(".left").show();
    $(".left").animate({left:"0"},"500");
    $(".right").animate({left:"7.1em"},"500");
}
//选择行
function check(obj){
    $("input[type=radio]").removeAttr("checked");
    $(obj).find("input[type=radio]").attr('checked','checked');
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
                                "<td><input type='text' id='fcz_sheet"+num+"' class='readonly' readonly='readonly'/><input type='file' onclick='getMedia(\"fcz_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"fcz_sheet"+num+"\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>");      
    }
    if(table=="jhz"){//结婚证
        var num= $('#jhz tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='jhz_sheet"+num+"' class='readonly' readonly='readonly'/><input type='file' onclick='getMedia(\"jhz_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"jhz_sheet"+num+"\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>");      
    }
    if(table=="zxbg"){//征信报告
        var num= $('#zxbg tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='zxbg_sheet"+num+"' class='readonly' readonly='readonly'/><input type='file' onclick='getMedia(\"zxbg_sheet"+num+"\",\"img\");'/></td>"+
                                "<td><button class='btn btn-success btn-small' onclick='capture(\"zxbg_sheet"+num+"\",\"img\");'><img src='images/ps.png'/></button></td>"+
                            "</tr>");      
    }
    if(table=="yhls"){//银行流水
        var num= $('#yhls tr').length;
        $("#"+table).append("<tr>"+    
                                "<td>"+num+"</td>"+
                                "<td><input type='text' id='yhls_sheet"+num+"' class='readonly' readonly='readonly'/><input type='file' onclick='getMedia(\"yhls_sheet"+num+"\",\"img\");'/></td>"+
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
    if(tr.length>2)//至少要保留一行
        document.getElementById(table).deleteRow(tr.length-1);//删除最后一行
       
}
