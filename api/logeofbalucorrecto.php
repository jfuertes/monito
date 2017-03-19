<?php
	//require_once('../../api/config/mysql.php');
	require_once('../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	
	$username = $_POST['username'];

		
                       $csql="select * from mp_alumno where upper(username)=upper('$username')";
                        $stmt = $dbh->prepare($csql);
                        $stmt->execute();
                        $rx1 = $stmt->fetchAll(PDO::FETCH_ASSOC);
                   // var_dump($rx1);
                    session_start();
                    $_SESSION['username']=$username;
                    $_SESSION['type']="alumno";
                    if(isset($rx1[0]['nombres']) && isset($rx1[0]['ape_paterno'])){
	                    $_SESSION['nombres']=$rx1[0]['nombres'];
	                    $_SESSION['ape_paterno']=$rx1[0]['ape_paterno'];
                    }
 
                    //                  
                    
                    echo "correcto";
                
                
              
?>