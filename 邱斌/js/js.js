/**
 * Created by yzh on 2016/8/27.
 */
$(function () {
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


    })
});