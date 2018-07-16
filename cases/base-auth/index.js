const Koa = require('koa');
const auth = require('koa-basic-auth');

const app = new Koa();

app.use(async (ctx, next) => {
    try{
        await next();
    } catch (err) {
        if (err.status == 401) {
            ctx.status = 401;
            ctx.set('WWW-Authenticate', 'Basic');
            ctx.body = 'cant haz that';
        } else {
            throw err;
        }
    }
})

app.use(auth({name: 'tj', pass: 'tobi'}));

app.use(async ctx => {
    ctx.body = 'secret';
})

app.listen(3000, () => {
    console.log('listen on port 3000')
})