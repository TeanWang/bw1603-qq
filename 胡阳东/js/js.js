/**
 * Created by Administrator on 2016/8/26.
 */
$(function () {
    $('.top,.bottom').mousedown(function (e) {
        // 获取鼠标的坐标
        var x = e.pageX;
        var y = e.pageY;
        var t = ($('.box').offset().top-y);
        var l = ($('.box').offset().left-x);
        // 给document绑定mousemove事件
        $(document).on('mousemove', function(e) {
            var _x = e.pageX;
            var _y = e.pageY;
            $('.box').css({left:_x + l, top: _y + t});
            return false;  // 阻止移动时，选中文字
        });
        $(document).on('mouseup', function() {
            // 解绑document的mousemove和mouseup事件
            $(document).off('mousemove mouseup');
        });
        return false;
    });
    $('.body-top-head span').hover(function () {
        $(this).css({backgroundPosition:'center -20px'})
    },function () {
        $(this).css({backgroundPosition:'center 0'})
    })
});