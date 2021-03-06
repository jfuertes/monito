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
    <link rel="stylesheet" href="../alumno/assets/css/miprofe.css">
    <link rel="stylesheet" href="../alumno/assets/css/miprofe2.css">
    <link rel="stylesheet" href="../alumno/assets/css/miprofe3.css">
    <link rel="stylesheet" href="../alumno/assets/css/miprofe4.css">
    <link href="/images/favicon.ico?v=3" rel="shortcut icon" type="image/x-icon">
    <style type="text/css"></style>
    <style href="../alumno/assets/css/miprofe.css" type="text/css"></style>
</head>

<body class="global-es logged-out splash-2014 compact-enabled" style="overflow: auto;">
    <div id="topbar">
    <header ng-controller="mainCtrl" class="topbar topbar-blue-dark">
        <div class="container">
            <a href="#/perfil" class="topbar-brand navigate-home track-click white "> 
            </a>
            <div class="topbar-right">
                <div class="topbar-username dropdown click-trigger" style="padding-bottom: 15px;">
                    <div id="showloginpop" class="topbar-buttons" style="margin-top: 1px;">
                        <span class="sign-in relative"></span>
                        <a href="#/perfil" class="avatar avatar-small " title="monito">
                            <img src="../IMG/profes/{{pro.username}}.{{pro.extension_img}}">
                            <span class="ring"></span>
                        </a>
                        <span class="name"><?php echo $_SESSION['nombres']." ".$_SESSION['ape_paterno'] ?></span>
                        <span class="icon icon-arrow-down-white"></span>
                    </div>
                    <div class="btn-group">
                          <ul class="dropdown-menu">
                            <li><a href="#/">Perfil Profesor</a></li>
                            <li><a href="#/perfil">Configuracion</a></li>
                            <li><a ng-click="logout()">Cerrar sesión</a></li>
                          </ul>
                        </div>


                </div>
            </div>
        </div>
    </header>
</div>
    <div id="mobile-menu" class="mobile-menu logged-in open">
        <ul class="mobile-menu-listing">
            
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
</body>

</html>