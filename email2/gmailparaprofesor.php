<?php
/**
 * This example shows settings to use when sending via Google's Gmail servers.
 */
//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');
require 'PHPMailerAutoload.php';
$mensaje= $_POST["mensaje"];
$username=$mensaje[0]["username"];					
$nombres=$mensaje[0]["nombres"]." ".$mensaje[0]["ape_paterno"]." ".$mensaje[0]["ape_materno"];					
$email=$mensaje[0]["email"]	;				
$extension=$mensaje[0]["extension_img"];					
$celular=$mensaje[0]["celular"];					

$reci= $_POST["reci"];
//$reci= "jfuertesl2@gmail.com";
echo "=====================================";
var_dump($nombres) ;
echo "=====================================";

echo $reci;
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "contacto.miprofe.club@gmail.com";//----------correo de envio
//Password to use for SMTP authentication
$mail->Password = "luisluis1234";//------------- contraseña de correo de envio
//Set who the message is to be sent from
$mail->setFrom('soporte@miprofe.club', 'MiProfe.club');
//Set an alternative reply-to address

//Set who the message is to be sent to
$mail->addAddress($reci, 'Nombre Apellido');// direccion de envio  correo y nombre...
//Set the subject line
$mail->Subject = 'Bienvenido a MiProfe.club el club de los mejores profesores';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents(''.$mensaje.'.html'), dirname(__FILE__));// archivo que envio

$html = '<div>
    <center>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f8f8f8;font-family:&quot;Open Sans&quot;,&quot;Helvetica&quot;,&quot;Arial&quot;,sans-serif" height="100%">
            <tbody>
                <tr>
                    <td valign="top" style="padding-top:30px" align="center">
                        <div class="m_8364780055853349296preheaderContent" style="display:none;font-size:1px;color:#3e3e3e;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden">Most Popular &amp; Starting Soon!</div>
                        <table class="m_8364780055853349296email-container" cellpadding="0" cellspacing="0" width="600" style="border:1px #f2f2f2 solid">
                            <tbody>
                                <tr>
                                    <div class="mainBox" style="width: 100%;text-align: center;background: #f2edf5;">
                                        <div class="mailBody" style="border-radius: 5px;box-shadow: -1px 2px 8px 0px #333;-webkit-box-shadow: -1px 2px 8px 0px #333;-moz-box-shadow: -1px 2px 8px 0px #333;border-top: 5px solid #ee0000;font-family: &quot;Helvetica&quot;;margin: 10px auto;background: #fff;padding: 20px;width: 560px;">
                                            <img src="http://52.43.220.123/trabajos/monito/IMG/logo.png" height="150">
                                            <p style="text-align:left">Hola
                                                <br> Un alumno se quiere contactar contigo en la plataforma MiProfe.club </p>
                                            <tr style="background-color:#ffffff">
                                                <td valign="top" style="padding:0 15px 0 15px">
                                                    <a href="" target="_blank">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="float:left;border-width:1px;border-style:solid;border-color:#f2f2f2">
                                                            <tbody>
                                                                <tr>
                                                                    <td valign="left" style="width:100px">
                                                                        <div style="width:auto;padding:10px 20px"><img class="m_8364780055853349296fluid CToWUd" border="0" src="https://miprofe.club/IMG/alumnos/'.$username.'.'.$extension.'" width="80px" weight="80px" style="margin:auto">
                                                                        </div>
                                                                    </td>
                                                                    <td style="padding:15px 0px">
                                                                        <h1 style="color:#3e3e3e;font-weight:400;line-height:28px;font-size:16px;text-align:left">'.$nombres.'</h1>
                                                                        <div style="color:#b18767;font-weight:400;line-height:22px;font-size:14px;text-align:left">'.$email.'</div>
                                                                        <div style="color:#b18767;font-weight:400;line-height:22px;font-size:14px;text-align:left">'.$celular.'</div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </a>
                                                </td>
                                            </tr>
                                          

                                        </div>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
</div>';


$mail->Body = $html;

//Replace the plain text body with one created manually
$mail->AltBody = nl2br(strip_tags($html));
$mail->IsHTML(true);
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');
//send the message, check for errors 	
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
