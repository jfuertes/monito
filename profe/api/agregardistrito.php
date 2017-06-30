<?php
	  require_once('../api/config/mysql.php');

	  
	$db  = new dbConnect();
	$dbh = $db->conectardb();


  	session_start();
	
	if(isset($_SESSION['username'])){

		$rspta = json_decode(file_get_contents("php://input"));
		$id_distrito=$rspta->id_distrito;
		//var_dump($id_distrito);

		$q = 'SELECT distritos FROM mp_profesor
			
			where username=:username';

		$stmt = $dbh->prepare($q);
		$stmt->bindParam(':username',  $_SESSION['username'], PDO::PARAM_STR);
		$stmt->execute();
		$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
		$distritosActuales= $r[0]['distritos'];//se obitenen los originales
		$distritosseparados = explode(",", $distritosActuales);
		$agregar=true;
		
		foreach ($distritosseparados as &$valor) {//encaso ya exista y quiera agregar
			if($valor==$id_distrito){
				$agregar=false;
			}
		}

			if(	$agregar==true){
				array_push($distritosseparados, $id_distrito); //se aumenta el valor del distrito
					$nuevosdistritos = implode(',',$distritosseparados);//se junta denuevo
					//var_dump("nuevos:".$nuevosdistritos);
			//===========subir el nuevo valor con update
					 $q = "UPDATE  mp_profesor set distritos=:distritos where username=:username";
                        $stmt = $dbh->prepare($q);
                        $stmt->bindParam(':username', $_SESSION['username'], PDO::PARAM_INT);
                        $stmt->bindParam(':distritos', $nuevosdistritos, PDO::PARAM_INT);
                        $stmt->execute();
                        $r = $stmt;
                        var_dump($r);
				}
				
		
	}
	else{
		$valor= FALSE;
		echo json_encode($valor);
	}
?>