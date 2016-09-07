/**
 * Created by Administrator on 2016/8/26.
 */
$(function () {

    /***********************************登录界面*************************************/
    function myAlert() {
        //创建弹出内容层对象
        var alertBox = $('' +
            '<div class="qq_box"><ul class="qq_menu"><li class="menu_set" title="设置"></li><li class="menu_small" title="最小化"></li><li class="menu_close" title="关闭"></li></ul><div class="qq_input cf"><ul class="input_img"><li><img src="images/loginLayer/user.jpg" alt=""></li></ul><div class="input_all"><div class="name_pwd cf"><input type="text" placeholder="QQ号码/手机/邮箱"><input type="password" placeholder="密码"><p class="tip">请您输入账号后再登录</p></div><ul class="check-box cf"><li class="left"><input type="checkbox" checked id="rememberPwd"><label for="rememberPwd">记住密码</label></li><li class="right"><input type="checkbox" id="autoLogin"><label for="autoLogin">自动登录</label></li></ul><p class="safe_land">安全登录</p></div><ul class="register_back"><li><a href="#">注册账号</a></li><li><a href="#">找回密码</a></li></ul></div></div>');

        //把内容层加入到body中
        $('body').append(alertBox);

        //动画效果出现内容层
        alertBox.animate({top: '50%'}, 200);

        //改一下margin-top的值，好让内容层垂直居中
        alertBox.css('marginTop', -alertBox.outerHeight() / 2);
    }

    /***********************************表单验真*************************************/
    function formInput() {
        //鼠标滑到表单时边框为蓝色
        $('.input_all input').hover(function () {
            $(this).css('border', '1px solid #09a3dc');
        }, function () {
            $(this).css('border', '1px solid #d1d1d1');
        });

        //点击 安全登录 按钮,验证用户名框及密码框是否为空
        $('.safe_land').click(function () {
            //判断框框是否为空
            if ($('.name_pwd').find('input').val() == '') {
                $('.tip').css('display', 'block');           //如果为空显示提示框
                //当框框重新获得焦点之后,隐藏提示框
                $('.name_pwd input').focus(function () {
                    $('.tip').css('display', 'none');
                });

            } else if ($('.name_pwd input').val() != '') {
                $('#userWindow').css('display', 'block');
                $('.img_qq span').css('backgroundPosition', 'left center');
                $('.qq_box').remove();
            }
        });
        return false;
        //键盘按下事件
        /*
         $('.name_pwd input').keydown(function(e){
         //点击回车(Enter)登录判断
         if(e.keyCode == 13){
         if($('name_pwd').find('input').val() == ''){

         $('.tip').css('display','block');           //如果为空显示提示框

         //当框框重新获得焦点之后,隐藏提示框
         $('.name_pwd input').focus(function(){

         $('.tip').css('display','none');
         });
         }else if($('.name_pwd input').val() != ''){
         /!*                    $('.qq_box').remove();
         $('#userWindow').css('display','block');*!/
         }
         }
         });
         */
    }

    /*******************************拖拽函数changeMove*******************************/
    //who: 谁; moved: 移动;
    function changeMove(whoMoved) {
        var flag = true;
        $(whoMoved).mousedown(function (e) {

            //设置鼠标样式
            $(this).css('cursor', 'default');

            //获取鼠标坐标
            var x = e.pageX;
            var y = e.pageY;

            var t = $(whoMoved).outerHeight() / 2 - (y - $(whoMoved).offset().top);
            var l = $(whoMoved).outerWidth() / 2 - (x - $(whoMoved).offset().left);

            //给document绑定mousemove事件
            $(document).on('mousemove', function (e) {
                var _x = e.pageX;
                var _y = e.pageY;
                $(whoMoved).css({left: _x + l, top: _y + t});

                flag = false;//为阻止在移动过程中,选中文字
            });

            $(document).on('mouseup', function () {

                $(whoMoved).css('cursor', 'default');

                //解除document的mousemove和mouseup事件
                $(document).off('mousemove mouseup');
            });
            flag = false;
        });
    }

    /*********************************关闭内容层方式*********************************/
    //点击 X 或 _ ,无动画效果的消失(who: 谁; Let: 让; who: 谁; disappear: 消失)
    function close(whoLet, whoDisappear) {
        $(whoLet).click(function () {
            $(whoDisappear).remove();
        });
    }

    //点击 X 或 _ ,显示或隐藏(who: 谁; Let: 让; who: 谁; css: 样式表; attribute: 属性; sty: 样式)
    function showHide(whoLet, whoCss, attribute, sty) {
        $(whoLet).click(function () {
            $(whoCss).css(attribute, sty);
        });
    }

    //点击 X ,向上消失的动画效果(who: 谁; Let: 让; who: 谁; how: 怎样; disappear: 消失)
    function topClose(whoLet, who, how, whoDisappear) {
        //点击内容层的 X (关闭),使用动画效果让内容层消失,然后在回调函数中删除该元素
        $(whoLet).click(function () {
            $(who).animate({top: how}, 200, function () {
                $(whoDisappear).remove();
            });
            $('.img_qq').css('display', 'none');
        });
    }

    //点击 X ,
    function middleClose(whoLet, whoDisappear) {
        $(whoLet).click(function () {
            $(whoDisappear).slideToggle(1000);
        });
    }

    /*********************************弹出内容层方式*********************************/
    //单击桌面qq小图标显示内容层

    // showHide('.img_qq','#userWindow','display','block');

    $('.img_qq').click(function () {

        formInput();                                                    //先运行表单验证

        if ($('.img_qq span').css('backgroundPosition', 'right center')) {

            $('#userWindow').css('display', 'block');

        } else {
            myAlert();                                                  //显示内容层
            formInput();                                                //表单
            topClose('.menu_close', '.qq_box', '-165px', '.qq_box');       //点击 X ,画效果的消失
            close('.menu_small', '.qq_box');                             //点击 _ ,隐藏
            changeMove('.qq_box');                                      //拖拽
        }

    });

    //双击桌面qq大图标显示内容层
    $('#qq').dblclick(function () {
        $('.img_qq span').css('backgroundPosition', 'right center'); //双击前先让小图标返回默认位置


        myAlert();                                                  //显示内容层
        formInput();                                                //表单
        // middleClose('.menu_close','.qq_box');
        topClose('.menu_close', '.qq_box', '-165px', '.qq_box');       //点击 X ,画效果的消失
        close('.menu_small', '.qq_box');                             //点击 _ ,隐藏
        changeMove('.qq_box');                                      //拖拽
        $('.img_qq').css('display', 'block');                        //双击时显示qq小图标
    });

    //显示个人q号后拖拽
    $('#userWindow').mouseenter(function () {
        changeMove('#userWindow');
        // showHide('.head-shut','#userWindow','display','none');      //点击 X ,隐藏
        showHide('.head-small', '#userWindow', 'display', 'none');     //点击 _ ,隐藏
        showHide('.head-shut', '.img_qq', 'display', 'none');          //点击 X ,隐藏qq小图标


        $('.head-shut').click(function () {
            $('#userWindow').animate({width: 0, height: 0}, 500, function () {
                $('#userWindow').animate({width: 279, height: 695, left: '50%', top: '50%'}, 0, function () {
                    $('#userWindow').hide()
                })
            })
        });
    });
});
