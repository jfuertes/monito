<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();

	$rspta = json_decode(file_get_contents("php://input"));
	$id_clase= $rspta->id_clase;
	
	session_start();
	
		$q = 'SELECT * from clase
			where username_alu=:username_alu and id=:id';
			
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username_alu', $_SESSION['username'], PDO::PARAM_STR);
	$stmt->bindParam(':id', $id_clase, PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	//var_dump($r);
	echo json_encode($r);

?>