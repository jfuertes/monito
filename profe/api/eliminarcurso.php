<?php
	  require_once('config/mysql.php');

	  
	$db  = new dbConnect();
	$dbh = $db->conectardb();


  	session_start();
	
	if(isset($_SESSION['username'])){

		$rspta = json_decode(file_get_contents("php://input"));
		$id_curso=$rspta->id;

		$q = 'DELETE FROM profecurso
			
			where username=:username AND id_curso=:id_curso';

		$stmt = $dbh->prepare($q);
		$stmt->bindParam(':id_curso',  $id_curso, PDO::PARAM_STR);
		$stmt->bindParam(':username',  $_SESSION['username'], PDO::PARAM_STR);

		$valor = $stmt->execute();
		echo json_encode($valor);
	}
	else{
		$valor= FALSE;
		echo json_encode($valor);
	}
?>