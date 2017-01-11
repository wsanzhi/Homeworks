<?php 
	header('Content-type:application/json;charset=utf-8');
	$link=mysql_connect('localhost','root','');
	$con=mysql_select_db('baidunews');//选择数据库
 ?>