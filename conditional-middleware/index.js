const logger = require('koa-logger');
const Koa = require('koa');
const app = new Koa();
function ignoreAssets (mw) {
    // 不太理解
    return async function (ctx, next) {
        if (/(\.js|\.css|\.ico)/.test(ctx.path)) {
            await next();
        } else {
            await mw.call(this, ctx, next);
        }
    }
}
app.use(ignoreAssets(logger()));

app.use(async ctx => {
    ctx.body = 'hello world';
})

app.listen(3000, () => {
    console.log('listen on port 3000') 
})