const koa = require('koa');
const app = new koa();
const axios = require('axios');

app.use(async ctx => {
    new Promise((resolve, reject) => {
        let res = await axios.get('http://hq.sinajs.cn/list=sz002218');
    })
    let res = await axios.get('http://hq.sinajs.cn/list=sz002218');
    // console.log(res);
    ctx.body = 'res';
})

app.listen(5000, () => {
    console.log('listening on port 3000')
})