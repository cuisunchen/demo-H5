const mysql = require('mysql');

//  创建连接池
 let pool = mysql.createPool({
     host:"localhost",
     user:'root',
     password:'',
     database:'elm'
 })

 let query = function( sql, ...values ) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, data) => {
            if ( err ) {
              reject( err )
            } else {
              resolve( data )
            }
            connection.release()
          })
        }
      })
    });
  }
  
 module.exports = query;