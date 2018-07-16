const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.status = 404;
    console.log(ctx.accepts('html', 'json'));
    switch(ctx.accepts('html', 'json')) {
        case 'html': 
            ctx.type = 'html';
                ctx.body = '<p>Page Not Found</p>';
                break;
        case 'json':
            ctx.body = {
                message: 'Page Not Fount'
            };
            break;
        default:
            ctx.type = 'text';
            ctx.body = 'Page Not Found';
    }
})

if(!module.parent) app.listen(4000)