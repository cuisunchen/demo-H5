const mysql = require('mysql');

//  创建连接池
 let pool = mysql.createPool({
     host:"192.168.8.48",
     user:'root',
     password:'111111',
     database:'elm'
 })

 let query = function(sql, ...params){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){
                resolve(err)
            }else{
                connection.query(sql,values,(err,data)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(data)
                    }
                    connection.release();
                })
            }
        })
    })
 }
 module.exports = query;