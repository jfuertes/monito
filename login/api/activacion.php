<?php
  require_once('../../api/config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();

	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$link_act= $rspta->link;
	$password= md5($rspta->pass);
	
	$q = 'SELECT *
		from mp_login where link_act=:link_act and password=:password';


	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':link_act',  $link_act, PDO::PARAM_STR);
	$stmt->bindParam(':password',  $password, PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

	if (isset($r[0])) {
		$username=$r[0]['username'];
		$type=$r[0]['type'];
		$email=$r[0]['email'];
		$link_act=666;
		 	$q = "UPDATE  mp_login set link_act=:link_act where username=:username and type=:type";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':link_act', $link_act, PDO::PARAM_INT);
                            $stmt->bindParam(':username', $username, PDO::PARAM_INT);
                            $stmt->bindParam(':type', $type, PDO::PARAM_INT);
                            $stmt->execute();
            //$rpta= array('success' => 'se cambio correctamente', 'type' => $r[0]['type']);



			//================================================================
			//enviar correo con el link de activacion
						$url = 'http://www.solucionestraduccion.com/monito/email2/gmailcorrecto.php';
						$data = array('mensaje' => "activate", 'reci' => $email);

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
 $rpta= array('success' => 'se cambio correctamente', 'type' => $r[0]['type'], 'emailenviado' => $result);

		//echo "oli";
		echo json_encode($rpta);
	}
	else{
			 $rpta= array('error' => 'incorrecto');
		//echo "oli";
		echo json_encode($rpta);
	}

	

?>