<?php
  require_once('../../api/config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();

	$q = 'SELECT nombre
		from mp_distrito';
	$stmt = $dbh->prepare($q);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_COLUMN);

	//var_dump($r);
	echo json_encode($r);

?>