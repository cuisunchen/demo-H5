const Router = require('koa-router');
const router = new Router();
const api = require('../api')

const homeData = {
    news:{},
    hot:{},
    newCpy:{}
}
router
.post('/news', async (ctx,next) => {
    
    await api.getNews().then( (ret) => {
        homeData.news = ret;
    })

    await api.get_home_hots().then( ret => {
        homeData.hot = ret;
    })

    await api.get_home_newcpy().then( ret => {
        homeData.newCpy = ret;
    })
    ctx.body = { status:200, data:homeData}
})

.post('/detail', async (ctx,next) => {
    const token = ctx.header.authorization;
    if(!token){
        ctx.body = { status: 401, msg: '未登录' }
        throw new Error('未登录')
    }
 })

module.exports = router;