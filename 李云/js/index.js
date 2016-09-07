/**
 * Created by Administrator on 2016/8/26.
 */
$(function () {
    $('.box').dblclick(function(){
        $(".box1").slideToggle();
    });
    $('.span2').click(function(){
        $(".box").dblclick();
    });
    $('.box7 input').click(function () {
        var qq =/^[1-9]\d{4,11}$/;
        var password =/^(\w){6,20}$/;
            if (qq.test($('.p input').val()) && password.test($('.p1 input').val()) ){
                $('.box-1').css('display','block');
                $('.box1').css('display','none');
                $('.qq-top').mousedown(function (e) {
                    $(this).css('cursor','move');
                    //获取鼠标当前距离
                    var x = e.pageX;
                    var y = e.pageY;
                    var t =  - (y - $('.box-1').offset().top);
                    var l =  - (x - $('.box-1').offset().left);
                    // 给document绑定mousemove事件
                    $(document).on('mousemove',function (e) {
                        var _x = e.pageX;
                        var _y = e.pageY;
                        $('.box-1').css({left:_x + l, top: _y + t});
                    });
                    $(document).on('mouseup',function () {
                        $('.qq-top').css('cursor','default');
                        // 解绑document的mousemove和mouseup事件
                        $(document).off('mousemove mouseup');
                    });
                    return false;  // 阻止移动时，选中文字
                });
            }
            else{
                alert("qq格式错误");
                return false;
            }
    });
    $('.box2').mousedown(function (e) {
        $(this).css('cursor','move');
        //获取鼠标当前距离
        var x = e.pageX;
        var y = e.pageY;
        var t =  - (y - $('.box1').offset().top);
        var l =  - (x - $('.box1').offset().left);
        // 给document绑定mousemove事件
        $(document).on('mousemove',function (e) {
            var _x = e.pageX;
            var _y = e.pageY;
            $('.box1').css({left:_x + l, top: _y + t});
        });
        $(document).on('mouseup',function () {
            $('.box2').css('cursor','default');
            // 解绑document的mousemove和mouseup事件
            $(document).off('mousemove mouseup');
        });
        return false;
    });
    var index=0;
   $('.qq-top-4 li').click(function () {
       index=$(this).index();
       $('.qq-top-4 li').eq(index).addClass('qq-li5').siblings().removeClass('qq-li5')
   });
    $('.span4').click(function () {
        $('.box-1').css('display','none');
    });
    $('.qq-top-6 li').hover(function () {
        index=$(this).index();
        $('.qq-top-6 li').eq(index).stop().animate({opacity:'1'},1000);
        $('.qq-top-6 li img').eq(index).css('box-shadow', '0 0 2px #000');

    },function () {
        $('.qq-top-6 li').eq(index).stop().animate({opacity:'0'},1000);
        $('.qq-top-6 li img').eq(index).css('box-shadow', '0 0 0 #000');
        
    });






    $('.qq-top-6 li').dblclick(function () {
        $('.qq-tq').css('display','block').removeClass('mins');
        $('.qq-chat-t-name').html($(this).find('span').html());
        $('.qq-chat-t-head img').attr('src',$(this).find('img').attr('src'));
        $('.qq-chat-you span').html($(this).find('span').html());
        $('.qq-chat-you i').html($(this).find('.qq-top-name i').html());
        $('.qq-chat-ner').html($(this).find('.qq-top-txt').html());
        $('.my').remove();








        $('.qq-tq1').mousedown(function (e) {
            $(this).css('cursor','move');
            //获取鼠标当前距离
            var x = e.pageX;
            var y = e.pageY;
            var t =  - (y - $('.qq-tq').offset().top);
            var l =  - (x - $('.qq-tq').offset().left);
            // 给document绑定mousemove事件
            $(document).on('mousemove',function (e) {
                var _x = e.pageX;
                var _y = e.pageY;
                $('.qq-tq').css({left:_x + l, top: _y + t});
            });
            $(document).on('mouseup',function () {
                $('.qq-tq').css('cursor','default');
                // 解绑document的mousemove和mouseup事件
                $(document).off('mousemove mouseup');
            });
            return false;
        });

    });
    $('.qq-tq-span').click(function(){
        $(".qq-tq").css('display','none');
    });
    $('.qq-tq-li4').click(function(){
        $(".qq-tq").css('display','none');
    });
    $('.qq-tq-li2').click(function () {
        $(".qq-tq").slideToggle();
    });
    $('.qq-tq-span1').click(function(){
        if($('#qq-chat-text').val()==''){
            alert("发送内容不能为空,请输入内容")
        }else if($('#qq-chat-text').val()!=''){
            var name = $('.qq-top-name span').html();
            var ner = $('#qq-chat-text').val();
            var ners = ner.replace(/\n/g,'<br>');
            var now=new Date();
            var t_div = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+' '+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
            $('.qq-tq7 ul').append('<li class="my"><div class="qq-chat-my"><span>'+name+'</span><i>'+t_div+'</i></div><div class="qq-chat-ner">'+ners+'</div></li>');
            $(".qq-tq7").scrollTop($(".qq-tq7")[0].scrollHeight);
            $('#qq-chat-text').val('').trigger("focus")
        }
    })
});