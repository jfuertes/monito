<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();


	$rspta = json_decode(file_get_contents("php://input"));
	$id_curso= $rspta->id_curso;
	$modalidad= $rspta->modalidad;
	$distritos= $rspta->distrito;
	//var_dump($distritos);

	$q = 'SELECT profecurso.*, mp_profesor.*
		from profecurso inner join mp_profesor
		on profecurso.username = mp_profesor.username
where id_curso=:id_curso and modalidad=:modalidad';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':id_curso', $id_curso, PDO::PARAM_INT);
	$stmt->bindParam(':modalidad', $modalidad, PDO::PARAM_INT);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

	//var_dump($r);
	//hay q obtner el cruze con los distritosahora
	$cont=0;
	$a=0;
	foreach ($r as &$cadaprofe) {//recorrer los elemnost
			$distritosActuales[$cont]= $cadaprofe['distritos'];
			$distritosseparados[$cont] = explode(",", $distritosActuales[$cont]);
				foreach ($distritosseparados[$cont] as &$cadadistrito) {//recorrer los elemnost
						//var_dump($cadadistrito);
					if($cadadistrito==$distritos){
						//var_dump("==============aja=============");
						
						$encontro[$a]=$cont;//elementos a quitar
						$a++;
					}

				}
			$cont++;
		}
		if (isset($encontro)) {
			# code...
				foreach ($encontro as $key => $value) {
				$new[$key]=$r[$value];//llenar nuevo arreglo sacando los que no estan
				}
			//se quita el valor del distriot
		//var_dump($distritosseparados);
	$rpta=array('success' => $new , 'todos'  => $r );
                    echo json_encode($rpta);
			

		}
		else{
				$rpta=array('success' => false , 'todos'  => $r );
                    echo json_encode($rpta);
			
		}
	
?>