<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$username= $rspta->pro->username;
	$nombres= $rspta->pro->nombres;
	$ape_paterno= $rspta->pro->ape_paterno;
	$ape_materno= $rspta->pro->ape_materno;
	$link= $rspta->pro->link;
	$descripcion= $rspta->pro->descripcion;
	$distritos= $rspta->pro->distritos;
	$email= $rspta->pro->email;
	$online= $rspta->pro->online;

	
	 $q = "UPDATE  mp_profesor set nombres=:nombres, ape_paterno=:ape_paterno, ape_materno=:ape_materno, link=:link, descripcion=:descripcion, distritos=:distritos, email=:email, online=:online  where username=:username";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':nombres', $nombres, PDO::PARAM_INT);
                            $stmt->bindParam(':ape_paterno', $ape_paterno, PDO::PARAM_INT);
                            $stmt->bindParam(':ape_materno', $ape_materno, PDO::PARAM_INT);
                            $stmt->bindParam(':link', $link, PDO::PARAM_INT);
                            $stmt->bindParam(':descripcion', $descripcion, PDO::PARAM_INT);
                            $stmt->bindParam(':distritos', $distritos, PDO::PARAM_INT);
                            $stmt->bindParam(':email', $email, PDO::PARAM_INT);
                            $stmt->bindParam(':online', $online, PDO::PARAM_INT);
                            $stmt->bindParam(':username', $username, PDO::PARAM_INT);
                            $stmt->execute();
                      
			$rpta=array('success' => 'El usuario fue creado exitosamente');
	
	echo json_encode($rpta);
?>