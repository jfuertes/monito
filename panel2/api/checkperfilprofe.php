<?php
session_start();
if(isset($_SESSION['linkprofe']) && $_SESSION['verlinkprofe']==1){
	$_SESSION['verlinkprofe']=0;
	echo $_SESSION['linkprofe'];
}
else{
	echo 0;
}

?>


