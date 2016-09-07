/**
 * Created by Administrator on 2016/8/26.
 */
$(function () {
    var index = 0;
    //小图标的点击事件
    $('.qq-log').dblclick(function () {
        $('.qq-login').css('display', 'block')
    });
    $('.qq-top div').hover(function () {

        index = $(this).index();
        $('.qq-top div').eq(index).css('backgroundColor', 'lightBlue').siblings().css('background', '')
        $('.qq-top div').eq(2).mouseenter(function () {
            $('.qq-top div').eq(2).css('background', 'red')
        })
        $('.qq-top div').eq(2).click(function () {
            $('.qq-login').css('display', 'none')
        })
    }, function () {

        $('.qq-top div').eq(index).css('background', '')
    });

    //登录界面的拖拽事件
    $('.qq-login').mousedown(function (e) {
        $('.qq-login').css('cursor', 'pointer');
        var x = e.pageX;
        var y = e.pageY;

        var l = $('.qq-login').offset().left + $('.qq-login').outerWidth() / 2;
        var t = $('.qq-login').offset().top + $('.qq-login').outerHeight() / 2;
        $(document).on('mousemove', function (e) {
            var _x = e.pageX;
            var _y = e.pageY;
            $('.qq-login').css({left: _x - x + l, top: _y - y + t});
            return false
        })
        $(document).on('mouseup', function () {
            $('.qq-login').css('cursor', 'default');
            $(document).off('mousemove mouseup');
        })
    });
    
    //登录的点击事件


});