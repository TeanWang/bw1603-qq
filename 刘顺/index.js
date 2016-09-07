/**
 * Created by Liushun on 2016/8/26.
 */
function myBtn() {
    //点击弹窗显示出来
    $('.tc-shadow').css({display:'block',marginLeft:-$('.tc-shadow').outerWidth() / 2,marginTop:-$('.tc-shadow').outerHeight() / 2});
    //给弹窗加拖拽

    $('.tc-tp').mousedown(function (e) {
        //获取鼠标坐标
        var x = e.pageX;
        var y = e.pageY;
        //获取鼠标相对弹窗的坐标
        var t = $('.tc-shadow').outerHeight() / 2 - (y - $('.tc-shadow').offset().top);
        var l = $('.tc-shadow').outerWidth() / 2 - (x - $('.tc-shadow').offset().left);
        //获取弹窗到window的距离（left,top）
        $(document).on('mousemove',function (e) {
            var _x = e.pageX;
            var _y = e.pageY;

            $('.tc-shadow').css({left:_x  + l,top:_y + t});
            return false;  //阻止移动时选中文字
        });
        $(document).on('mouseup',function () {
            $(document).off('mousemove mouseup');
            return false;  //阻止移动时选中文字
        });
        return false
    });
    //给弹窗右上角加背景颜色
     $('.tc-head .tc-sx').hover(function () {
         $('.tc-head1 .tc-sx1').stop().animate({opacity:1},200);
     },function () {
         $('.tc-head1 .tc-sx1').stop().animate({opacity:0},200);
     });
    $('.tc-head .tc-sx3').hover(function () {
        $('.tc-head1 .tc-sx2').stop().animate({opacity:1},200);
    },function () {
        $('.tc-head1 .tc-sx2').stop().animate({opacity:0},200);
    });
    $('.tc-head .tc-no').hover(function () {
        $('.tc-head1 .tc-no1').stop().animate({opacity:1},200);
    },function () {
        $('.tc-head1 .tc-no1').stop().animate({opacity:0},200);
    });
    //点击X 消除弹窗
    $('.tc-head .tc-no').click(function () {
        $('.tc-shadow').css('display','none');
    });
    //点击登录按钮，验证成功后，弹出菜单栏
    $('.tc-tj').click(function () {
        if($('.tc-zh').val() == ''){
            alert('账号不能为空');
            return false
        }else if(!/^\d{5,11}$/.test($('.tc-zh').val())){
            alert('账号必须为数字且5~11位');
            return false
        }else if($('.tc-mm').val() == ''){
            alert('密码不能为空');
            return false;

        }else {
            //消除登录弹窗
            $('.tc-shadow').css('display', 'none');
            //弹出聊天菜单
            $('.lt-tc').css('display', 'block');
        }
        //显示出聊天窗口的位置
        $('.lt-tc').css({display:'block',marginLeft:-$('.lt-tc').outerWidth() / 15,marginTop:-$('.lt-tc').outerHeight() / 15});
        $('.lt-top1').mousedown(function (e) {
            //获取鼠标坐标
            var x = e.pageX;
            var y = e.pageY;
            //获取鼠标相对弹窗的坐标
            var t = $('.lt-tc').outerHeight() / 15 - (y - $('.lt-tc').offset().top);
            var l = $('.lt-tc').outerWidth() / 15 - (x - $('.lt-tc').offset().left);
            //获取聊天窗口到window的距离（left,top）
            $(document).on('mousemove',function (e) {
                var _x = e.pageX;
                var _y = e.pageY;

                $('.lt-tc').css({left:_x  + l,top:_y + t});
                return false;  //阻止移动时选中文字
            });
            $(document).on('mouseup',function () {
                $(document).off('mousemove mouseup');
                return false;  //阻止移动时选中文字
            });
            return false
        });

    })

}