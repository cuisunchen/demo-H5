const Router = require('koa-router');
const router = new Router();
const api = require('../api')

const homeData = {
    news:{},
    hot:{},
    newCpy:{}
}
router.
post('/news', async (ctx,next) => {

    await api.getNews().then( (ret) => {
        homeData.news = ret;
    })

    await api.get_home_hots().then( ret => {
        homeData.hot = ret;
    })

    await api.get_home_newcpy().then( ret => {
        homeData.newCpy = ret;
    })
    console.log(homeData)
    ctx.body = { status:200, data:homeData}
})

module.exports = router;