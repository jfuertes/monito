<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//	var_dump($rspta);
	$modalidad= $rspta->id->modalidad;

	$id_curso= $rspta->id->id_curso;

	session_start();
	$username=$_SESSION['username'];

	$q = 'SELECT * from profecurso 
		where id_curso=:id_curso and username=:username and modalidad=:modalidad';
			$stmt = $dbh->prepare($q);
			$stmt->bindParam(':id_curso', $id_curso, PDO::PARAM_INT);
		    $stmt->bindParam(':username', $username, PDO::PARAM_INT);
		    $stmt->bindParam(':modalidad', $modalidad, PDO::PARAM_INT);           
			$stmt->execute();
			$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
			//var_dump($r);
		if(isset($r[0])==false){
				 $q = 'INSERT into profecurso (id_curso, username, modalidad)
				VALUES (:id_curso, :username, :modalidad)';
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':id_curso', $id_curso, PDO::PARAM_INT);
                            $stmt->bindParam(':username', $username, PDO::PARAM_INT);
                            $stmt->bindParam(':modalidad', $modalidad, PDO::PARAM_INT);
                           
                            $stmt->execute();
                      
			$rpta=array('success' => 'El curso fue agregado exitosamente');
	

		}	
		else{

			$rpta=array('success' => 'El curso ya estava agregado');
	
		}
	echo json_encode($rpta);
?>