<div id="app" class="profile margen_total">
<main class="main-left">
   <section class="page-sidebar sidebar-right">
      <div class="inner">
         <div class="box-gray box-achievements">
            <h2>Informacion</h2>
            <ul class="sidebar-stats">
               <li>
                  <h3 class="gray">Calificacion</h3>
                  <img src="../IMG/profes/{{pro.puntuacion}}estrellas.png" HEIGHT=16> Estrellas
               </li>
            </ul>
            <ul class="substat">
                  <li>
                    <h3 class="gray">Descripcion</h3>
                     {{pro.descripcion}}
                  </li>
            </ul>
            <h3 class="gray">Universidad</h3>
            <ul class="profile-language-list">
               <li>
                  <div class="profile-language">
                     <div class="course-card en course-profile-badge">
                        <div style='background-size:70px;height:80px; background-repeat: no-repeat; background-position:center; background-image: url("../IMG/logos-uni/{{pro.abreviatura_uni}}.png");'></div>
                     </div>
                     <div class="language-info">
                        <div class="language-name">{{pro.abreviatura_uni}}</div>
                        <div class="substat">{{pro.nombre_uni}}</div>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
         <div class="inner">
            <div class="box-gray box-achievements">
               <h2>Comentarios</h2>
               <ul class="substat" ng-repeat="co in Comentarios">
                  <li>
                    <h3 class="gray">{{co.username_alu}}</h3>
                     {{co.comentario}}
                  </li>
              </ul>
             
            </div>
         </div>
   </section>
   <section class="page-main main-right">
   <div id="tab-container">
   <form ng-submit="updateProfesor(pro)">
   <div id="account-content" class="settings-content">
   <header class="profile-header">
   <a  class="avatar avatar-xlarge" >
   <img src="../IMG/profes/{{pro.username}}.{{pro.extension_img}}">
   <span class="ring"></span>
   </a>
   <h1 class="profile-header-username">{{pro.username}}</h1>
   <h2 class="profile-header-subline ">
   <span class="real-name">{{pro.nombres}}  {{pro.ape_paterno}} {{pro.link2view}}</span>
   </h2>
   </header>
  <div class="agregarvideo">
  </div>
      <div ng-show="!haycursoenrootscope"><hr> </br></br>
        <p>Usted a seleccionado el curso de {{valoresactuales.nombre}} de {{valoresactuales.nivel | filternivel}} en la modalidad {{valoresactuales.modalidad | filtermodalidad}} </p>
   <div ng-show="antesContactar">
   <p>Contacte para mostrar numeros telefonicos y correo </p>
   <button id="submit_button" type="submit" class="btn btn-green right" ng-click="contactar()">Contactar</button><hr></br></hr>
   </div></div>


   <div ng-show="!antesContactar" class="settings-content">

                        
                        <hr></hr>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Numero</th>
                            <th>Correo</th>
                            <th>Profesor</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                         
                            <tr >
                            <td>{{pro.celular}}  {{pro.telefono}}</td>
                            <td>{{pro.email}}</td>
                            <td>{{pro.nombres}} {{pro.ape_paterno}} {{pro.ape_materno}}</td>
                            <td><button  class="btn btn-green btn-pequeno has-tooltip redesign-check" ng-click="solicitarClase()">Solicitar Clase</button></td>
                          </tr> 
                        </tbody>
                    </table>
    </div>


   <!--<div ng-show="!antesContactar">
   <h2 class="profile-header-subline ">
   <span class="real-name">{{pro.celular}} - {{pro.telefono}}</span>
   <span class="real-name">{{pro.email}}</span>
   </h2>
   <div>
   <button  type="submit" class="btn btn-green right" ng-click="solicitarClase()">solicitar clase</button>
   </div>
   </div>-->

                    <div id="account-content" class="settings-content">
</br></hr>
                        <h1 class="player">Todos los cursos disponibles</h1>
                        
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Curso</th>
                            <th>Nivel</th>
                            <th>Modalidad</th>
                            <th>Opcioness</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                            <tr ng-repeat="c in getcursosxprofe">
                            <td>{{c.nombre}}</td>
                            <td>{{c.nivel | filternivel}}</td>
                            <td>{{c.modalidad | filtermodalidad}}</td>
                            <td><button  class="btn btn-green btn-pequeno has-tooltip redesign-check" ng-click="solicitarxtabla(c.id_curso, c.modalidad)">Solicitar</button></td>
                          </tr> 
                        </tbody>
                    </table>


                    </hr>
                        <h1 class="player">Distritos disponibles</h1>
                        
                      <table class="table table-striped">
                        
                        <tbody>
                         
                            <tr ng-repeat="c in distritosTabla | orderBy:'nombre'">
                            <td>{{c.nombre}}</td>
                            
                          </tr> 
                        </tbody>
                    </table>
                  </div>
   </div>
   </form>
   </div>
   </section>
</main>
</div>