<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$username= $rspta->alu->username;
	$nombres= $rspta->alu->nombres;
	$ape_paterno= $rspta->alu->ape_paterno;
	$ape_materno= $rspta->alu->ape_materno;
	$distritos= $rspta->alu->distritos;
	$email= $rspta->alu->email;
	$celular= $rspta->alu->celular;

	$type="alumno";

 	$q = "UPDATE  mp_login set email=:email where username=:username and type=:type";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':email', $email, PDO::PARAM_INT);
                            $stmt->bindParam(':type', $type, PDO::PARAM_INT);
                            $stmt->bindParam(':username', $username, PDO::PARAM_INT);
                            $stmt->execute();
                      
			//$rpta=array('success' => 'El usuario fue creado exitosamente');
	
	 $q = "UPDATE  mp_alumno set nombres=:nombres, ape_paterno=:ape_paterno, ape_materno=:ape_materno, distritos=:distritos, email=:email, celular=:celular where username=:username";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':nombres', $nombres, PDO::PARAM_INT);
                            $stmt->bindParam(':ape_paterno', $ape_paterno, PDO::PARAM_INT);
                            $stmt->bindParam(':ape_materno', $ape_materno, PDO::PARAM_INT);
                            $stmt->bindParam(':distritos', $distritos, PDO::PARAM_INT);
                            $stmt->bindParam(':email', $email, PDO::PARAM_INT);
                            $stmt->bindParam(':username', $username, PDO::PARAM_INT);
                            $stmt->bindParam(':celular', $celular, PDO::PARAM_INT);
                            $stmt->execute();
                      
			$rpta=array('success' => 'El usuario fue editado exitosamente');
	
	echo json_encode($rpta);
?>