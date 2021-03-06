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
	$celular= $rspta->nu->celular;
	$password= md5($rspta->nu->password);
	$email= $rspta->nu->email;
	$id_uni= $rspta->nu->id_uni;
	$type= "profesor";
	
	$link_act= rand(10000, 99999);//genera link para recuperar contraseña
	
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

		$q = 'INSERT into mp_login (username, password, type, email, link_act)
				VALUES (:username, :password, :type, :email, :link_act)';
			
			$stmt = $dbh->prepare($q);
			$stmt->bindParam(':username',  $username, PDO::PARAM_STR);
			$stmt->bindParam(':password',  $password, PDO::PARAM_INT);
			$stmt->bindParam(':type',  $type, PDO::PARAM_INT);
			$stmt->bindParam(':email',  $email, PDO::PARAM_INT);
			$stmt->bindParam(':link_act',  $link_act, PDO::PARAM_INT);

			$stmt->execute();

			//================================================================
			//enviar correo con el link de activacion
						$url = 'http://www.solucionestraduccion.com/monito/email2/gmailact.php';
						$data = array('mensaje' => $link_act, 'reci' => $email);

						// use key 'http' even if you send the request to https://...
						$options = array(
						    'http' => array(
						        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
						        'method'  => 'POST',
						        'content' => http_build_query($data)
						    )
						);
						$context  = stream_context_create($options);
						$result = file_get_contents($url, false, $context);

			//================================================================


		$q = 'INSERT into mp_profesor (username, nombres, ape_paterno, ape_materno, email, id_uni, distritos, celular)
				VALUES (:username, :nombres, :ape_paterno, :ape_materno, :email, :id_uni, :distritos, :celular)';
			
			$stmt = $dbh->prepare($q);
			$stmt->bindParam(':username',  $username, PDO::PARAM_STR);
			$stmt->bindParam(':nombres',  $nombres, PDO::PARAM_STR);
			$stmt->bindParam(':ape_paterno',  $ape_paterno, PDO::PARAM_STR);
			$stmt->bindParam(':ape_materno',  $ape_materno, PDO::PARAM_STR);
			$stmt->bindParam(':email',  $email, PDO::PARAM_INT);
			$stmt->bindParam(':id_uni',  $id_uni, PDO::PARAM_INT);
			$stmt->bindParam(':distritos',  $distritos, PDO::PARAM_INT);
			$stmt->bindParam(':celular',  $celular, PDO::PARAM_INT);
		

			$stmt->execute();
			$rpta=array('success' => 'El usuario fue creado exitosamente');

			//$fichero = '/monito/IMG/mono.png';
			//$nuevo_fichero = 'monito/IMG/profe/SS.png';
			copy("../../IMG/mono.png", "../../IMG/profes/".$username.".png");
	}
	echo json_encode($rpta);
?>