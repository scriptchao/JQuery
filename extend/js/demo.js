//trim方法 //清除前后空格
console.log($.trim('  dsfsdf  sdfsdf '));
//$.map
console.log($.map([1,2,3,4,5,6],function(item,index){
    console.log(item,index);
    return item; /*map比forEach强大*/
}));
//$.isArray,判断是否是数组，返回值true是数组，false不是数组


//$.contains方法，判断参数二的dom节点是否是参数一dom节点下 不仅仅只是子节点
console.log($.contains(document.body,$('span')[0])); /*判断的是节点*/


//编写工具 extend

$.extend({
    max : function(a,b){
         return Math.max(a,b);
    },
    toStarryTel : function(tel){
        tel = tel.toString();
        var len = tel.length;
        return tel.substring(0,3) + (function(){
                var str = '';
                for(var i = 0;i< len-6;i++){
                    str  += '*';
                }
                return str;
            })() + tel.substring(len-3);

    },
    input : function(input){
        var len = input.length,
            arr = [];
        console.log(len);
        for(var i = 0;i < len;i++){
            input.charCodeAt(i) <=122 && arr.push(input.charAt(i));
            if(input.charCodeAt(i) > 122){
                $('input').css({
                    outline : '1px solid red'
                })
            }
            if(input.charCodeAt(i) <= 122){
                $('input').css({
                    outline : ''
                })
            }
        }
        console.log(arr);
        arr = arr.join('');
        $('input')[0].value = arr;

    },
    validateUser : function(str){
        var a = ['a','b','c'],
            i = 0,
            aLen = a.length;
        while(j < strLen){
            if(!~a.indexOf(str[j++])){
                return 0;
            }
        }
        return 1;
    }
});
console.log($.max(10,20));
console.log($.toStarryTel(12345678901));
$('input').keyup(function(){
    $.input($(this)[0].value);
});
/*$('input').keyup(function(){
    $(this).css('outline-color', $.validateUser(this.value) ? '': red)
});*/

// extend 拓展对象字面量 //两个参数组合 //一个参数 工具
console.log($.extend({},{}));
console.log(Object.assign({
    a:1
},{
    b:2
}));

//$.fn.extend方法  ==  People.prototype.age = 20;
$.fn.extend({ //把创建的方法添加在原型上
    a : 1
});
console.log($('body'));
//原型
function People(){

}
People.prototype.age = 20;
var man = new People();
var man2 = new People();
man.name = 'dsf';

console.log(man,man2);

$.fn.extend({
    text : function(){
        /*document.body.onclick = function(option){
            console.log()
        }*/
        console.log(this);
        return this.keyup(function(){
            console.log('按下');
        })
    }
});
$('input').text().css({
    width : '200px',
    height : '200px'
});
$('input').keyup(function(){
    console.log('你好');
    console.log(this);
    console.log($(this));
});
console.log($('input'));
