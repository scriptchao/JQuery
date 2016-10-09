$.fn.extend({
    banner2:function(option){
        var len = option.length,
            _this = this,
            index = 0;
        $.map(option,function(item){
            $('<a></a>').appendTo(_this).css({
                'background-image' : 'url('+ item + ')'
            })
        });
        $Imgs = this.find('a');
        $Imgs.eq(0).addClass('current');
        setInterval(function(){
            console.log(index);
            console.log(len);
            index = (index == len ? 0 : ++index);
            $Imgs.eq(index).addClass('current').siblings('.current').removeClass('current');
        },2000)
    }
});
/*//数据和标签已由服务端模板渲染好
$(".banner1").banner1();*/
//数据由前端渲染至页面（前后端分离）
$('.banner2').banner2(['./img/1.jpg','./img/2.jpg','./img/3.jpg']);

/*
$.fn.extend({
    code : function(sum){
        var  _this = this;
        this[0].value = sum;
        var timer = setInterval(function(){
            /!*sum == 0 ? _this[0].value = '请再次发送':sum--;*!/
            if(sum == 0){
                ss = 1;
                _this[0].value = '请再次发送';
                clearInterval(timer);
                return;
            }
            sum--;
            _this[0].value = sum;
        },1000)
    }
});
var ss = 1;
$('input').click(function(){
    if(ss){
        console.log(111);
        ss = 0;
        $(this).code(3)
    }
});
*/


