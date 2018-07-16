const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    try{
        await next();
    }catch(e) {
        ctx.status = err.status || 500;
        ctx.type = 'html';
        ctx.body = '<p>somthing exploded please contact me</p>'
        ctx.app.emit('error', err, ctx);
    }
})

app.use(async function () {
    throw new Error('boom');
})

app.on('error', function (err) {
    if(process.env.NODE_ENV != 'test') {
        console.log('sent errer %s to the cloud ', err.message);
    }
})


app.listen(3000, () => {
    console.log('listen on port 3000')
})