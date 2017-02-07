<?php
 require_once('../../api/config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();
	
	
	session_start();

	$q = 'SELECT *
		from mp_profesor where username=:username';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $_SESSION['username'], PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$r=$r[0];
	//var_dump($r);
	echo json_encode($r);

?>