<?php
    session_start();
    if($_SESSION['type']!="profesor"){    
     header('location:../');
        //echo "entro";
        //echo "acceso correcto".$_SESSION['login'];
    }
 ?>

<html ng-app="demoApp" class="mobile" dir="ltr" style="height: 100%" lang="es">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="NOODP">
    <title>MiProfe.club</title>
    <link rel="shortcut icon" href="IMG/logo.png">
    <link rel="stylesheet" href="assets/css/miprofe.css">
    <link rel="stylesheet" href="assets/css/miprofe2.css">
    <link rel="stylesheet" href="assets/css/miprofe3.css">
    <link rel="stylesheet" href="assets/css/miprofe4.css">
    <link href="/images/favicon.ico?v=3" rel="shortcut icon" type="image/x-icon">
    <style type="text/css"></style>
    <style  href="assets/css/miprofe.css" type="text/css"></style>
    </head>
    <body class="global-es logged-out splash-2014 compact-enabled" style="overflow: auto;">
    <header ng-controller="mainCtrl" class="topbar topbar-blue-dark">
        <div class="container">
        <a href="/" class="topbar-brand navigate-home track-click white smaller-logo"> <img src="IMG/logo.png" WIDTH=100 HEIGHT=80></a>
        <nav class="topbar-nav">
            <ul class="topbar-nav-main" style="font-size: 15px">
                <li id="home-nav" class="active">
                    <a href="/">Inicio</a></li>
                <li id="vocab-nav"><a href="/words">Palabras</a></li><li id="stream-nav"><a href="/activity_stream">Actividad</a></li><li id="questions-nav"><a href="/discussion">Foro</a></li></ul></nav>
        <div class="topbar-right">
            <div class="topbar-username dropdown click-trigger" style="padding-bottom: 15px;">
               <div id="showloginpop" class="topbar-buttons" style="margin-top: 1px;" >
                    <span class="sign-in relative"></span>
                        <a href="#/" class="avatar avatar-small " title="monito">
                        <img src="//s3.amazonaws.com/duolingo-images/avatar/default_2/large">
                        <span class="ring"></span>
                        </a>
                        <span class="name"><?php echo $_SESSION['nombres']." ".$_SESSION['ape_paterno'] ?></span>
                        <span class="icon icon-arrow-down-white"></span>
                        </div>
                        <div id="loginpop">
                         <ul class="dropdown-menu arrow-top" role="menu" aria-labelledby="dLabel" style="display: block;">
                            <li>
                                <a href="#/">Perfil Profesor</a>
                            </li>
                            <li>
                                <a href="#/perfil">Configuracion</a>
                            </li>
                            <li>
                                <a ng-click="logout()">Cerrar sesión</a>
                            </li>
                        </ul>
                            </div>
                             
                    
                </div>
            </div>
        </div>
    </header>

    <div id="main">
        <div ng-view>
        </div>
    </div>



    <section dir="ltr" class="footer dark-theme">
        <div class="section-inner">
            <h2>Empieza a aprender con los profesores</h2>
                <footer id="footer-sitemap">
                <link href="assets/css/miprofe.css" type="text/css"> </link>

                <div class="footer-container">
                    <div class="sitemap">
                        <div class="footer-column">
                            <h3>Sobre nosotros</h3>
                            <ul>
                                <li>
                                   <a href="nosotros/#equipo"">Equipo</a>
                                </li>
                                <li>
                                    <a href="nosotros/#contactanos">Contáctanos</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Productos</h3>
                            <ul>
                                <li>
                                    <a href="nosotros/#miprofe">Miprofe</a>
                                </li>
                                <li>
                                    <a href="nosotros/#miprofe_escuelas">Miprofe  para Escuelas</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Ayuda y Soporte</h3>
                            <ul>
                                <li>
                                    <a href="nosotros/#soluciones">Solución de problemas</a>
                                </li>
                                <li>
                                    <a href="nosotros/#ayuda_escuelas">Ayuda  Escuelas</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Social</h3>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/">Twitter</a>
                                </li>
                                <li><a href="https://www.youtube.com/">YouTube</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </section>
    <script src="assets/plugins/jquery-1.10.2.js"></script>
    <script src="assets/plugins/bootstrap.js"></script>
    <script src="assets/plugins/angular.min.js" type="text/javascript"></script>
    <script src="assets/plugins/angular-route.js" type="text/javascript"></script>
    <script src="assets/js/script.js" type="text/javascript"></script>
    <script type="text/javascript">
     $("#loginpop").fadeOut();
        $(document).ready(function(){
            $("#loginpop").fadeOut(0);
            $("#showloginpop").click(function(){
                if( $('#loginpop').is(":visible")==false){
                    $("#loginpop").fadeIn();
                }
                else{
                $("#loginpop").fadeOut();
                }
            });
        });
    </script>
    </body>
</html>