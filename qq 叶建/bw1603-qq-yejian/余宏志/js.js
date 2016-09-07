/**
 * Created by yzh on 2016/8/27.
 */
$(function () {

    //登入页面jQuery

    $('.yhz-box1 img').dblclick(function () {
        $('.yhz-box2').css('display', 'block');
    });
    $('.yhz-dot1').click(function () {
        $('.yhz-box2').css('display', 'none');
    });
    $('.yhz-box2-1 span').hover(function () {
        var i = $(this).index();//获取当前的下标
        $(this).css('background', '#3a95de');
        $(this).eq(i).css('background', '#ea4848');
    }, function () {
        var i = $(this).index();//获取当前的下标
        $(this).css('background', '');
        $(this).eq(i).css('background', '');
    });
    $('.btn').click(function () {
        //获取文本框和密码框内的值
        var txt1 = $('.yhz-txt1').val();
        var pwd = $('.yhz-pwd').val();

        if (txt1.length<6||txt1.length>11) {
            alert("请输入正确的QQ号码")
        } else {

            if (pwd.length<6||pwd.length>20) {
                alert('密码错误')
            } else {
                $('.qb-qq').css('display','block');
                $('.yhz-box2').css('display', 'none');
            }
        }


    });



///////////////////////////////////////////////////////////////

    //QQ  jQuery


    var index = 0, cur;

    $('.qq-top-choose-ul li>span').eq(index).css('top', '-40px');

    //点击事件
    $('.qq-top-choose-ul li').click(function () {
        index = $(this).index();//获取当前焦点元素的下标

        if (index == 0) {
            $('.sjx').css('left', '30px')
        }
        if (cur != index) {
            $('.sjx').css({left: 30 + index * 70});
            $('.qq-top-choose-ul li>span').eq(index).addClass('qq-top-choose-li').stop().animate({top: -40},250)
        }
    });

    //移入移出事件
    $('.qq-top-choose-ul li').hover(function () {
        cur = $('.qq-top-choose-ul li').index(cur);
        index = $(this).index();//获取当前焦点元素的下标
        if (cur != index) {
            $('.qq-top-choose-ul li>span').eq(index).stop().animate({top: -20}, 200)
        }
    }, function () {
        if (cur != index) {
            $('.qq-top-choose-ul li>span').eq(index).stop().animate({top: 0}, 200)
        }
    } );

    //min、X的点击事件
    $('.min').click(function () {
        $('.qb-qq').css('display','none')
    });

    $('.X').click(function () {
        $('.qb-qq').css('display','none')
    });
    $('.qb-d').dblclick(function () {
        $('.yhz-box3').css('display','block');
    });


////////////////////////////////////////////////////////////

    //对话框jQuery

    $('.yhz-box3-1-4 li').hover(function () {
        var i = $(this).index();//获取当前的下标
        $(this).css('background', '#3a95de');
        $(this).eq(i).css('background', '#ea4848');
    }, function () {
        var i = $(this).index();//获取当前的下标
        $(this).css('background', '');
        $(this).eq(i).css('background', '');
    });
    $('.yhz-dot7').click(function () {
        $('.yhz-box3').css('display', 'none');
    });
    $(".yhz-dot5").click(function(){
        $(".yhz-box3").css('display', 'none');
    });
    //发送的点击事件
    $('.yhz-btn').click(function(){
        if($('.yhz-txt').val()==''){
            alert("发送内容不能为空,请输入内容")
        }else if($('.yhz-txt').val()!=''){
            var name = $('.laosiji').html();
            var ner = $('.yhz-txt').val();
            var ners = ner.replace(/\n/g,'<br>');
            //获取时间
            var now=new Date();
            var t_div = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+' '+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
            $('.yhz-box3-2').append('<div class="my"><div class="qq-chat-my"><span>'+name+'&nbsp;&nbsp;&nbsp;'+'</span><span>'+t_div+'</span></div><div class="qq-chat-ner">'+ners+'</div></div>');
            $(".yhz-box3-2").scrollTop($(".yhz-box3-2")[0].scrollHeight);
            $('.yhz-txt').val('').trigger("focus");
        }
    });
    //关闭的点击事件
    $(".yhz-but").click(function(){
        $(".yhz-box3").css('display', 'none');
    });
});