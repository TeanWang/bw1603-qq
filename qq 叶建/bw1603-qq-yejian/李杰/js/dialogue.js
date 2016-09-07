
$(function () {
	$('#clswin').on('click',function(){
		$('.box').hide();
	});

	$('#setinfo').on('click',function(){
		if($('textarea').val()==''){
		  alert("发送内容不能为空,请输入内容")
		}else {
		   var time = show();
	       var nickname = '我的昵称';
		   var content = $('#qq-chat-text').val()
		   var cons = content.replace(/\n/g,'<br>')
	  	   $('.show').append('<li><div class="my-dialogue"><span>'+name+'</span><i>'+time+'</i></div><div class="content">'+cons+'</div></li>')
		}
	});
	

	$('#d-min').on('click',function(){
		$('.box').hide();
	});

	$('#d-max').on('click',function(){
                  
	});

	$('#d-close').on('click',function(){
		$('.box').hide();
	});

})