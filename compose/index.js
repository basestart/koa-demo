const compose = require('koa-compose')
const Koa = require('koa');
const app = new Koa();

const responseTime = async (ctx, next) => {
    const start = new Date()
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', ms + ' ms');
}

const logger = async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    if('text' !== process.env.NODE_ENV) {
        console.log("%s %s - %s", ctx.method, ctx.url, ms);
    }
}

const respond = async (ctx, next) => {
    await next();
    if('/' != ctx.url) return;
    ctx.body = 'hello world';
}

const all = compose([
    responseTime,
    logger,
    respond
])

app.use(all);

app.listen(3000, () => {
    console.log('listen 3000')
})