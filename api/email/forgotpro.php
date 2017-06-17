<?php
  require_once('config/mysql.php');
$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);

	$email= $rspta->nu->email;
	$type= "profesor";
	

	//verificando si usuario ya existe
	$q = 'SELECT 1 as RESULTADO
			FROM mp_login
			where email= :email and  type=:type';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':type',  $type, PDO::PARAM_STR);
	$stmt->bindParam(':email',  $email, PDO::PARAM_STR);
	$stmt->execute();
	$r=$stmt->fetch(PDO::FETCH_ASSOC);

	//var_dump($r);
	if (isset($r['RESULTADO'])) {
		$link= rand(10000, 99999);//genera link para recuperar contraseña
		$mensaje="olvido"
		$reci={'link'=> $link};
		$url = 'http://52.43.220.123/trabajos/monito/email2/gmailforgot.php';
		$data = array('mensaje' => $mensaje, 'reci' => $reci);

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


		$rpta=array('success' => 'se encontro correo en la base de datos de profesores');
		echo $rpta;
	}

?>