var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* 主页获取新闻请求 */
router.get('/', function(req, res, next) {
    var newstype = req.query.newstype;
       //console.log(newstype);
    /*创建链接*/
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'baidunews'
     	//charset:'utf8'
    });

    /*链接*/
    connection.connect();

    /*向数据库发送查询语句*/
    
    connection.query('SELECT *FROM `news` WHERE `newstype` = ?',[newstype], function(err, rows, fields) {
        if (err) throw err;

       	res.json(rows);
       	//console.log(rows);
    });

    /*关闭链接*/
    connection.end();
});

module.exports = router;
