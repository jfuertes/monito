<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
	$username= $rspta->us->username;
	$password= md5($rspta->us->password);
		
	    $csql="select * from mp_profesor where upper(username)=upper('$username')";
        $stmt = $dbh->prepare($csql);
        $stmt->execute();
        $rx = $stmt->fetchAll(PDO::FETCH_ASSOC);


          if(count($rx)==1){
          
                if($rx[0]['password']==$password){
                    session_start();
                    $_SESSION['username']=$rx[0]['username'];
                    $_SESSION['nombres']=$rx[0]['nombres'];
                    $_SESSION['ape_paterno']=$rx[0]['ape_paterno'];
                    $_SESSION['type']="profe";
 
                    //                  
                    $rpta=array('success' => 'correcto :)');
                    echo json_encode($rpta);
                }
                else{
                    echo "{\"acceso\":\"false\"}";
                }
        }else{
            echo "{\"acceso\":\"false\"}";
        }            
?>