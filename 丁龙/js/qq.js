/**
 * Created by Administrator on 2016/8/26.
 */
$(function () {
    //给客户端图片加入双击事件
    $('.client').dblclick(function () {
        //双击后显示登录界面
        $('.get').css('display','block')
    });

//登录界面特效在这里
    //登录界面移入特效
    $('.little .little11').hover(function () {
        $('.little1').stop().animate({opacity:1},400)
    },function () {
        $('.little1').stop().animate({opacity:0},400)
    });
    $('.little .little22').hover(function () {
        $('.little2').stop().animate({opacity:1},400)
    },function () {
        $('.little2').stop().animate({opacity:0},400)
    });
    $('.little .little33').hover(function () {
        $('.little3').stop().animate({opacity:1},400)
    },function () {
        $('.little3').stop().animate({opacity:0},400)
    });

    //点击XX关闭登录界面
    $('.little .little11').click(function () {
        $('.get').css('display','none')
    });

    //登录验证，点击登录
    $('.admin').click(login)
    //登录验证，按回车键登录
    $('body').keydown(function (event) {

        if(event.keyCode==13){
           login()
        }
    });
//qq界面特效在这里
        //点击叉叉关闭qq界面
        $('.one .one2').click(function () {
            $('.qq').css('display','none');

        });
        //点击减号收起qq界面
        $('.one .one3').click(function () {
            $('.qq').stop().animate({height:0},function () {
                $('.qq').css('display','none');
            })
        });
        //双击好友消息显示出窗口
        $('.tara .tara1').dblclick(function () {
            $('.baolan').css('display','block')
        });
        //点击关闭关闭聊天窗口
        $('.baolan-btn .baolan-btn-x').click(function () {
            $('.baolan').css('display','none')
        });
        //点击叉叉关闭聊天窗口
        $('.baolan .baolan-ul-4').click(function () {
            $('.baolan').css('display','none')
        });
});


//登录判断函数
    function login() {
        var name = $('.top .input1').val();//获取账号的内容
        var password = $('.top .input2').val();//获取密码的内容

        if (name == '') {
            alert('账号不能为空')
        } else if (/^[0]/.test(name)) {
            alert('账号不能以0开头')
        } else if (!(/^[1-9]\d+$/.test(name))) {
            alert('账号必须为数字')
        } else if (name.length < 5 || name.length > 12) {
            alert('账号必须为5-12位数字')
        } else if (password == '') {
            alert('密码不能为空')
        } else {
            $('.qq').css({display: 'block', height: 634});
            $('.get').css('display', 'none');
        }
    }
    //点击发送显示回复框
    $('.baolan-btn-s').click(function () {
        $('.baolan-btn1-c').css('display','block');
        $('.baolan-btn1-d').css('display','block');

    });

//         //原谅我复制粘贴了
//         $('.baolan-btn-s').click(function(){
//             if($('.text').val()==''){
//                 alert("发送内容不能为空,请输入内容")
//             }else if($('.text').val()!=''){
//                 var name = $('.qq-top-name span').html();
//                 var ner = $('.text').val();
//                 var ners = ner.replace(/\n/g,'<br>');
//                 var now=new Date();
//                 var t_div = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+' '+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
//                 $('.qq-chat-txt ul').append('<li class="my"><div class="qq-chat-my"><span>'+name+'</span><i>'+t_div+'</i></div><div class="qq-chat-ner">'+ners+'</div></li>');
//                 $(".qq-chat-txt").scrollTop($(".qq-chat-txt")[0].scrollHeight);
//                 $('.text').val('').trigger("focus")
//             }
//         })
// };
