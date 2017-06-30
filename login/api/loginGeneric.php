<?php
	//require_once('../../api/config/mysql.php');
	require_once('../../api/config/mysql.php');
	
	$db  = new dbConnect();
	$dbh = $db->conectardb();

 	$rspta = json_decode(file_get_contents("php://input"));
	//var_dump($rspta);
    $username= $rspta->us->username;
	$type= $rspta->type;
   // var_dump($type);
	$password= md5($rspta->us->password);
	//ver si es correo
    $porciones = explode("@", $username);//hay arroba por ahi
    //list($antesarro, $desparro) = explode("@", $username);
    if(isset($porciones[1])){
        list($antesdot, $despdot) = explode(".", $porciones[1]);
        if(isset($despdot)){//se buscara por correo segun el usuario con arroba presente :)
                $email= $username;  
                 $csql="select * from mp_login where upper(email)=upper(:email) and type=:type";
                    $stmt = $dbh->prepare($csql);
                    $stmt->bindParam(':email',  $email, PDO::PARAM_STR);
                    $stmt->bindParam(':type',  $type, PDO::PARAM_STR);
                    $stmt->execute();
                    $rx = $stmt->fetchAll(PDO::FETCH_ASSOC);
                  // var_dump($rx);

                      if(count($rx)==1){
                      
                            if($rx[0]['password']==$password){
                                if($rx[0]['link_act']==666){
                                    if($rx[0]['type']=="alumno"){

                                           $csql="select * from mp_alumno where upper(email)=upper('$email')";
                                            $stmt = $dbh->prepare($csql);
                                            $stmt->execute();
                                            $rx1 = $stmt->fetchAll(PDO::FETCH_ASSOC);
                                        
                                        session_start();
                                        $_SESSION['username']=$rx[0]['username'];
                                        $_SESSION['nombres']=$rx1[0]['nombres'];
                                        $_SESSION['ape_paterno']=$rx1[0]['ape_paterno'];
                                        $_SESSION['type']=$rx[0]['type'];
                                        $_SESSION['email']=$rx[0]['email'];
                     
                                        //                  
                                        $rpta=array('success' => 'correcto :)', 'activado' => true);
                                        echo json_encode($rpta);
                                    }
                                    else if ($rx[0]['type']=="profesor"){
                                              $csql="select * from mp_profesor where upper(email)=upper('$email')";
                                            $stmt = $dbh->prepare($csql);
                                            $stmt->execute();
                                            $rx1 = $stmt->fetchAll(PDO::FETCH_ASSOC);
                                        
                                        session_start();
                                        $_SESSION['username']=$rx[0]['username'];
                                        $_SESSION['nombres']=$rx1[0]['nombres'];
                                        $_SESSION['ape_paterno']=$rx1[0]['ape_paterno'];
                                        $_SESSION['type']=$rx[0]['type'];
                                         $_SESSION['email']=$rx[0]['email'];
                     
                                        //                  
                                        $rpta=array('success' => 'correcto :)', 'activado' => true);
                                        echo json_encode($rpta);
                                    }
                                }
                                else{
                                        //se le reenvia el correo del link de activacion
                                        $url = 'http://52.43.220.123/trabajos/monito/email2/gmailact.php';
                                        $data = array('mensaje' => $rx[0]['link_act'], 'reci' => $rx[0]['email']);

                                        // use key 'http' even if you send the request to https://...
                                        $options = array(
                                            'http' => array(
                                                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                                                'method'  => 'POST',
                                                'content' => http_build_query($data)
                                            )
                                        );
                                        $context  = stream_context_create($options);
                                        $result = file_get_contents($url, false, $context);
                                        //se le reenvia el correo del link de activacion
                                        $rpta=array('activado' => false, 'correo enviado' => $result);
                                        echo json_encode($rpta);
                                }
                                     
                            }
                            else{
                                echo "{\"acceso\":\"false\"}";

                            }
                    }



                else{
                        echo "{\"acceso\":\"false\"}";
                    }     




        }
        else{
         $rpta=array('errror' => 'mal escrito :/');
         echo json_encode($rpta);
        }
    }
    else{


	    $csql="select * from mp_login where upper(username)=upper(:username) and type=:type";
        $stmt = $dbh->prepare($csql);
        $stmt->bindParam(':username',  $username, PDO::PARAM_STR);
        $stmt->bindParam(':type',  $type, PDO::PARAM_STR);
        $stmt->execute();
        $rx = $stmt->fetchAll(PDO::FETCH_ASSOC);
          //var_dump($rx);


          if(count($rx)==1){
                if($rx[0]['password']==$password){
                    if($rx[0]['link_act']==666){
                         if($rx[0]['type']=="alumno"){

                               $csql="select * from mp_alumno where upper(username)=upper('$username')";
                                $stmt = $dbh->prepare($csql);
                                $stmt->execute();
                                $rx1 = $stmt->fetchAll(PDO::FETCH_ASSOC);
                            
                            session_start();
                            $_SESSION['username']=$rx[0]['username'];
                            $_SESSION['nombres']=$rx1[0]['nombres'];
                            $_SESSION['ape_paterno']=$rx1[0]['ape_paterno'];
                            $_SESSION['type']=$rx[0]['type'];;
         
                            //                  
                            $rpta=array('success' => 'correcto :)', 'activado' => true);
                            echo json_encode($rpta);
                        }
                        else if ($rx[0]['type']=="profesor"){
                                  $csql="select * from mp_profesor where upper(username)=upper('$username')";
                                $stmt = $dbh->prepare($csql);
                                $stmt->execute();
                                $rx1 = $stmt->fetchAll(PDO::FETCH_ASSOC);
                            
                            session_start();
                            $_SESSION['username']=$rx[0]['username'];
                            $_SESSION['nombres']=$rx1[0]['nombres'];
                            $_SESSION['ape_paterno']=$rx1[0]['ape_paterno'];
                            $_SESSION['type']=$rx[0]['type'];;
         
                            //                  
                            $rpta=array('success' => 'correcto :)', 'activado' => true);
                            echo json_encode($rpta);
                        }
                    }
                    else{
                        
                        //se le reenvia el correo del link de activacion
                                $url = 'http://52.43.220.123/trabajos/monito/email2/gmailact.php';
                                $data = array('mensaje' => $rx[0]['link_act'], 'reci' => $rx[0]['email']);

                                // use key 'http' even if you send the request to https://...
                                $options = array(
                                    'http' => array(
                                        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                                        'method'  => 'POST',
                                        'content' => http_build_query($data)
                                    )
                                );
                                $context  = stream_context_create($options);
                                $result = file_get_contents($url, false, $context);
                                //se le reenvia el correo del link de activacion
                                $rpta=array('activado' => false, 'correo enviado' => $result);
                                echo json_encode($rpta);
                    }
                        
                }
                else{
                    echo "{\"acceso\":\"false\"}";
                     echo "oli";
                }
        }



    else{
            echo "{\"acceso\":\"false\"}";
        }      
   }  
?>