/**
 * Created by Administrator on 2016/8/26.
 */
$(function () {

    var index = 0, cur;

    $('.qq-top-choose-ul li>span').eq(index).css('top', '-40px');

    //选项栏点击事件
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

    //选项栏移入移出事件
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

    //最小化和关闭按钮，点击关闭
    $('.min').click(function () {
        $('.qb-qq').css('display','none')
    });

    $('.X').click(function () {
        $('.qb-qq').css('display','none')
    });

    //好友对话点击事件
    $('.qq-body li').dblclick(function () {

        $('.yhz-box3').css('display','block')

    });

    

});