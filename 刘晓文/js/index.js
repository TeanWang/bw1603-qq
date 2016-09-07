/**
 * Created by Administrator on 2016/8/26.
 */

$(function () {
    $('.qq').dblclick(function () {
        $('.box1').css({display:'block'});
        $('.box1').stop().animate({top:'50%',marginTop:-$('.box1').outerHeight()/2},500);
        $('.tu-3').click(function () {
            $('.box1').css({display:'none'})
        });
        // 拖拽
        sho($('.box1'),$('.tuoz'));
    //验证box1表单提交
        $('#tijia').submit(function () {
            //正则文本框
            var name = /^[a-z0-9_-]{3,16}$/;
            var par = /^[a-z0-9_-]{6,18}$/;
            if($('.dtput').val()==''||$('.dtput1').val()==''){
                alert('内容不用为空');
                return false;
            }else if(!name.test($('.dtput').val())||!par.test($('.dtput1').val())){
                alert('输入内容不合法');
                return false;
            }else{
                $('.box2').css({display:'block'});
                $('.box1').css({display:'none'});
                return false;
            }
        });
    //提交弹出登录成功的qq用户卡
    });


    // 拖拽拖拽拖拽
    // 拖拽
    function sho(obj,objt) {
        objt.mousedown(function (e) {
            objt.css({cursor:'move'})
            // 获取坐标
            var x = e.pageX;
            var y = e.pageY;
            //获取边距
            var l = obj.offset().left;
            var t = obj.offset().top;
            $(document).on('mousemove',function (e) {
                //获取移动之后的坐标
                var _x = e.pageX;
                var _y = e.pageY;
                obj.css({left:_x-x+l+obj.outerWidth()/2,top:_y-y+t+obj.outerHeight()/2});
                return false;
            });
            $(document).on('mouseup',function () {
                objt.css({cursor:'default'});
                $(document).off('mousemove mouseup');
            });
            return false;
        });
    }
    // 用户卡的js代码
    $('.ybu li').hover(function () {
        var a =  $(this).css('backgroundPositionY');
        if(a!='-40px'){
            $(this).stop().animate({backgroundPositionY:'-20px'});
        }
    },function () {
      var a =  $(this).css('backgroundPositionY');

        if(a!='-40px'){
        $(this).stop().animate({backgroundPositionY:'0'})
        }
    });
    $('.ybu li').click(function () {
        var index = $(this).index();
        $(this).stop().animate({backgroundPositionY:'-40px'},500).siblings().stop().animate({backgroundPositionY:'0'});
        // $(this).css({backgroundPositionY:'-40px'}).siblings().css({backgroundPositionY:0});
        $('.ybu img').css({left:(29+70*index)});
    });

    // qq账户登录界面
    $('.yhh div').click(function () {
        $('.chk').css({display:'block'});
        var index = $(this).index();
        var poa=$('.yhh div dt').html();
       

    });







    //鼠标移上去之后的聊天窗口上面的小标题切换图片
    $('.lolo li').mouseenter(
        function () {
            $(this).html('<img src="images/chat/wins.png">').siblings().html('<img src="images/chat/win.png">');
        });
    $('.lolo ul').mouseleave(function () {

        $('.lolo li').html('<img src="images/chat/win.png">')

    });
    // 聊天窗口
    $('.chk').css({marginTop:-$('.chk').outerHeight()/2})




});
