<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();


	$username = $_POST['username'];

		$q = 'SELECT *
		from mp_alumno where username=:username';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $username, PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$r=$r[0];
	if(isset($r['username']))
	{
		echo "correcto";
	}

?>