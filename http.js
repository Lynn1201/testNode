/**
 * Created by Lyn on 2017/7/10.
 */
var http = require('http');

/*
//创建服务器，第一个参数是一个回调方法，在这个回调方法里对请求进行处理
//首先返回一个响应头。第一个参数为状态码，第二个参数为返回的文本类型
http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('hello world!');
    res.end();
    }).listen(2015);
*/

//拿到网页的源码
var url = 'http://www.imooc.com/learn/348';
http.get(url,function(res){
    var html = '';
    //当response有data事件触发时，就将data累加进来
    res.on('data',function(data){
        html += data;
    });

    res.on('end',function(){
        console.log(html);
    }).on('error',function(){
        console.log("超时");
    });
});