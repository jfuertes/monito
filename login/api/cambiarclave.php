<?php
  require_once('../../api/config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();

	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$link= $rspta->link;
	$password= md5($rspta->np->old);
	$npassword= md5($rspta->np->newpassword);

	$q = 'SELECT *
		from mp_login where link=:link and password=:password';


	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':link',  $link, PDO::PARAM_STR);
	$stmt->bindParam(':password',  $password, PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

	if (isset($r[0])) {
		$username=$r[0]['username'];
		$password=$npassword;
		 	$q = "UPDATE  mp_login set password=:password where username=:username ";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':password', $password, PDO::PARAM_INT);
                            $stmt->bindParam(':username', $username, PDO::PARAM_INT);
                            $stmt->execute();
            $rpta= array('success' => 'se cambio correctamente', 'type' => $r[0]['type']);

		//echo "oli";
		echo json_encode($rpta);
	}
	else{
			 $rpta= array('error' => 'incorrecto');
		//echo "oli";
		echo json_encode($rpta);
	}

	

?>