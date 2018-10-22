let query = require("../db")

let status = {
    userId : 0,   //  当前用户id
    sellerId : 0  //  当前访问商家id
}

module.exports = {
    //  用户登入验证
    userLogin(user){
        return query("SELECT * FROM login WHERE name = '" + user.name + "'")
    },
    getNews(){
        return query("select * from news")
    },
    get_home_hots(){
        return query("select * from home_hots")
    },
    get_home_newcpy(){
        return query("select * from home_newCpy")
    }
}