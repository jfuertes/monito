<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
    session_start();
	$username= $_SESSION['username'];
    $password= md5($rspta->us->password);
	$newpassword= md5($rspta->us->newpassword);
		
        $q = "SELECT *
        from mp_login where username=:username and password=:password";
    $stmt = $dbh->prepare($q);
    $stmt->bindParam(':username', $username, PDO::PARAM_INT);
    $stmt->bindParam(':password', $password, PDO::PARAM_INT);
    $stmt->execute();
    $r = $stmt->fetchAll(PDO::FETCH_ASSOC);

	    

          if(count($r)==1){
          
               
                    
                              $q = "UPDATE  mp_login set password=:newpassword where username=:username";
                            $stmt = $dbh->prepare($q);
                            $stmt->bindParam(':username', $username, PDO::PARAM_INT);
                            $stmt->bindParam(':newpassword', $newpassword, PDO::PARAM_INT);
                            $stmt->execute();
                            $r = $stmt;
                            //var_dump($r);
                    $rpta=array('success' => 'correcto :)');
                    echo json_encode($rpta);
                
        }else{
            echo "{\"acceso\":\"false\"}";
        }            
?>