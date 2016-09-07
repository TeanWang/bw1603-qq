/**
 * Created by Administrator on 2016/8/30.
 */
$(function(){
    
    //双击出现登录框
    $('.qq').dblclick(function(){

        $('.dl').css({display:'block'});
    })

    //点击x隐藏登录框
    $('.xx3').click(function(){
        $('.dl').css({display:'none'});
    })

    //点击x隐藏好友界面
    $('.jm-x1').click(function(){
        $('.jie').css({display:'none'});
    })

    //点击 - 隐藏好友界面
    $('.jm-x').click(function(){

        $('.jie').stop().slideToggle();


    })


//点击登录弹出好友界面
$('.btn1').click(function(){

    //获取文本框
    var val=$('input[type=text]').val();
    //获取密码框
    var pwd=$('input[type=password]').val();
    
    if(val.length==''){
        alert('用户名必须为1~15位')
    }else if(pwd.length ==""){
        alert('请输入密码')

    }else if(pwd.length<3||pwd.length>5){
        alert('密码必须为3~5位')
    }else {
        $('.jie').css({display:'block'});
        $('.dl').css({display:'none'});
        
    }


    //双击出现对话框
    $('.hou').dblclick(function(){

        $('.tan').css({display:'block'});
    })

    //点击x隐藏对话框
    $('.xx44').click(function(){
        $('.tan').css({display:'none'});

    })

    //点击 - 隐藏对话框
    $('.xx22').click(function(){
        $('.tan').stop().slideToggle();
    })
})























})