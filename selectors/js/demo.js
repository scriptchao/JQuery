console.log($('html')); //相当于querySelectorAll

//选择方法

//eq方式，索引  返回的还是一个对象 //链式调用

console.log($('li').eq(0).eq(0));  //返回对象的第0位
console.log($('li:eq(0)')); //只有被$方法直接调用的才会返回selector


//find ,查找子集
console.log($('ul').find());/*不加东西全都选不到*/ /*够人性化*/

console.log($('ul').find('li'));

//children ,查找直接子集
console.log($('body').children());/*筛选条件*/ /*直接子集*/

console.log($('body').children('ul')); /*可以加条件*/

//siblings 方法 ，查找兄弟
console.log($('body').siblings());/*筛选条件*/
console.log($('ul li.a').siblings('.b'));

//prev方法 ，查找前一个兄弟标签

console.log($('.b').prev());//可以返回多个对象 //隐式迭代/*完美*/

//prevAll方法，查找前面的所有兄弟标签

console.log($('.b').prevAll());

//next方法 ，查找后一个兄弟标签 方式同prev

//nextAll

//parent方法 ，查找当前标签的父级标签
console.log($('.b').parent()                                                                                                                            );





















