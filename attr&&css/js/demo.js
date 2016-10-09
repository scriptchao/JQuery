/*//获取属性,如果选择器匹配了多个标签

console.log($('a').attr('href'));

//设置属性

console.log($('a').attr('width','100'));

//prop和attr方式很像 ，专门用来处理disable ，checked，readonly，selected特性


//css方法

//设置
 $('li.a').css({
     backgroundColor : 'red',
     width : '100px',
     height : '100px'
 });

//获取
console.log($('li.a').css('height'));

//添加类，从而添加样式

$('li.b').addClass('white').addClass('big');

//删除类，从而删除样式

$('li.b').removeClass('white');

//切换类，从而切换样式

$('li.c').toggleClass('white');

//是否包含类

console.log($('li.d').hasClass('blue'));


//html方法 ，类似innerHTML
console.log($('body').html());  //获取

//text方法，类似innerHTML

console.log($('body').text());

console.log($('body'));

//append方法，类似appendChild ,向子集的最后添加文本或字符串形式的标签或DOM对象    beforeEnd
$('body').append('hh'); //类似HTML的加法！！！

//appendTo,append方法的被动形式

$('aaaa').appendTo('body');//这个是选择器

//prepend方法 向子集的最前面添加文本或标签 afterBegin
$('body').prepend('sdfdsfsd');

//prependTo方法，prepend方法的被动形式

//after == afterEnd  !!!!

//before == beforeBegin   !!!!

//会做隐私迭代
$('li').append($('a'));//如果$('a')只有一个 ，$('li')有多个，则$('a')会变成多个
$('li').append($('add'));//如果$('a')有多个 你懂的

//warp 包装

//删除标签 remove

$('li a').remove(); //选中干掉 把自己也干掉

//清空标签 empty

$('body').empty(); //干掉自己的所有子集


//clone方法，创建一份拷贝

$('body').clone();*/


//普通事件

$('li').click(function(){
    console.log(123)
});

//mouseenter mouseleave

//
$(window).scroll(function(){
    console.log('scroll')
}).resize(function(){
    console.log('resize')
}).click(function(){

}).click(function(){

});//事件的重载
 console.log( $('.div'));

/*
//事件重写
onclick = function(){
    console.log(123);
};
onclick = function(){
    console.log(321);
};
*/

//事件的重载
window.addEventListener('click',function(){
    console.log(123)
},0);//冒泡
window.addEventListener('click',function(){

    console.log(321)
},0);
 //on事件，事件也会重载 //bind
$('li').on('click',function(){
    console.log(123)
}).on('click',function(){
    console.log(332)
});

//后添加到页面里的元素是不会拥有前面添加过的对应事件的监听和绑定
$('body').append('<li>232</li>');

//
setTimeout(function(){
    $('<a>哈哈</a>').click(function(){
        console.log('哈哈哈')
    }).appendTo('body')
},1000);

//事件代理 只能被父级以及以上的所代理，不能被兄弟或子集代理
$('body').delegate('a','click',function(){
    //this指向触发事件的这个标签的dom对象
     console.log($(this).html()+10);
});

/*//触发一次,移除时只移除被触发过的这个标签上的事件，不会全部移除

$('a').one('click',function(e){
    /!*console.log(e);*!/
    e.preventDefault();
    /!*console.log(this);
    console.log('one');*!/

});
console.log($('a'));*/

//fadeOut渐渐消失，参数接收动画事件（）fast // slow
$('.div').fadeOut('slow');

//出现
$('.div').fadeIn('slow');

//slideUp向上收起
$('.div').slideUp();
//slideDown 向下收起
$('.div').slideDown();

//delay动画延迟 ，参数接收延迟时间，只能放在动画的链中
$('.div').fadeOut().delay().fadeIn();

//animate自定义动画  //线性的才能变 //第二个参数接收时间参数
$('.animate').css({
    background : 'red'
}).delay(1000).animate({
    width:'200px',
    height:'400px'
},2000).slideUp(4000);


//ajax
$.ajax({
    type:'post',
    url:'http://www.ikindness.cn/',
    data:{
        a:1
    },
    success:function(data){
        console.log(data);
    }
});


