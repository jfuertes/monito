<?php
  require_once('../../api/config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();

	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$link= $rspta->link;


	$q = 'SELECT *
		from mp_login where link=:link ';


	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':link',  $link, PDO::PARAM_STR);

	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

	//var_dump($r);



	
	echo json_encode($r[0]);

?>