<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();

	session_start();
	
		$q = 'SELECT clase.*, mp_curso.* 
				from clase inner join mp_curso
				on clase.id_curso = mp_curso.id_curso

			where username_alu=:username';




	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $_SESSION['username'], PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	//var_dump($r);
	echo json_encode($r);

?>