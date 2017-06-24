<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();

	$rspta = json_decode(file_get_contents("php://input"));
	$username= $rspta->id_profe;
	
	session_start();
	
		$q = 'SELECT  profecurso.*, mp_curso.* 
		from profecurso inner join mp_curso
				on profecurso.id_curso = mp_curso.id_curso

			where username=:username ';
			



	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $username, PDO::PARAM_STR);

	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	//var_dump($r);
	echo json_encode($r);

?>