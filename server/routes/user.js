const Router = require('koa-router');
const router = new Router();
const api = require("../api")

router
.post('/login', async (ctx, next)=> {
    let user = ctx.request.body;
    console.log(ctx.request.body)
    await api.userLogin(user).then(ret => {
        // console.log(ret)
        let info = ret[0];
        if(!info){
            ctx.body = {status: 2001,msg:'用户名不存在！'}
        }else if(info.passward != user.passward){
            ctx.body = {status:2002,msg:'密码错误！'}
        }else{
            ctx.body = {status:200,msg:'登录成功'}
        }
    })
})

module.exports = router;