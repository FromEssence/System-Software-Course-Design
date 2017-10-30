///Routers
router.post('/address', function(req, res){
    console.log("post address receieved");
    var id = req.body.userid;
    var qur = ['AddressRegion', 'AddressRegion', 'Postcode', 'UserName', 'PhoneNumber', 'users', 'UserId', id];
    var sql = 'select ??, ??, ??, ??, ?? from ?? where ?? = ?';
    sql = mysql.format(sql, qur);
    pool.qurey(sql, function(error, result){
      if(error) throw error;
      var ans = JSON.parse(JSON.stringify(result));
      res.json(ans);
    })
});

router.post('/information', function(req, res){
   console.log("post information receieved"); 
});

router.post('/photonumber', function(req, res){
   console.log("post photonumber receieved"); 
});

router.post('/security', function(req, res){
   console.log("post security receieved"); 
});

router.post('/login', function(req, res){
   console.log("post login receieved"); 
});

router.post('/register', function(req, res){
   console.log("post register receieved"); 
});

/// ?
router.post('/message', function(req, res){
   console.log("post message receieved"); 
});
///
router.post('/prolist', function(req, res){
   console.log("post prolist receieved"); 
});

router.post('/trolley', function(req, res){
   console.log("post trolley receieved"); 
});

router.post('/order', function(req, res){
   console.log("post order receieved"); 
});

router.post('/search', function(req, res){
   console.log("post search receieved"); 
});

router.post('/single', function(req, res){
   console.log("post single receieved"); 
});
