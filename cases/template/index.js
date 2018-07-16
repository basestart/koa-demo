// const path = require('path');
// const views = require('koa-view');
// const Koa = require('koa');

// const app = new Koa();

// app.use(views(path.join(__dirname, './views'), {extension: 'ejs'}));

// const user = {
//     name: {
//         first: 'tobi',
//         last: 'holo'
//     },
//     species: 'ferret',
//     age: 3
// }

// app.use(async function (ctx) {
//     await ctx.render('user', {user});
// })

// app.listen(3000, () => {
//     console.log('listen on port 3000')
// })

const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const app = module.exports = new Koa();

// setup views, appending .ejs
// when no extname is given to render()

app.use(views(path.join(__dirname, './views'), { extension: 'ejs' }));

// dummy data

const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

// render

app.use(async function(ctx) {
  await ctx.render('user', { user });
});

if (!module.parent) app.listen(3000);