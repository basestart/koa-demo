const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

app.use(koaBody({
    jsonLimit: '1kb'
}))

app.use(async ctx => {
    if(ctx.url == '/') {
        ctx.body = `<form action="http://localhost:3000/receive" method="POST">
        <input type="text" name='username'/>
        <input type="password" name='password'/>
        <input type="submit" value="go"/>
    </form>`
    } else if (ctx.url == '/form') {
        ctx.body = 'form';
    } else if(ctx.url == '/receive') {
        const body = ctx.request.body;
        console.log(JSON.stringify(body));
    } else {
        ctx.body = 'else'
    }
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})