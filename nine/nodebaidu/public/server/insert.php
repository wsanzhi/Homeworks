<?php 
	header('Content-type:application/json;charset=utf-8');// 设置文件头文件，以json的形式传输
	$link=mysql_connect('localhost','root',''); //链接数据库
	$con=mysql_select_db('baidunews');//选择数据库
	mysql_query('set names utf8');
	if ($con) {
		//插入新闻
		$newstitle=$_POST['newstitle'];
		$newstype=$_POST['newstype'];
		$newsimg=$_POST['newsimg'];
		$newstime=$_POST['newstime'];
		$newssrc=$_POST['newssrc'];

		$sql=mysql_query("INSERT INTO `news`(`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')");
		
		echo json_encode(array('success'=>'ok'));
	}
 ?>