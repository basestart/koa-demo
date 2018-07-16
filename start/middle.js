const koa = require('koa');
const convert = require('koa-convert');
const loggerGenerator = require('./log.js');
const app = new koa();

app.use(convert(loggerGenerator()));

app.use(ctx => {
    ctx.body = 'hello world';
})

app.listen(3000, () => {
    console.log('listen on port 3000')
})