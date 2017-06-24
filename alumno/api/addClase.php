<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$username_pro= $rspta->id_profe;
	$id_curso= $rspta->id_curso;
	
	session_start();
	$username_alu= $_SESSION['username'];
	
	$status=0;
$link="clasealumno";
$link2="claseprofe";

	
	 $q = "INSERT INTO clase  (id_curso, username_pro, username_alu, status)
				VALUES (:id_curso, :username_pro, :username_alu, :status)";
			
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':id_curso', $id_curso, PDO::PARAM_INT);
                            $stmt->bindParam(':username_pro', $username_pro, PDO::PARAM_INT);
                            $stmt->bindParam(':username_alu', $username_alu, PDO::PARAM_INT);
                            $stmt->bindParam(':status', $status, PDO::PARAM_INT);
                            $stmt->execute();

     $q = "SELECT * FROM clase where id_curso=:id_curso and username_pro=:username_pro and username_alu=:username_alu and status=:status";
                       $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':id_curso', $id_curso, PDO::PARAM_INT);
                            $stmt->bindParam(':username_pro', $username_pro, PDO::PARAM_INT);
                            $stmt->bindParam(':username_alu', $username_alu, PDO::PARAM_INT);
                            $stmt->bindParam(':status', $status, PDO::PARAM_INT);
                            $stmt->execute();
							$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
			

     $q = "SELECT * FROM mp_profesor where username=:username_pro ";
           $stmt = $dbh->prepare($q);
                $stmt->bindParam(':username_pro', $username_pro, PDO::PARAM_INT);
                $stmt->execute();
				$rs = $stmt->fetchAll(PDO::FETCH_ASSOC);
     $q = "SELECT * FROM mp_alumno where username=:username_alu ";
           $stmt = $dbh->prepare($q);
                $stmt->bindParam(':username_alu', $username_alu, PDO::PARAM_INT);
                $stmt->execute();
				$rss = $stmt->fetchAll(PDO::FETCH_ASSOC);

$email= $rss[0]['email'];
//var_dump($email);
		$url = 'http://52.43.220.123/trabajos/monito/email2/gmailcorrecto.php';
		$data = array('mensaje' => $link, 'reci' => $email);

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
		//var_dump($result);

$email2=$rs[0]['email'];


		$url = 'http://52.43.220.123/trabajos/monito/email2/gmailcorrecto.php';
		$data = array('mensaje' => $link2, 'reci' => $email2);

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
		//var_dump($result);
	echo json_encode($r[0]); 
?>