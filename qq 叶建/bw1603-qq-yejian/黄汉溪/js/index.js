/**
 * Created by Administrator on 2016/8/27.
 */
$(function () {
   //双击qq
    $('.box').dblclick(function () {
        $('.alert').animate({height:'toggle'});
    });
    // 隐藏qq
    $('.d2').click(function () {
        $('.alert').slideUp();
    });
    // 关闭qq
    $('.d3').click(function () {
        $('.alert').hide();
    });

    // 拖动
    $('.head').mousedown(function (e) {
        // 获取当前坐标
        var x = e.pageX;
        var y = e.pageY;
        var l = $('.alert').outerWidth()/2 + $('.alert').offset().left;
        var t = $('.alert').outerHeight()/2 + $('.alert').offset().top;

        $(document).on('mousemove',function (e) {
            _x = e.pageX;
            _y = e.pageY;
            $('.alert').css({left:_x - x + l, top: _y -y +t});
            return false
        });
        $(document).on('mouseup',function () {
            $(document).off('mousemove mouseup');
            return false
        })
    })
    
});