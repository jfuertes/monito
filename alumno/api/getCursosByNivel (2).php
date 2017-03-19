<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();


	$rspta = json_decode(file_get_contents("php://input"));
	$nivel= $rspta->nivel;

	$q = "SELECT *
		from mp_curso where nivel=:nivel and (seccion='0' OR seccion IS NULL)";
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':nivel', $nivel, PDO::PARAM_INT);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

	//var_dump($r);
	echo json_encode($r);

?>