const Koa = require('koa')
const Static = require('koa-static')
const BodyParser = require("koa-bodyparser")
const path = require('path')
const cors = require("koa2-cors")

const routes = require("./routes")
const app = new Koa();

app.use(cors({
    origin(ctx){
        return "*"; // 允许来自所有域名请求
    },
    // origin: 'http://192.168.8.48:8080'
    optionsSuccessStatus: 200,
    exposeHeaders:['WWW-Authenticate', 'Server-Authorization'],
    maxAge:5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE','OPTIONS'],
    allowHeaders: ['Access-Control-Allow-Headers','Content-Type', 'Authorization', 'Accept'],
}))

app.use(BodyParser())

routes(app)
// app.use(Static(path.join(__dirname,'../')))

app.use(Static(path.resolve(__dirname,'..')))

app.listen(9001,'192.168.8.48')
console.log('192.168.8.48:9001服务器启动')