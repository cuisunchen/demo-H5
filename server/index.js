const Koa = require('koa')
const Static = require('koa-static')
const BodyParser = require("koa-bodyparser")
const path = require('path')
const cors = require("koa2-cors")
const jwt = require("jsonwebtoken")
const jwtKoa = require("koa-jwt")
const websocket =  require('koa-websocket')
const route = require('koa-route')
const routes = require("./routes")
// const app = new Koa();
const app = websocket(new Koa());

const secret = 'jwt demo'

app.use(cors({
    origin(ctx){
        return "*"; // 允许来自所有域名请求
    },
    // origin: 'http://192.168.8.48:8080'
    optionsSuccessStatus: 200,
    exposeHeaders:['WWW-Authenticate', 'Server-Authorization'],
    maxAge:5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE','OPTIONS','fetch'],
    allowHeaders: ['Access-Control-Allow-Headers','Content-Type', 'Authorization', 'Accept'],
}))

app.use(BodyParser())
app.use(jwtKoa({secret}).unless({
    path:[/^\/api\/elm\/user/,/^\/api\/elm\/home/]   //  数组种的路径不需要通过jwt验证
}))
let ctxs = [];
app.ws.use(function(ctx, next) {
    console.log(1)
    ctxs.push(ctx)
    return next(ctx);
  });
   
  // Using routes
app.ws.use(route.all('/', function (ctx) {
    console.log(2)
    ctx.websocket.send('Hello World');
    ctx.websocket.on('message', function(message) {
            console.log(message);
    });
}));
routes(app)
// app.use(Static(path.join(__dirname,'../')))

app.use(Static(path.resolve(__dirname,'..')))

app.listen(9001,'192.168.8.48')
console.log('192.168.8.48:9001服务器启动')