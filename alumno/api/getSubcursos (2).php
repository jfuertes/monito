<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();


	$rspta = json_decode(file_get_contents("php://input"));
	$seccion= $rspta->id;
	

	$q = 'SELECT *
		from mp_curso where seccion=:seccion';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':seccion', $seccion, PDO::PARAM_INT);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	

	//var_dump($r);
	echo json_encode($r);

?>