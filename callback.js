/**
 * Created by Lyn on 2017/7/10.
 */
//函数
function learn(something){
    console.log(something);
}

//创建一个参数，用于回调函数
function we(callback,something){
    something += 'is cool';
    //在函数we中可以回调learn函数
    callback(something);
}

//调用
we(learn,'Nodejs');
//上面这种方式叫做具名函数。也可以将该方式改为匿名函数。

we(function(something){
    console.log(something);
},'Jade')