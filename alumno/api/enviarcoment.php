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
	
	 
                      
			$rpta=array('success' => 'El usuario fue editado exitosamente');
	
	echo json_encode($rpta);
?>