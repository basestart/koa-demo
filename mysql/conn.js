const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'koa'
});

connection.query('select * from demo', (err, results, fields) => {
    if(err) {
        throw err;
    }
    connection.release();
    console.log(results);
})