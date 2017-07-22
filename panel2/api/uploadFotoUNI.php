<?php
session_start();
	
$file = $_FILES["file"]["name"];
var_dump($file);
if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "../../IMG/logos-uni/".$file))
{
	echo $file;
	//echo "========";

}

//obteniendo el n