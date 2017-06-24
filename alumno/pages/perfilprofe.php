<div id="app" class="profile margen_total">
    <main class="main-left">
        <section class="page-sidebar sidebar-right">
            <div class="inner">
                <div class="box-gray box-achievements">
                    <h2>Informacion</h2>
                    <ul class="sidebar-stats">
                        <li>
                            <h3 class="gray">Puntuacion</h3>
                           
                            <img src="../IMG/profes/{{pro.puntuacion}}estrellas.png" HEIGHT=16> Estrellas
                        </li>
                    </ul>
                    <h3 class="gray">Universidad</h3>
                    <ul class="profile-language-list">

                    <li>
                        <div class="profile-language">
                            <div class="course-card en course-profile-badge">
                                <!--<div class="course-card-header course-page-illustration-en gradient">-->
                                    <!--<div class="small-course-illustration layer-1"></div>
                                    <div class="small-course-illustration layer-2"></div>
                                    <div class="small-course-illustration layer-3"></div>-->
                                    <div style='background-size:70px;height:80px; background-repeat: no-repeat; background-position:center; background-image: url("../IMG/logos-uni/{{pro.abreviatura_uni}}.png");'></div>
                                <!--</div>-->
                            </div>
                            <div class="language-info">
                                <div class="language-name">{{pro.abreviatura_uni}}</div>
                                <div class="substat">{{pro.nombre_uni}}</div>
                                <!--<div class="substat">Puntos: 1500</div>-->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="inner">
                <div class="box-gray box-achievements"> 
                    <h2>Descripcion</h2>
                    <ul class="substat">
                        <li>
                            {{pro.descripcion}}
                        </li>
                    </ul>
                </div>
            </div>
            
        </section>

        <section class="page-main main-left">
            <header class="profile-header">
            <a  class="avatar avatar-xlarge" >
                <img src="../IMG/profes/{{pro.username}}.{{pro.extension_img}}">
                <span class="ring"></span>
            </a>
            <h1 class="profile-header-username">{{pro.username}}</h1>
            <h2 class="profile-header-subline ">
                <span class="real-name">{{pro.nombres}}  {{pro.ape_paterno}}</span>
                

            </h2>
           
            </header>

            
            <?php
   session_start();
   if(isset($_SESSION['link2view'])){
    echo '<iframe width="560" height="315" src="'.$_SESSION['link2view'].'" frameborder="0" allowfullscreen></iframe>';
   }
        
   
    
 ?>
 <div ng-show="antesContactar">
 <p>para mostrar numeros telefonicos, correo y chat contactelo si esta seguro de quere hacerlo</p>
             <button id="submit_button" type="submit" class="btn btn-green right" ng-click="contactar()">Contactar</button></div>


        <div ng-show="!antesContactar">
            <h2 class="profile-header-subline ">
                <span class="real-name">{{pro.celular}} - {{pro.telefono}}</span>
                <span class="real-name">{{pro.email}}</span>
            </h2>
            <div>
                <button  type="submit" class="btn btn-green right" ng-click="solicitarClase()">solicitar clase</button>
            </div>
        </div>
        </section>
    </main>
</div>

      <section class="page-main main-left">
      <div id="tab-container">
      <form ng-submit="updateProfesor(pro)">
      <div id="account-content" class="settings-content">
      <a  class="avatar avatar-xlarge" >
      <img src="../IMG/profes/{{pro.username}}.{{pro.extension_img}}">
      <span class="ring"></span>
      </a>
      <h1 class="profile-header-username">{{pro.username}}</h1>
      <h2 class="profile-header-subline ">
      <span class="real-name">{{pro.nombres}}  {{pro.ape_paterno}}</span>
      <ul class="user-social-links">
      <li><a href="http://www.facebook.com/" rel="nofollow" target="_blank"><span class="icon icon-fb-white-small"></span></a>
      </li>
      </ul>
      </h2>
      <?php
         session_start();
             echo '<iframe width="560" height="315" src="'.$_SESSION['link2view'].'" frameborder="0" allowfullscreen></iframe>';
          
         ?>
      <hr></hr>
      <table class="table table-striped">
      <thead>
      <tr>
      <th>Nivel</th>
      <th>Bloque</th>
      <th>Curso</th>
      <th>Opcion</th>
      </tr>
      </thead>
      <tbody>
      <!--     Configuracion para modificar los cursos
         <tr ng-repeat="cu in cursosxprofe">
         <td>{{cu.nombre}}</td>
         <td>{{cu.nivel | filternivel}}</td>
         <td>{{cu.modalidad | filtermodalidad}}</td>
         <td><button ng-click="eliminar($index, cu.id_curso)" class="btn btn-green btn-pequeno has-tooltip redesign-check">eliminar</button></td>
         </tr> ejemplo:-->
      <tr >
      <td>matematica</td>
      <td>secundaria</td>
      <td>aritmetica</td>
      <td><button  class="btn btn-green btn-pequeno has-tooltip redesign-check">eliminar</button></td>
      </tr> 
      </tbody>
      </table>
      </div>
      </div>
      <div class="intro"></div>
      </div>
      </form>
</div>
</div>
</section>