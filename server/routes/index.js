const Router = require("koa-router");
const router = new Router();

const user = require("./user.js")
const home = require("./home.js")

module.exports = function (app) {
    app.use(router.routes()).use(router.allowedMethods());

    router.use('/api/elm/user', user.routes(), user.allowedMethods());
    router.use('/api/elm/home', home.routes(), user.allowedMethods());

}


