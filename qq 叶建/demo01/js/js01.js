/**
 * Created by yzh on 2016/8/27.
 */
$(function () {
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
    $(".yhz-dot5").click(function () {
        $(".yhz-box3").css('display', 'none');
    });
    //发送的点击事件
    $('.yhz-btn').click(function () {
        if ($('.yhz-txt').val() == '') {
            alert("发送内容不能为空,请输入内容")
        } else if ($('.yhz-txt').val() != '') {
            var name = $('.laosiji').html();
            var ner = $('.yhz-txt').val();
            var ners = ner.replace(/\n/g, '<br>');
            //获取时间
            var now = new Date();
            var t_div = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + ' ' + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            $('.yhz-box3-2').append('<div class="my"><div class="qq-chat-my"><span>' + name + '&nbsp;&nbsp;&nbsp;' + '</span><span>' + t_div + '</span></div><div class="qq-chat-ner">' + ners + '</div></div>');
            $(".yhz-box3-2").scrollTop($(".yhz-box3-2")[0].scrollHeight);
            $('.yhz-txt').val('').trigger("focus");
        }
    });
    //关闭的点击事件
    $(".yhz-but").click(function () {
        $(".yhz-box3").css('display', 'none');
    });
});