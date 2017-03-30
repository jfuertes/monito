<?php
  require_once('../../api/config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();


	session_start();
	$username= "profesor1";

	$q = 'SELECT mp_curso.*, profecurso.* 
			FROM profecurso INNER JOIN mp_curso 
			ON mp_curso.id_curso = profecurso.id_curso
			where profecurso.username=:username';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $username, PDO::PARAM_INT);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

	//var_dump($r);
	echo json_encode($r);

?>