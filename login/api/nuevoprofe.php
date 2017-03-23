<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$username= $rspta->nu->username;
	$nombres= $rspta->nu->nombres;
	$ape_paterno= $rspta->nu->ape_paterno;
	$ape_materno= $rspta->nu->ape_materno;
	$distritos= $rspta->nu->distritos;
	$password= md5($rspta->nu->password);
	$email= $rspta->nu->email;
	$id_uni= $rspta->nu->id_uni;
	$type= "profesor";
	
//var_dump($id_uni);
	//verificando si usuario ya existe
	$q = 'SELECT 1 as RESULTADO
			FROM mp_login
			where LOWER(username) = LOWER(:username)';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username',  $username, PDO::PARAM_STR);
	$stmt->execute();
	$r=$stmt->fetch(PDO::FETCH_ASSOC);

	//var_dump($r);
	if (isset($r['RESULTADO'])) {
		$rpta=array('Error' => 'Error: El código de usuario ingresado ya existe.');
	}
	else{

		//////////////////////////////////

		$q = 'INSERT into mp_login (username, password, type)
				VALUES (:username, :password, :type)';
			
			$stmt = $dbh->prepare($q);
			$stmt->bindParam(':username',  $username, PDO::PARAM_STR);
			$stmt->bindParam(':password',  $password, PDO::PARAM_INT);
			$stmt->bindParam(':type',  $type, PDO::PARAM_INT);

			$stmt->execute();

		$q = 'INSERT into mp_profesor (username, nombres, ape_paterno, ape_materno, email, id_uni, distritos)
				VALUES (:username, :nombres, :ape_paterno, :ape_materno, :email, :id_uni, :distritos)';
			
			$stmt = $dbh->prepare($q);
			$stmt->bindParam(':username',  $username, PDO::PARAM_STR);
			$stmt->bindParam(':nombres',  $nombres, PDO::PARAM_STR);
			$stmt->bindParam(':ape_paterno',  $ape_paterno, PDO::PARAM_STR);
			$stmt->bindParam(':ape_materno',  $ape_materno, PDO::PARAM_STR);
			$stmt->bindParam(':email',  $email, PDO::PARAM_INT);
			$stmt->bindParam(':id_uni',  $id_uni, PDO::PARAM_INT);
			$stmt->bindParam(':distritos',  $distritos, PDO::PARAM_INT);
		

			$stmt->execute();
			$rpta=array('success' => 'El usuario fue creado exitosamente');

			//$fichero = '/monito/IMG/mono.png';
			//$nuevo_fichero = 'monito/IMG/profe/SS.png';
			copy("../../IMG/mono.png", "../../IMG/profes/".$username.".png");
	}
	echo json_encode($rpta);
?>