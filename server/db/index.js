const mysql = require('mysql');

//  创建连接池
 let pool = mysql.createPool({
     host:"192.168.8.48",
     user:'root',
     password:'111111',
     database:'elm'
 })
 