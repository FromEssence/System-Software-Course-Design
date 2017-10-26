var express = require('express');
var app = express();

  });
///
app.listen(8888);
connection.connect();

app.get('/getData', function(rep, res, next){
    ///
    var _callback = rep.query._callback;

    var col = 'country';
    var data = [col, col, 'USA'];
    var sql = 'select ?? from websites where ?? = ?';
    sql = mysql.format(sql, data);//查询数据库
    
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log('The solution is: ');
      console.log(result);
      res.type('text/javascript');
      res.send(_callback + '(' + JSON.stringify(result) + ')');
      var json = JSON.stringify(result);
      console.log(json);
    });

});
