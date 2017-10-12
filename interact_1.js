var express = require('express');
var app = express();
//
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : 'test'
  });
///
app.listen(8888);
connection.connect();
app.get('/getData', function(rep, res, next){
    
    ///
    var _callback = rep.query._callback;
    /*var sql = {
        "code" : 0
    };
    */
    console.info(_callback);
    var sql = 'select * from websites';
    
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log('The solution is: ');
     // console.log(result);
      res.type('text/javascript');
      res.send(_callback + '(' + JSON.stringify(result) + ')');
      var json = JSON.stringify(result);
        console.log(json);
    });
    connection.end();
});

//connection.end();
