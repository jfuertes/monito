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
    <header ng-controller="mainCtrl" class="topbar topbar-blue-dark">
        <div class="container">
        <a href="#/" class="topbar-brand navigate-home track-click white smaller-logo"> <img src="IMG/logo.png" WIDTH=100 HEIGHT=80></a>
            <div class="topbar-right">
                
                <div class="topbar-username dropdown click-trigger" style="padding-bottom: 15px;">
                   <div id="showloginpop" class="topbar-buttons" style="margin-top: 1px;" >
                        <span class="sign-in relative"></span>
                            <a href="#loginuser"><span class="btn sign-in-btn btn-white" id="sign-in-btn" data-track-click="topbar toggle" >Iniciar Sesion</span></a>
                            </div>
                             <div id="loginpop">
                            <ul  class="popover arrow-top login-popover hidden" id="login-modal" style="width: 250px; top: 42px; right: 20px; left: auto; display: none;">

                            <form id="login-form" action="" method="post" accept-charset="utf-8" style="margin: 0;" ng-submit="login(us)">
                                
                                <li>
                                    <input class="signup-gplus btn btn-small btn-red btn-block btn-googlered-new" type="submit" value="google?" data-track-click="topbar login submit">
                                </li>
                                <li class="center">
                                    <span> o </span>
                                </li>
                                <li>
                                    <div class="form-row">
                                    <input class="input-small input-block" placeholder="Nombre de Usuario" type="text" id="top_login" name="login" value="" autocomplete="on" ng-model="us.username" required=""></div>
                                </li>

                                <li>
                                    <div class="form-row">
                                        <input class="input-small input-block" placeholder="contraseña" type="password" id="top_password" name="password" value="" autocomplete="on" ng-model="us.password" required="">
                                    </div>
                                </li>
                                <li id="message" class="login-fail hidden"></li>
                                <li>
                                    <button type="submit" class="btn btn-green-light btn-small sign-in btn-block" type="submit" data-track-click="topbar login submit">entrar</button> 
                                </li>
                                </form>
                                <li class="center">
                                    <a href="login/#forgot_password">Olide mi contraseña</a>
                                </li>
                                <li class="center">
                                    <a href="#login">Registrate</a>
                                </li>
                            
                        </ul></div>
                    
                </div>
            </div>
        </div>
    </header>

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

    <section dir="ltr" class="website">
        <div class="section-inner">
            <h2 class="splash">Cada lección es como un juego.</h2>
            <div class="callout-wrapper">
                <div class="callout-container-left scroll-animate slide-in"><span class="callout challenges"><span class="splash-icon challenges"></span>
                    <div class="text">
                        <h4>Leer, escuchar y escribir</h4>
                        <p>Cada lección incluye una variedad de ejercicios de hablar, escuchar, traducción y opción múltiple.</p>
                    </div>
                    </span><span class="callout grading"><span class="splash-icon check"></span>
                    <div class="text">
                        <h4>Evaluación durante la lección</h4>
                        <p>Puedes ver tus respuestas correctas al instante. Cuando fallas un ejercicio, te mostramos cómo mejorar rápidamente.</p>
                    </div>
                    </span>
                </div><span class="left-line-container scroll-animate slide-in"><div class="challenges line"></div><div class="grading line"></div></span><span class="splash-icon computer "></span><span class="right-line-container scroll-animate slide-in"><div class="streak line"></div><div class="heart line"></div></span>
                <div class="callout-container-right scroll-animate slide-in"><span class="callout streak"><span class="splash-icon streak"></span>
                    <div class="text">
                        <h4>Tu racha</h4>
                        <p>Duolingo te motiva a ir bien registrando cuántos días seguidos aprendes un idioma.</p>
                    </div>
                    </span><span class="callout heart"><span class="splash-icon heart"></span>
                    <div class="text">
                        <h4>Vidas</h4>
                        <p>¡Los corazones te mantienen vivo! Los pierdes cuando tu respuesta es incorrecta. Cuando se te acaban debes empezar de nuevo.</p>
                    </div>
                    </span>
                </div>
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
