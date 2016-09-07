
$(function () {
	// 关闭和最小化按钮
	$('#i-close').on('click',function(){
		$('.qq').hide();
	});

	$('#i-min').on('click',function(){
		$('.qq').hide();
	});

	// item切换样式
	$('.tab span').on('click',function(){
		$(this).css('backgroundPosition','bottom').parent('li').siblings().children('span').css('backgroundPosition','top');
		$('.tab i').css('display','block').parent('li').siblings().children('i').css('display','none');
	});

	// 双击弹出对话框
	$('.item li').on('dblclick',function(){
		$('.box').show();
		drag();
	});


})