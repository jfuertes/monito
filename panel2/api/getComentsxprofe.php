<?php
 require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();
	
	
	$rspta = json_decode(file_get_contents("php://input"));
	$username_pro= $rspta->id_profe;

	$q = 'SELECT * from clase

			where username_pro=:username_pro and comentario IS NOT NULL;';
			
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username_pro', $username_pro, PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	//var_dump($r);
	//var_dump($_SESSION['username']);
	echo json_encode($r);

?>