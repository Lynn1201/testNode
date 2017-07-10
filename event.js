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
eventStudy.on('OpenBook',function(who){
    console.log('Day Day Up');
});

eventStudy.emit('OpenBook', 'Lyn');
