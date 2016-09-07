/**
 * Created by Administrator on 2016/8/26.
 */
$(function () {
    
    $('.QQ').dblclick(function () {
        $('.dl').css({display:'block'})
    });
    $('.x').click(function () {
        $('.dl').css({display:'none'})
    });
    $('.container .password').keydown(function (e) {
        if(e.keyCode == 13){
            dl();
        }

    });
    function dl() {
        var user = /^[1-9]\d+$/.test($('.user-name').val());
        var num = $('.user-name').val().length;
        var mm = $('.password').val().length;
        if( num<5 || num>12){
            alert('账号为5~12位');
        }else if( /^[0]/.test($('.user-name').val())){
            alert('账号不能以0开头')
        }else if(!user){
            alert('用户名必须为纯数字')
        }else if(mm == ''){
            alert('请输入密码')
        }else {
            $('.dl').css({display:'none'});
            $('.talk').css({display:'block'});
            $('.talk').stop().animate({height:700},300);
        }
    }
    $('.submit').click(dl);
    $('.span1').click(function () {
        $('.talk').css({display:'none'});
        $('.talk').css({height:0});
        $('.window').css({display:'none'});

    });
    $('.span2').click(function () {
        $('.talk').stop().animate({height:0},300,function () {
            $('.talk').css({display:'none'});
        });
    });
    $('.contacts li').click(function () {
        $(this).addClass('first-one').siblings().removeClass('first-one')
    });
    $('.top--').click(function () {
        $('.window').stop().animate({height:0},function () {
            $('.window').css({display:'none'})
        });

    });
    $('.top-x').click(function () {
        $('.window').css({display:'none'})
    });
    $('.history li').dblclick(function () {
        $('.window').css({height:510});
        $('.window').css({display:'block'});
        $('.name-time span').val();
        $('.top-t .name').html($(this).find('span').html());
        $('.top-t .head-img img').attr('src',$(this).find('img').attr('src'));
        $('.qq-info .name-time span').html($(this).find('span').html());
        $('.qq-info .name-time i').html($(this).find('i').html());
        $('.window .contain .qq-info .chat-info').html($(this).find('.info').html());
        $("#qq-chat-text").trigger("focus");
        $('.my').remove();
    });
    $('.enter-close .close').click(function () {
        $('.window').css({display:'none'});
    });
    $('.enter-close .enter').click(function () {
        if($('#text').val()==''){
            alert("发送内容不能为空")
        }else if($('#text').val()!=''){
            var name = $('.top .qq-name span').html();
            var ner = $('#text').val();
            var ners = ner.replace(/\n/g,'<br>');
            var now=new Date();
            var t_div = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+' '+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
            $('.window .qq-info ul').append('<li class="my"><div class="qq-chat-my"><span>'+name+'</span><i>'+t_div+'</i></div><div class="qq-chat-ner">'+ners+'</div></li>');
            $('#text').val('').trigger("focus")
        }
    });

});