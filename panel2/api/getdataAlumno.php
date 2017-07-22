<?php
 require_once('../../api/config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();
	
	
	session_start();

	$q = 'SELECT * from mp_alumno

			where username=:username';
			
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $_SESSION['username'], PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	//var_dump($r);
	//var_dump($_SESSION['username']);
	$r=$r[0];
	
	
if($r['extension_img']==null){
	$r['extension_img']="png";
}
	
	echo json_encode($r);

?>