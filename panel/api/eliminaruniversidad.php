<?php
	  require_once('../../api/config/mysql.php');

	  
	$db  = new dbConnect();
	$dbh = $db->conectardb();


		$rspta = json_decode(file_get_contents("php://input"));
		$id_uni	=$rspta->id;

		$q = 'DELETE FROM mp_uni
			
			where id_uni=:id_uni';

		$stmt = $dbh->prepare($q);
		$stmt->bindParam(':id_uni',  $id_uni, PDO::PARAM_STR);
		$valor = $stmt->execute();
		echo json_encode($valor);

?>