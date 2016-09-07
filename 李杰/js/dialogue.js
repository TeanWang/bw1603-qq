
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
		   var content = $('#info').val()
	  	   $('.show').append('<div class="nt"><span>'+nickname+'&nbsp;'+time+'</span></div><div class="s_content">'+content+'</div>')
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