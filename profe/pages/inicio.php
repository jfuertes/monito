<div id="app" class="profile margen_total">
   <main class="main-left">
      <section class="page-sidebar sidebar-right">
         <div class="inner">
            <div class="box-gray box-achievements">
               <h2>Informacion</h2>
               <ul class="sidebar-stats">
                  <li>
                     <h3 class="gray">Puntuacion</h3>
                     <span class="icon icon-streak-small-normal "></span>
                     <strong>{{pro.puntuacion}}</strong> Estrellas
                  </li>
               </ul>
               <h3 class="gray">Universidad</h3>
               <ul class="profile-language-list">
                  <li>
                     <div class="profile-language">
                        <div class="course-card en course-profile-badge">
                           <div style='background-size:70px;height:80px; background-repeat: no-repeat; background-position:center; background-image: url("../IMG/logos-uni/{{pro.abreviatura_uni}}.png");'></div>
                           <!--</div>-->
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
      </div>
      </div>
      <div class="intro"></div>
      </div>
      </form>
</div>
</div>
</section>
</main>
</div>