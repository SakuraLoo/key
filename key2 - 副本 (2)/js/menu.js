function addMenu(e,on){
    var name=new Array('首页','资讯','求助','投诉','我的');
    var href=new Array('index.html','newlist.html','seek.html','complaint.html','mine.html');
    var classes=new Array('homeico','bianminico','helpico','tousuico','mineico');
    var ul=$('<ul/>');
    for(var i=0;i<5;i++){
        if(i==2){
            if(i==on-1){
                ul.append('<li class="helptap select">'+
                '<a href="'+href[i]+'" style="position: relative;">'+
                '<em class="'+classes[i]+'" style="display: block; width: 100%; height: 55px; position: absolute; top: -25px; left: 0;"></em>'+
                '<p style="padding-top: 30px;">'+name[i]+'</p>'+
                '</a>'+
                '</li>');
            }else{
                ul.append('<li class="helptap">'+
                '<a href="'+href[i]+'"style="position: relative;">'+
                '<em class="'+classes[i]+'" style="display: block; width: 100%; height: 55px; position: absolute; top: -25px; left: 0;"></em>'+
                '<p style="padding-top: 30px;">'+name[i]+'</p>'+
                '</a>'+
                '</li>');
            }    
        }else{
            if(i==on-1){
                ul.append('<li class="select footmenu">'+
                '<a href="'+href[i]+'">'+
                '<em class="'+classes[i]+'"></em>'+
                '<p>'+name[i]+'</p>'+
                '</a>'+
                '</li>');
            }else{
                ul.append('<li class="footmenu" style="position:relative;">'+
                '<a href="'+href[i]+'">'+
                '<em class="'+classes[i]+'"></em>'+
                '<p>'+name[i]+'</p>'+
                '</a>'+
                '</li>');
            }
        }
        
    }
    e.append(ul);

    //添加小红点
    var str = '';
    if(on){
        if(on == 1 || on == 5){
	$.ajax({
		url: getProjectName()+'/wehome/getnotread',
		type: 'GET',
		cache:true,
		success:function(result){
			console.log(result);
			if(result.data.complaint > 0 || result.data.help > 0 ){
				str= '<label style="width:8px;height:8px;border-radius:8px;background-color:red;position:absolute;top:3px;right:15px;display:inline-block;"></label>';
				$('.footmenu').eq(3).append(str);
			}
			
		},
		error:function(error){
//			alert('数据错误');
		}
	})
	

        }
    }
    

}