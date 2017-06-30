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
		$aa=0;
		$aborrar;
		foreach ($distritosseparados as &$valor) {
			//encontrar el valor de distrito y eliminar
			if($valor==$id_distrito){
				$aborrar=$aa;
				//var_dump("aja");
			}
		    $aa++;
		}
		//var_dump("viejos:".$distritosActuales);
		//var_dump($aborrar);
		unset($distritosseparados[$aborrar]);//se quita el valor del distriot
		//var_dump($distritosseparados);
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
	else{
		$valor= FALSE;
		echo json_encode($valor);
	}
?>