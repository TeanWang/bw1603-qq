
$(function () {
	$('.login').hide();
	$('.qq').hide();
	$('.box').hide();

	$('.qq-exe').on('dblclick',function(){
		$('.login').show();
	});

	// 登录
	$('.l-btn').on('click',function(){
		console.log(1212)
		if ($('#l-name').val() == '') {
			alert('用户名不能为空');
		} else if($('#l-pwd').val() == '') {
			alert('密码不能为空');
		} else {
			$('.qq').show();
			$('.login').hide();
		}

	});

});



	





