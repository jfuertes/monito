<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$nombre_uni= $rspta->nuni->nombre_uni;
	$abreviatura_uni= $rspta->nuni->abreviatura_uni;
	session_start();
	$_SESSION['abreviatura_uni']=$abreviatura_uni;

	 $q = "INSERT INTO mp_uni  ( nombre_uni, abreviatura_uni) 	VALUES ( :nombre_uni, :abreviatura_uni)";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':nombre_uni', $nombre_uni, PDO::PARAM_INT);
                            $stmt->bindParam(':abreviatura_uni', $abreviatura_uni, PDO::PARAM_INT);
                            $stmt->execute();
                      
			//$rpta=array('success' => 'El usuario fue creado exitosamente');

                      
			$rpta=array('success' => 'La universidad fue agregada exitosamente');
	
	echo json_encode($rpta);
?>