// const Koa = require('koa');

// const app = new Koa();

// app.use(async ctx => {
//     const n = ~~ctx.cookies.get('view') + 1;
//     ctx.cookies.set('view', n);
//     ctx.body = n + ' views';
//     // const n = ~~ctx.cookies.get('view') + 1;
//     // ctx.cookies.set('view', n);
//     // ctx.body = n + ' views';
// })

// app.listen(4000)

var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
