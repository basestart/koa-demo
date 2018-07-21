const koa = require('koa');
const app = new koa();
const mysql = require('mysql');
const cors = require('koa2-cors');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'koa'
});

function getQueryData () {
    return new Promise ((resolve, reject) => {
        connection.query('select * from demo', (err, results, fields) => {
            if(err) {
                reject(err);
            }
            resolve(results);
        })
    })
}

function ins () {
    return new Promise ((resolve, reject) => {
        connection.query('insert into demo (name, age) values (2, 4);', (err, results, fields) => {
            if(err) {
                reject(err);
            }
            resolve(results);
        })
    })
}

// 具体参数我们在后面进行解释
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://localhost:3001'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(async ctx => {
    let data = await getQueryData ();
    // let data = await ins ();
    console.log(data);
    ctx.body = data;
})

app.listen(3000, () => {
    console.log('listen on port 3000')
})