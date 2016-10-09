//submit方法
$('.form2 input[type=\'button\']:first').click(function(){
    console.log(111)
    $('.form2').submit(); //提交是对form表单进行提交 form里面有method 以及action才能提交
});
$('.form2 input[type=\'button\']:last').click(function(){
    console.log(522)
    $('.form2')[0].reset();//原生js支持  //重置也是对form进行重置
});

//ajax方法
$('.form3 input[type=\'button\']').click(function(){
    console.log(522)
    $.ajax({
        type : 'post', /*method*/
        url : 'http://www.ikindness.cn/api/test/post',  /*action*/
        data : {
            input : $('.input').val(),//post是由data的 /*name&&value*/
            text : $('.text').val()
        },
        success : function(data){ /*返回值*/
            console.log(data)
        }
    })

});
//serialize方法
$('.form4 input[type=\'button\']').click(function(){
    console.log(522)
    $.ajax({
        type : 'get',
        url : 'http://www.ikindness.cn/api/test/post?' +

        $('.form4').serialize(),//get是没有data的
        success : function(data){  //用于get方法较好
            console.log(data)
        }
    })
});

$('.submitAll').click(function(){
    $('.submit').click();
});
$('.resetAll').click(function () {
    $('form').each(function(index,item){
        console.log(item);
        item.reset();
    })
})
