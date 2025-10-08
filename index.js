const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if (ctx.path === '/') {
        ctx.status = 200;
        ctx.body = '<h2>ANASAYFA</h2><p>Siteye Hosgeldiniz</p>';
    } else if (ctx.path === '/hakkimda') {
        ctx.status = 200;
        ctx.body = '<h2>HAKKIMIZDA</h2><p>Lorem ipsum dolor...</p>';
    } else if (ctx.path === '/iletisim') {
        ctx.status = 200;
        ctx.body = '<h2>ILETISIM</h2><p>Form Component</p>';
    } else {
        ctx.status = 404;
        ctx.body = '<h1>404 SAYFA BULUNAMADI</h1>';
    }
});

app.listen(3000);