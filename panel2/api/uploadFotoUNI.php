<?php
session_start();
	
$file = $_FILES["file"]["name"];


//print_r($nn);
//var_dump($file);
if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "../../IMG/logos-uni/".$file))
{
	echo $file;
	//echo "========";

}

$abreviatura_uni=$_SESSION['abreviatura_uni'];
$abreviatura_uni = strtoupper($abreviatura_uni);
//obteniendo el n
rename("../../IMG/logos-uni/".$file, "../../IMG/logos-uni/".$abreviatura_uni.".png");
