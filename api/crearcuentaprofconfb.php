<?php
	//require_once('../../api/config/mysql.php');
	require_once('config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$username = $_POST['username'];
 	$id_uni = 3;
	//var_dump($username);
	
		$q = 'INSERT into mp_profesor (username, id_uni)
				VALUES (:username, :id_uni)';
			
			$stmt = $dbh->prepare($q);
			$stmt->bindParam(':username',  $username, PDO::PARAM_STR);
			$stmt->bindParam(':id_uni',  $id_uni, PDO::PARAM_STR);

			$stmt->execute();
			$rpta=array('success' => 'correcto');
			
			
			session_start();
                    $_SESSION['username']=$username;
                    $_SESSION['type']="profesor";
                    
	                    $_SESSION['nombres']="nombre";
	                    $_SESSION['ape_paterno']="apellido";
                    copy("../IMG/mono.png", "../IMG/profes/".$username.".png");

	 echo "correcto";
?>