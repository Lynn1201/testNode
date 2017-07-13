/**
 * Created by Lyn on 2017/7/13.
 */
var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content':'哎呀希望测试能成功',
    'hostUni':'4807227',
    'uin':'4807227',
    'format':'fs',
    'inCharset':'utf-8',
    'outCharset':'utf-8',
    'iNotice':'1',
    'ref':'qzone',
    'json':'1',
    'g_tk':'889204945',
    'qzreferrer':'https://qzs.qq.com/qzone/msgboard/msgbcanvas.html#page=1'
});

var options = {
    hostname : 'h5.qzone.qq.com',
    port:80,
    path:'/proxy/domain/m.qzone.qq.com/cgi-bin/new/add_msgb?qzonetoken=6b449d1fd0eb1f7b08921707c72331c9fbbf01f632fca6043e538ac4d37c7f6128de3b5848f3&g_tk=889204945',
    method:'POST',
    headers:{
        'accept-encoding':'gzip, deflate, br',
        'accept-language':'zh-CN,zh;q=0.8',
        'content-length':postData.length,
        'content-type':'application/x-www-form-urlencoded;charset=UTF-8',
        'cookie':'pgv_pvi=7983075328; RK=IT12RLqqaF; pac_uid=1_4807227; tvfe_boss_uuid=fc70f950641fde7b; ptui_loginuin=454611214; o_cookie=4807227; pgv_pvid=4669328570; ptisp=ctc; ptcz=da72ecb4a0e82c72dc5564dcf7057d455889eea43b4ecdb633e24e9ebc68dbd4; _qpsvr_localtk=0.9394423583714515; pgv_si=s6857459712; pt2gguin=o0004807227; uin=o0004807227; skey=@iwISrlG8y; p_uin=o0004807227; p_skey=CUTak0kOyDa2*8Bq3oZTHVa7ufHxGEg2Ops*ZmVkHqc_; pt4_token=R7oOkQYbiDPDZMqlhQxxCRQp98ecZKLK*UqF*6PnRKo_; fnc=2; pgv_info=ssid=s7612639561; __Q_w_s_hat_seed=1; Loading=Yes; qqmusic_uin=; qqmusic_key=; qqmusic_fromtag=; qzmusicplayer=qzone_player_4807227_1499947887770; QZ_FE_WEBP_SUPPORT=1; cpu_performance_v8=1',
        'origin':'https://user.qzone.qq.com',
        'referer':'https://user.qzone.qq.com/4807227',
        'user-agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
}

//声明一个request
var req = http.request(options,function(res){
    console.log('status ' + res.statusCode);
    console.log('headers ' + JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });

    res.on('end',function(){
        console.log('sucess!');
    })
});

req.on('error',function(e){
    console.log('error!'+e.message);
});

req.write(postData);
req.end();