<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();


	$rspta = json_decode(file_get_contents("php://input"));
	$id_curso= $rspta->id_curso;
	

	$q = 'SELECT *
		from profecurso where id_curso=:id_curso';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':id_curso', $id_curso, PDO::PARAM_INT);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

	//var_dump($r);
	echo json_encode($r);

?>