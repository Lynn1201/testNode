/**
 * Created by Lyn on 2017/7/10.
 */
var http = require('http');

function filterChapters(html){
}

//拿到网页的源码
var url = 'http://www.imooc.com/learn/348';
http.get(url,function(res){
    var html = '';
    //当response有data事件触发时，就将data累加进来
    res.on('data',function(data){
        html += data;
    });

    res.on('end',function(){
        //解析html代码
        filterChapters(html);
    }).on('error',function(){
        console.log("超时");
    });
});