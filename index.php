<?php
    session_start();
    if(isset($_SESSION['type'])){
        if($_SESSION['type']=="profesor"){    
         header('location:profe/');
            //echo "entro";
            //echo "acceso correcto".$_SESSION['login'];
        }
        else if ($_SESSION['type']=="alumno"){
           header('location:alumno/');
        }
    }
?>

<html ng-app="demoApp" class="mobile" dir="ltr" style="height: 100%" lang="es">
    <head>
    <meta name="theme-color" content="#216b07" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="NOODP">
    <title>MiProfe.club</title>
 
    <link rel="shortcut icon" href="IMG/logo.png">
    <link rel="stylesheet" href="assets/css/estilos.css">
    <link rel="stylesheet" href="assets/css/miprofe.css">
    <link rel="stylesheet" href="assets/css/miprofe2.css">
    <link rel="stylesheet" href="assets/css/miprofe3.css">
    <link rel="stylesheet" href="assets/css/miprofe4.css">
    <link href="IMG/logo.png" rel="shortcut icon" type="image/x-icon">
    <style type="text/css"></style>
    <style  href="assets/css/miprofe.css" type="text/css"></style>
    </head>

    <body class="global-es logged-out splash-2014 compact-enabled" style="overflow: auto;">
    <div id="topbar">
        <header ng-controller="mainCtrl" class="topbar topbar-blue-dark">
            <div class="container">
            <a href="#/" class="topbar-brand navigate-home track-click white"></a>
                <div class="topbar-right">
                    
                    <div class="topbar-username dropdown click-trigger" style="padding-bottom: 15px;">
                       <div id="showloginpop" class="topbar-buttons" style="margin-top: 1px;" >
                            <span class="sign-in relative"></span>
                                <a href="#loginuser"><span class="btn sign-in-btn btn-white" id="sign-in-btn" data-track-click="topbar toggle" >Iniciar Sesion</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>

    <div id="mobile-menu" class="mobile-menu open">
        <ul class="mobile-menu-listing">
            <li><a href="#loginprofesor">Ingresar como Profesor</a>
            </li>
            <li><a href="#loginalumno">Ingresar como Alumno</a>
            </li>
            
        </ul>
    </div>

        <!-- ANGULAR-->
        <div id="main">
            <div ng-view>
            </div>
        </div>

    <section dir="ltr" class="duo-info">
        <div class="section-inner">
            <!--<span > <img src="IMG/mono.png"></span>-->
                <div class="text">
                    <h2>Como funciona mi profe???.</h2
                    ><p>mi profe es una plataforma quw mi mi profe es una plataforma quw mi mi profe es una plataforma quw mi mi profe es una plataforma quw mi mi profe es una plataforma quw mi mi 
                    </p><a style="cursor: hand;" id="video-toggle" class="play-video" ng-click="showvideo()">
                    <div class="play-border">
                        <div class="play-button"></div>
                    </div><strong>Ve cómo lo hacemos</strong>
                    <!--<div id="videoDemostrativo" ng-show="showvideohep"><iframe width="560" height="315" src="https://www.youtube.com/embed/4gr6_yOoMQc?autoplay=1" frameborder="0" allowfullscreen></iframe></div>-->

                    </a>
                </div>
            </div>
        </section>

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
    <script src="assets/js/script2.js" type="text/javascript"></script>

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
