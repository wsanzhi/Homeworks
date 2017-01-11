
<?php 
	header('Content-type:application/json;charset=utf-8');// 设置文件头文件，以json的形式传输
	$link=mysql_connect('localhost','root',''); //链接数据库
	$con=mysql_select_db('baidunews');//选择数据库
	mysql_query('set names utf8');
	if ($con) {
		$newstype=$_GET['ntype'];
		if($newstype!=null){
			
			$sql=mysql_query("SELECT * FROM `news` WHERE `newstype`='{$newstype}'"); 
		
			$senddata=array();
			while($row=mysql_fetch_assoc($sql)){ 
			array_push($senddata, array(
					'id'=>$row['id'],
					'newstype'=>$row['newstype'],
					'newstitle'=>$row['newstitle'],
					'newsimg'=>$row['newsimg'],
					'newstime'=>$row['newstime'],
					'newssrc'=>$row['newssrc']
				));
			};
			echo json_encode($senddata);
		}else{
			$sql=mysql_query('SELECT * FROM news'); 
			$senddata=array();
			while($row=mysql_fetch_assoc($sql)){ 
				array_push($senddata, array(
					'id'=>$row['id'],
					'newstype'=>$row['newstype'],
					'newstitle'=>$row['newstitle'],
					'newsimg'=>$row['newsimg'],
					'newstime'=>$row['newstime'],
					'newssrc'=>$row['newssrc']

				));		
			};
		echo json_encode($senddata);	
		};
	}else{
		echo json_encode(array("success"=>"none"));
	};
	mysql_close($link);
?> 

