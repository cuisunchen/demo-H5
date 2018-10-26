const Router = require('koa-router');
const router = new Router();
const api = require("../api")
const jwt = require("jsonwebtoken")
const secret = 'jwt demo'

router
.post('/login', async (ctx, next)=> {
    let user = ctx.request.body;
    await api.userLogin(user).then(ret => {        
        let info = ret[0];
        if(!info){
            // throw new Error('用户名不存在！')
            ctx.body = {status: 2001,msg:'用户名不存在！'}
        }else if(info.passward != user.passward){
            ctx.body = {status:2002,msg:'密码错误！'}
        }else{
            let user_token ={
                name:user.name
            }
            const token = jwt.sign(user_token,secret,{expiresIn:'1h'})
            ctx.body = {status:200,msg:'登录成功',token}
        }
    })
})

module.exports = router;