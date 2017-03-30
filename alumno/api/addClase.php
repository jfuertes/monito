<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$username_pro= $rspta->id_profe;
	$id_curso= $rspta->id_curso;
	
	session_start();
	$username_alu= $_SESSION['username'];
	$status=0;


	
	 $q = "INSERT INTO clase  (id_curso, username_pro, username_alu, status)
				VALUES (:id_curso, :username_pro, :username_alu, :status)";
			
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':id_curso', $id_curso, PDO::PARAM_INT);
                            $stmt->bindParam(':username_pro', $username_pro, PDO::PARAM_INT);
                            $stmt->bindParam(':username_alu', $username_alu, PDO::PARAM_INT);
                            $stmt->bindParam(':status', $status, PDO::PARAM_INT);
                            $stmt->execute();

     $q = "SELECT * FROM clase where id_curso=:id_curso and username_pro=:username_pro and username_alu=:username_alu and status=:status";
                       $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':id_curso', $id_curso, PDO::PARAM_INT);
                            $stmt->bindParam(':username_pro', $username_pro, PDO::PARAM_INT);
                            $stmt->bindParam(':username_alu', $username_alu, PDO::PARAM_INT);
                            $stmt->bindParam(':status', $status, PDO::PARAM_INT);
                            $stmt->execute();
							$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
			
	echo json_encode($r[0]);
?>