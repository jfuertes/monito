<?php
	$rspta = json_decode(file_get_contents("php://input"));
	$id_profe= $rspta->id;
	
	session_start();
	 $_SESSION['linkprofe']=$id_profe;
	 $_SESSION['verlinkprofe']=1;
	 echo $_SESSION['linkprofe'];
?>