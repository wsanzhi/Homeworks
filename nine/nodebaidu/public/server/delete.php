<?php 
	header('Content-type:application/json;charset=utf-8');// 设置文件头文件，以json的形式传输
	$link=mysql_connect('localhost','root',''); //链接数据库
	$con=mysql_select_db('baidunews');//选择数据库
	mysql_query('set names utf8');
	if ($con) {
		$newsid =$_POST['newsid'];
		mysql_query("DELETE FROM `news` WHERE `news`.`id`={$newsid}");
		echo json_encode(array('删除状态'=>'成功'));
	}
	mysql_close();
 ?>