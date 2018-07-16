const koa = require('koa');
const app = new koa();

function getSyncTime () {
    return new Promise((resolve, reject) => {
        let startTime = new Date().getTime();
        setTimeout(() => {
            let endTime = new Date().getTime();
            let data = endTime - startTime;
            resolve(data);
        }, 3000)
    })
};

async function getSyncData () {
    let time = await getSyncTime();
    let data = `endtime - starttime = ${time}`
    return data;
}

async function getData () {
    let data = await getSyncData();
    console.log(data);
}

app.use(async ctx => {
    await getData();
    let data = await getSyncData();
    ctx.body = data;
})

app.listen(3000, () => {
    console.log('listen on port 3000')
})