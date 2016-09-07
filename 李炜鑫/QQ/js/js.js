$(function () {
    //鼠标悬浮QQ图标显示阴影层
    var boxShadow = $('<div class="box-shadow"></div>');
    var QQBoxShadow = $('<div class="qq-boxShadow"></div>');
    $('body').append(boxShadow, QQBoxShadow);
    $('.qq').hover(function () {
        $('.box-shadow').addClass('cur')
    }, function () {
        $('.box-shadow').removeClass('cur')
    });
    //鼠标双击QQ图标弹出登录界面
    $('.qq').dblclick(function () {
        $('.qq-logo').slideDown('slow').css({display: 'block'});
        //点×关闭登录界面
        $('.icon3').click(function () {
            $('.qq-logo').slideUp('slow', function () {
                $('.qq-logo').css({top: '50%', left: '50%'});
            })
        });
        //拖拽登录界面
        $('.logo-title').mousedown(function (e) {
            $('.logo-title').css({cursor: 'move'});
            var x = e.clientX;
            var y = e.clientY;
            var left = $('.qq-logo').offset().left + $('.qq-logo').outerWidth() / 2
            var top = $('.qq-logo').offset().top + $('.qq-logo').outerHeight() / 2;
            $(document).on('mousemove', function (e) {
                var x1 = e.clientX;
                var y1 = e.clientY;
                $('.qq-logo').css({left: x1 - x + left, top: y1 - y + top});
                return false;
            });
            $(document).on('mouseup', function () {
                $(document).off('mousemove mouseup');
                $('.logo-title').css({cursor: 'default'});
            });
            return false;
        });
    });
    //登录验证
    $('#load1').click(function () {
        var flag = false;
        var confirmation1 = $('.logo-confirmation1')
        var confirmation2 = $('.logo-confirmation2');
        var text1 = $('#text1').val();
        var pwd1 = $('#pwd1').val();
        var reg1 = /^[1-9][0-9]{4,14}$/;
        var reg2 = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/;
        var reg3 = /^1[3|4|5|8][0-9]\d{4,8}$/;
        var reg4 = /^[a-zA-Z0-9]{6,22}$/;
        if (text1 == "") {
            confirmation1.html('QQ号不能为空');
            confirmation1.css({display: 'block'});
            confirmation2.css({display: 'none'});
            return false;
        }
        if (!((reg1.test(text1)) || (reg2.test(text1)) || (reg3.test(text1)))) {
            confirmation1.css({display: 'block'});
            confirmation2.css({display: 'none'});
            confirmation1.html('QQ号不正确');
            return false;
        }
        if (pwd1 == "") {
            confirmation1.css({display: 'none'});
            confirmation2.css({display: 'block'});
            confirmation2.html('密码不能为空');
            return false;
        }
        if (!(reg4.test(pwd1))) {
            confirmation1.css({display: 'none'});
            confirmation2.css({display: 'block'});
            confirmation2.html('密码不正确');
            return false;
        } else {
            flag = true
        }
        if (flag) {
            $('.qq-logo').slideUp('slow', function () {
                $('.qq-logo').css({top: '50%', left: '50%'});
                confirmation1.css({display: 'none'});
                confirmation2.css({display: 'none'});
                $('.logo-content').fadeIn(function () {
                    $('.logo-content').css({display: 'block'});
                });
                //背景图片显示
                $('.qq-boxShadow').fadeIn(function () {
                    $('.qq-boxShadow').css({display: 'block'});
                });

                $('#text1').val('');
                $('#pwd1').val('');
            });
        }
    });
    //QQ界面点×关闭
    $('.qq-top-con2').click(function () {
        $('.logo-content').fadeOut('slow', function () {
            $('.logo-content').css({left: '1080px', top: 0, display: 'none'});
        });
        //背景图片隐藏
        $('.qq-boxShadow').fadeOut('slow', function () {
            $('.qq-boxShadow').css({left: '1080px', top: 0, display: 'none'})

        });

    });
    //QQ界面拖拽
    $('.qq-title-box').mousedown(function (e) {
        $('.qq-title-box').css({cursor: 'move'});
        var x = e.clientX;
        var y = e.clientY;
        var left = $('.logo-content').offset().left;
        var top = $('.logo-content').offset().top;
        /*背景动作*/
        var left1 = $('.qq-boxShadow').offset().left;
        var top1 = $('.qq-boxShadow').offset().top;

        $(document).on('mousemove', function (e) {
            var x1 = e.clientX;
            var y1 = e.clientY;
            $('.logo-content').css({left: x1 - x + left, top: y1 - y + top});
            $('.qq-boxShadow').css({left: x1 - x + left1, top: y1 - y + top1});
            return false;
        });
        $(document).on('mouseup', function () {
            $(document).off('mousemove mouseup');
            $('.qq-title-box').css({cursor: 'default'});
        });
        return false;
    });
    /*、、、、、、、、、、、、、、聊天界面、、、、、、、、、、、、、、、、、、、*/
    $('.qq-content ul li').dblclick(function () {
        var index = $(this).index();
        $('.qq-chat').css({display: 'block'});
        var src1 = $('.qq-content ul img').eq(index).attr('src');
        $('.qq-chat-t-head img').attr('src', src1);

        var text2 = $('.qq-content h3').eq(index).text();
        $('.qq-chat-t-name').text(text2);

        var text3 = $('.qq-content p').eq(index).text();
        $('.qq-chat-you span').text(text3);
    });
    $('.qq-chat-win .close,.close-chat').click(function () {
        $('.qq-chat').css({display: 'none'});
    });
    $('.fasong').click(function () {
        /*创建一个接受框*/
        var textareaMy = $('<li><div class="qq-chat-my cf"><span></span><br><i></i></div><div class="qq-chat-ner"></div></li>');
        $('.qq-chat-txt ul').append(textareaMy);
        var textarea = $('#qq-chat-text').val();
        console.log(textarea);
        $('#qq-chat-text').val("");
        var qqTopCase1=$('.qq-top-case1').html();
        $('.qq-chat-my span').html(qqTopCase1+':');
        $('.qq-chat-my+div').html(textarea);
    });

});
