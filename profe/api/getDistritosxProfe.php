<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();

	session_start();
	$username=$_SESSION['username'];


	$q = "SELECT distritos
		from mp_profesor where username=:username ";
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $username, PDO::PARAM_INT);
	$stmt->execute();
	$r = $stmt->fetch(PDO::FETCH_ASSOC);

	//var_dump($r);
	echo json_encode($r);

?>