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


    $('.qq-top').mousedown(function (e) {
    
        $(this).css('cursor','move');
    
        var x = e.pageX;
        var y = e.pageY;
    
        var t = $('.qq-top').offset().top;
        var l = $('.qq-top').offset().left;
    
        $(document).on('mousemove', function(e) {
            var _x = e.pageX;
            var _y = e.pageY;
            $('.qb-qq').css({left:_x - x + l, top: _y - y + t});
    
        });
        $(document).on('mouseup', function() {
            $('.qq-top').css('cursor','default');
            // 解绑document的mousemove和mouseup事件
            $(document).off('mousemove mouseup');
        });
    
    
    });

    
});


// window.onload = function () {
//     var yd = document.getElementById('qb-qq');
//     yd.onmousedown = function (e) {
//         this.style.cursor = 'move';
//         var e = e || window.event;
//         var x = e.clientX;
//         var y = e.clientY;
//         var left = yd.offsetLeft;
//         var top = yd.offsetTop;
//         document.onmousemove = function (e) {
//             var e = e || window.event;
//             var _x = e.clientX;
//             var _y = e.clientY;
//             yd.style.left = _x - x + left + 'px';
//             yd.style.top = _y - y + top + 'px';
//         };
//         document.onmouseup = function () {
//             document.onmousemove = null;
//             document.onmouseup = null;
//             yd.style.cursor = 'default';
//         }
//     }
// };