var express = require('express');
var router = express.Router();

console.log('app');
router.post("/img.json", function(req, res) {
    console.log('post');
    var data = {
        "aaa" : "aaaa",
        "test": "test",
        "age" : 12
    };
    res.json(data);
});

router.get("/img.json", function(req, res) {
    console.log('get');

    var data = [
        {
            "url": "https://www.baidu.com",
            "href": "http://img1.360buyimg.com/da/jfs/t3736/13/1421703178/120931/66fde279/582478c8N1973d87a.jpg",
            "alt": ""
        },

    ]; 
    res.end(data);
   //res.send(_callback + '(' + JSON.stringify(data) + ')');
});

module.exports = router;
