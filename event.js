/**
 * Created by Lyn on 2017/7/10.
 */
var EventEmitter = require('events').EventEmitter;

var eventStudy = new EventEmitter();
//对事件添加一个监听，与addEventListener的作用是一样的
eventStudy.on('OpenBook',function(who){
    console.log('Good Good Study');
});
//当然，事件监听的最大数量一般不能超过10个，但是也可以以某种方式人为设定
eventStudy.on('OpenBook',doSomething);
eventStudy.removeListener('OpenBook', doSomething);
//emit事件有一个返回值，如果该值为真，则表示该监听执行过
var hasDone = eventStudy.emit('OpenBook', 'Lyn');
//使用removeListener移除监听的时候，不能使用匿名函数，要使用具名函数。
function doSomething(){
    console.log('Day Day Up');
}

//查询一个事件的监听个数。比如下面可以打印事件OpenBook的监听个数
console.log(eventStudy.listeners('OpenBook').length);

//如果想要移除所有的参数,如果不传递事件名，则移除全部监听事件；如果有事件名，则只移除那一个
eventStudy.removeAllListeners();