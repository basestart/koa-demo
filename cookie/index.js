const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
    const n = ~~ctx.cookies.get('view') + 1;
    ctx.cookies.set('view', n);
    ctx.body = n + ' views';
    // const n = ~~ctx.cookies.get('view') + 1;
    // ctx.cookies.set('view', n);
    // ctx.body = n + ' views';
})

app.listen(4000)
