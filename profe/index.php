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
    <link rel="stylesheet" href="../assets/css/estilos.css">
    <link rel="stylesheet" href="assets/css/miprofe.css">
    <link rel="stylesheet" href="assets/css/miprofe2.css">
    <link rel="stylesheet" href="assets/css/miprofe3.css">
    <link rel="stylesheet" href="assets/css/miprofe4.css">
    <link href="/images/favicon.ico?v=3" rel="shortcut icon" type="image/x-icon">
    <style type="text/css"></style>
    <style href="assets/css/miprofe.css" type="text/css"></style>
</head>

<body class="global-es logged-out splash-2014 compact-enabled" style="overflow: auto;">
    <div id="fb-root" class=" fb_reset fb_reset fb_reset">
        <div style="position: absolute; top: -10000px; height: 0px; width: 0px;">
            <div>
                <iframe name="fb_xdm_frame_https" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" src="https://staticxx.facebook.com/connect/xd_arbiter/r/1FegrZjPbq3.js?version=42#channel=f230bca32c29598&amp;origin=https%3A%2F%2Fwww.duolingo.com" style="border: none;"></iframe>
            </div>
        </div>
        <div style="position: absolute; top: -10000px; height: 0px; width: 0px;">
            <div></div>
        </div>
        <div style="position: absolute; top: -10000px; height: 0px; width: 0px;">
            <div></div>
        </div>
        <div style="position: absolute; top: -10000px; height: 0px; width: 0px;">
            <div></div>
        </div>
    </div>
    <div id="topbar">
    <header ng-controller="mainCtrl" class="topbar topbar-blue-dark">
        <div class="container">
            <a href="#/" class="topbar-brand navigate-home track-click white smaller-logo"> <img src="IMG/logo.png" WIDTH=100 HEIGHT=80>
            </a>
            <div class="topbar-right">
                <div class="topbar-username dropdown click-trigger" style="padding-bottom: 15px;">
                    <div id="showloginpop" class="topbar-buttons" style="margin-top: 1px;">
                        <span class="sign-in relative"></span>
                        <a href="#/" class="avatar avatar-small " title="monito">
                            <img src="../IMG/profes/{{pro.username}}.{{pro.extension_img}}">
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
</div>
    <div id="mobile-menu" class="mobile-menu open">
        <ul class="mobile-menu-listing">
            <div class="mobile-menu-stats"><span class="user-info"><a href="/settings/direction"><span class="flag flag-svg-small flag-en skill-tree-header-language"></span>
    </a>
    </span>
    <li class="streak" data-toggle="tooltip" title="racha de 0 días" data-placement="bottom"><span class="icon icon-streak-small "></span> 0</li>
    <li class="lingots" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="Lingots"><a href="/show_store"><span class="icon icon-lingot-small"></span><span id="num_lingots"> 0</span></a>
    </li>
    <div class="tooltip fade bottom in" style="top: 106px; left: 322.047px; display: block;">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner">Lingots</div>
    </div>
</div>
            <li id="home-nav" class="active"><a href="#/" >Inicio</a>
            </li>
            <li id="questions-nav"><a href="#/listcursos" >Cursos</a>
            </li>
            <li id="courses-nav"><a href="#/historial" >Historial</a>
            </li>
            <li id="settings-nav"><a href="#/pass" >Contraseña</a>
            </li>
            <li id="see-full-site"><a href="#/perfil" >Datos</a>
            </li>
            <li><a ng-click="logout()">Cerrar sesión</a>
            </li>
        </ul>
    </div>
    <div id="main">
        <div ng-view>
        </div>
    </div>



    <section dir="ltr" class="footer dark-theme">
        <div class="section-inner">
            <h2>Empieza a aprender con los profesores</h2>
        </div>
    </section>
    <script src="assets/plugins/jquery-1.10.2.js"></script>
    <script src="assets/plugins/bootstrap.js"></script>
    <script src="assets/plugins/angular.min.js" type="text/javascript"></script>
    <script src="assets/plugins/angular-route.js" type="text/javascript"></script>
    <script src="assets/js/script.js" type="text/javascript"></script>
    <script type="text/javascript">
        $("#loginpop").fadeOut();
        $(document).ready(function() {
            $("#loginpop").fadeOut(0);
            $("#showloginpop").click(function() {
                if ($('#loginpop').is(":visible") == false) {
                    $("#loginpop").fadeIn();
                } else {
                    $("#loginpop").fadeOut();
                }
            });
        });
    </script>
</body>

</html>