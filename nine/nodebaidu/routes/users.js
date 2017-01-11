var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baidunews'
});

/*链接*/

/* 获取新闻 */
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news`', function(err, rows) {
        res.json(rows);
    });
});

/*更新*/

router.post('/update', function(req, res) {
    var newsid = req.body.id,
        newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;

    connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
        //res.json(rows);
        if (err) throw err;
        console.log(rows.changedRows);
        res.json({'success':'ok'});

    });
});

//模态框
router.get('/curnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE id=?',[newsid], function(err, rows) {
        if (err) throw err;
        res.json(rows);
    });
});

//删除

router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `news` WHERE id=?',[newsid], function(err, result) {

        if (err) throw err;
        console.log(result.affectedRows);
        res.json({'success':'ok'});
    });
});

//添加

router.post('/insert', function(req, res) { //所有的post请求都要使用body

    var newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc,
        newsimg = req.body.newsimg;


    connection.query('INSERT INTO `news`(`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES(?,?,?,?,?)', [newstitle,newstype,newsimg,newstime,newssrc], function(err, result) {
        if (err) throw err;
        
        console.log(result.insertId);

       	res.json({'success':'ok'})
    });
});



module.exports = router;
