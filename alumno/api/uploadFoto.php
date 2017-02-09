<?php
session_start();
	$username= $_SESSION['username'];
$file = $_FILES["file"]["name"];

if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "../../IMG/alumnos/".$file))
{
	echo $file;
}

//obteniendo el nombre y extension

$trozos = explode("." , $file);
//$name=$trozos[0];
$cuantos = count($trozos);
$extension = $trozos[$cuantos - 1];
//if($cuantos>2){
//	for($i=1;$i<$cuantos-1;$i++){
//		$name = $name."." . $trozos[$i];
//	}
//}

//renombrando a nombre de username que es unico primero borrar el anterior
require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

	$q = "SELECT extension_img
		from mp_alumno where username=:username";
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':username', $username, PDO::PARAM_INT);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
if(isset($r[0]["extension_img"])){
	if (file_exists("../../IMG/alumnos/".$username.".".$r[0]["extension_img"])) {
    unlink("../../IMG/alumnos/".$username.".".$r[0]["extension_img"]);
}  

}
              

rename("../../IMG/alumnos/".$file, "../../IMG/alumnos/".$username.".".$extension);


$q = "UPDATE  mp_alumno set extension_img=:extension_img where username=:username";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':username', $username, PDO::PARAM_INT);
                            $stmt->bindParam(':extension_img', $extension, PDO::PARAM_INT);
                            
                            $stmt->execute();
           