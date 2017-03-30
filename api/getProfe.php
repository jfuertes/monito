<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();
	$username = "jfuertes";

	$q = 'SELECT *
		from mp_profesor where username=:username';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $username, PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$r=$r[0];
	//var_dump($r);
	echo json_encode($r);

?>