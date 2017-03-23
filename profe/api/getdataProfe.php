<?php
 require_once('../../api/config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();
	
	
	session_start();

	$q = 'SELECT mp_uni.*, mp_profesor.* 
			FROM mp_profesor INNER JOIN mp_uni 
			ON mp_profesor.id_uni = mp_uni.id_uni
			where mp_profesor.username=:username';
			
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $_SESSION['username'], PDO::PARAM_STR);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	//var_dump($r);
	$r=$r[0];

	
	
$look_for = "watch?v=";
$change_to = "embed/";

$changed_text = str_replace($look_for, $change_to, $r["link"]);
if($r['extension_img']==null){
	$r['extension_img']="png";
}

$_SESSION['link2view']=$changed_text;
	
	echo json_encode($r);

?>