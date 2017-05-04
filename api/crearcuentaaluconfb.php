<?php
	//require_once('../../api/config/mysql.php');
	require_once('config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$username = $_POST['username'];
 
	//var_dump($username);
	
		$q = 'INSERT into mp_alumno (username)
				VALUES (:username)';
			
			$stmt = $dbh->prepare($q);
			$stmt->bindParam(':username',  $username, PDO::PARAM_STR);


			$stmt->execute();
			$rpta=array('success' => 'correcto');
			copy("../IMG/mono.png", "../IMG/alumnos/".$username.".png");
			
			session_start();
                    $_SESSION['username']=$username;
                    $_SESSION['type']="alumno";
                    
	                    $_SESSION['nombres']="nombre";
	                    $_SESSION['ape_paterno']="apellido";
                    

	 echo "correcto";
?>