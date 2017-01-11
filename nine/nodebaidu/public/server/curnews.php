<?php  
	header('Content-type:application/json;charset=utf-8');// 设置文件头文件，以json的形式传输
	$link=mysql_connect('localhost','root',''); //链接数据库
	$con=mysql_select_db('baidunews');//选择数据库
	mysql_query('set names utf8');
	if ($con) {
		$newsid=$_GET['newsid'];
		$sql="SELECT*FROM `news` WHERE`id`='{$newsid}'";
		$result=mysql_query($sql);//选择项
		//遍历
		
		$row=mysql_fetch_assoc($result);
		//print_r($row);

		$senddata=array();
		array_push($senddata, array(
					'id'=>$row['id'],
					'newstype'=>$row['newstype'],
					'newstitle'=>$row['newstitle'],
					'newsimg'=>$row['newsimg'],
					'newstime'=>$row['newstime'],
					'newssrc'=>$row['newssrc']
		));
		echo json_encode($senddata);
	};
	mysql_close();
 ?>