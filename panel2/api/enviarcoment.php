<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$comentario= $rspta->co->comentario;
	$puntuacion= $rspta->co->puntuacion;
	$id= $rspta->id_clase;


 	$q = "UPDATE  clase set puntuacion=:puntuacion, comentario=:comentario where id=:id ";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':puntuacion', $puntuacion, PDO::PARAM_INT);
                            $stmt->bindParam(':comentario', $comentario, PDO::PARAM_INT);
                            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                            $stmt->execute();
                      
			//$rpta=array('success' => 'El usuario fue creado exitosamente');
	
	  	$q = "SELECT username_pro from clase where id=:id ";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                            $stmt->execute();
                      		$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
				$username_pro=$r[0]['username_pro'];

		$q = "SELECT puntuacion from clase where username_pro=:username_pro ";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':username_pro', $username_pro, PDO::PARAM_INT);
                            $stmt->execute();
                      		$r = $stmt->fetchAll(PDO::FETCH_COLUMN);
				//var_dump($r);
				//sacando promedio
				$puntuacion = intval(array_sum($r)/count($r));

		 $q = "UPDATE  mp_profesor set puntuacion=:puntuacion where username=:username";
                        $stmt = $dbh->prepare($q);
                        $stmt->bindParam(':username', $username_pro, PDO::PARAM_INT);
                        $stmt->bindParam(':puntuacion', $puntuacion, PDO::PARAM_INT);
                        $stmt->execute();
                       
                
			$rpta=array('success' => 'El usuario fue editado exitosamente');
	
	echo json_encode($rpta);
?>