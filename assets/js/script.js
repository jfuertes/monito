// script.js


    // include ngRoute for all our routing needs
var demoApp = angular.module('demoApp', ['ngRoute']);

    // configure our routes
demoApp.config(function($routeProvider) {
$routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/alumno', {
                templateUrl : 'pages/alumno.html',
                controller  : 'alumnoCtrl'
            })

            .when('/login', {
                templateUrl : 'pages/login.html',
                controller  : 'loginCtrl'
            })

            // route for the contact page
            .when('/profesor', {
                templateUrl : 'pages/profesor.html',
                controller  : 'profesorCtrl'
            })


            .when('/cursos', {
                templateUrl : 'pages/cursos.html',
                controller  : 'cursosCtrl'

            })

            .when('/listaprof', {
                templateUrl : 'pages/listaProf.html',
                controller  : 'listaProfCtrl'

            })

            .when('/cursosprof', {
                templateUrl : 'pages/cursosprof.html',
                controller  : 'cursosProfCtrl'

            })
            .when('/distritos', {
                templateUrl : 'pages/distritos.html',
                controller  : 'distritosCtrl'

            })

            .when('/metodo', {
                templateUrl : 'pages/metodo.html',
                controller  : 'metodoCtrl'

            })
            .when('/loginprofesor', {
                templateUrl : 'pages/loginprofesor.html',
                controller  : 'loginprofesorCtrl'

            })

            .when('/loginuser', {
                templateUrl : 'pages/login2.html',
                controller  : 'login2Ctrl'

            })

            .when('/loginalumno', {
                templateUrl : 'pages/loginalumno.html',
                controller  : 'loginalumnoCtrl'

            })

             .when('/perfilprofe/:id', {
                templateUrl : 'pages/perfilprofe.html',
                controller  : 'perfilprofeCtrl'

            })
              .otherwise({ templateUrl : 'pages/notfound.html' });
    });

    // create the controller and inject Angular's $scope
demoApp.controller('mainCtrl', function($scope, $http) {
  $scope.showvideohep=false;
  
 console.log("mainCtrl");
          $scope.inicio= function(id){
           window.location.href='#alumno';
            console.log("volvi :)");
      };
      $scope.showvideo=function(){
        $scope.showvideohep=true;
        //alert("prueba");
        //$("body").addClass("backgroundDark");
        //$("#videoDemostrativo").addClass("sobretodo");
      };
          $scope.login= function(us){
                  console.log(us);

                  $http.post('login/api/loginGeneric.php', {us :us} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                                console.log("data.succesees :)");
                                delete $scope.us;
                               location.reload();
                            }
                            else{
                                console.log("error!!");
                            }
                            
                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
                                       

        };


    });
demoApp.controller('loginCtrl', function($scope, $http) {
  $scope.showformini=false;
  $scope.showformini=function(){
          alert($scope.showformin);
          if($scope.showformini==false){
              $scope.showformini=true;
              alert("true");
          }
           else{
              $scope.showformini=false;
              alert("false");
          }
        
        //alert("prueba");
        //$("body").addClass("backgroundDark");
        //$("#videoDemostrativo").addClass("sobretodo");
      };

      
    });
demoApp.controller('login2Ctrl', function($scope, $http) {
console.log("login2ctrl");
      
    });

   demoApp.controller('perfilprofeCtrl', function($scope, $http, $rootScope, $routeParams) { 

   $scope.init = function(){
          var username = $routeParams.id;
          //console.log(id);
          
        $http.post('api/getProfeByusername.php', {username: username} )
                .success(function(data) {
                  console.log(data);
                  $rootScope.pro=data;
                  $( ".agregarvideo" ).append( "<p> <iframe width='560' height='315' src='https://www.youtube.com/embed/"+data['link2view']+"' frameborder='0' allowfullscreen></iframe></p>" );

                  if(data.length==0){
                   
                  }

                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
              }
              $scope.init();
   $scope.contactar =function(id) {
               $http.post('api/getlinkprofe.php', {id: $routeParams.id} )
                .success(function(data) {
                  console.log(data);
                  location.href=location.protocol+"//"+location.hostname+location.pathname+"#/loginalumno";
                                    
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
          
          } 
       
    
    });
 
  


demoApp.controller('alumnoCtrl', function($scope, $http, $rootScope) {
$scope.cambiarcurso=true;
           $scope.cursos= function(id){
            $rootScope.nivel=id;
            location.href=location.protocol+"//"+location.hostname+location.pathname+"#/cursos";
           //window.location.href='#cursos';
            console.log($rootScope.nivel);
      }


        $scope.message = 'Hi! This is the about page.';
         $scope.getNivel= function(){
             $http.post('api/getNivel.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.Nivel=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getNivel();

    });

demoApp.controller('listaProfCtrl', function($scope, $http, $rootScope) {
  $scope.SinProfes=false;
    $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso, modalidad: $rootScope.modalidad} )
                .success(function(data) {
                  console.log(data);
                  $scope.Profes=data;
                  if(data.length==0){
                    $scope.SinProfes=true;
                  }

                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });

        
    });
demoApp.controller('metodoCtrl', function($scope, $http, $rootScope) {
      $scope.online=function(){
        $rootScope.modalidad=0;
            $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso, modalidad: $rootScope.modalidad} )
                        .success(function(data) {
                          console.log(data);
                          $scope.Profes=data;
                          location.href=location.protocol+"//"+location.hostname+location.pathname+"#/listaprof";
                          // window.location.href='#listaprof';

                        })
                        .error(function(data) {
                          console.log('Error: ' + data);
                          });
            };
              $scope.presencial=function(){
                $rootScope.modalidad=1;
            $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso, modalidad: $rootScope.modalidad} )
                        .success(function(data) {
                          console.log(data);
                          $scope.Profes=data;
                          location.href=location.protocol+"//"+location.hostname+location.pathname+"#/distritos";
                          // window.location.href='#listaprof';

                        })
                        .error(function(data) {
                          console.log('Error: ' + data);
                          });
            };
    });


demoApp.controller('temasCtrl', function($scope) {
    });


demoApp.controller('cursosCtrl', function($scope, $http, $rootScope) {
      $scope.ejecutar=function(id, seccion){
            if(seccion=="0"){
                   // alert(id);
                     $http.post('api/getSubcursos.php',{id:id} )
                    .success(function(data) {
                      console.log(data);
                      $scope.Subcursos=data;
                    })
                    .error(function(data) {
                      console.log('Error: ' + data);
                      });

                 $scope.VerSubcursos=true;
            }
              if(seccion!="0"){
                location.href=location.protocol+"//"+location.hostname+location.pathname+"#/metodo";
                //window.location.href='#metodo';
                $rootScope.idcurso=id;
            }

      };
       $scope.getCursos= function(){
             $http.post('api/getCursosByNivel.php',{nivel:$rootScope.nivel} )
                .success(function(data) {
                  console.log(data);
                  $scope.Cursos=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getCursos();
    });


demoApp.controller('loginprofesorCtrl', function($scope, $http) {
 $scope.logeoIncorrecto=false;
 $scope.linknoactivado=false;
  $scope.login= function(us){
          console.log(us);

          $http.post('login/api/loginGeneric.php', {us :us, type: "profesor"} )
                  .success(function(data) {
                    console.log(data);
                  
                    if(data.activado==true){
                               if(data.success){
                               console.log("data.succesees :)");
                                delete $scope.us;
                               //location.reload();
                               location.href=location.protocol+"//"+location.hostname+location.pathname+"profe/";
                               //window.location.href='profe/';
                            }

                            }
                    else if (data.activado==false){
                       $scope.linknoactivado=true;
                        console.log("error!!");
                    
                  }
                    else{
                       $scope.logeoIncorrecto=true;
                        console.log("error!!");
                    }
                    
                  })
                  .error(function(data) {
                    console.log('Error: ' + data);
                    });
                               

  };


    });

demoApp.controller('loginalumnoCtrl', function($scope, $http) {
  $scope.logeoIncorrecto=false;
  $scope.linknoactivado=false;
  $scope.login= function(us){
          console.log(us);

          $http.post('login/api/loginGeneric.php', {us :us, type: "alumno"} )
                  .success(function(data) {
                    console.log(data);
                  
                    if(data.activado==true){
                               if(data.success){
                               console.log("data.succesees :)");
                                delete $scope.us;
                               //location.reload();
                               location.href=location.protocol+"//"+location.hostname+location.pathname+"alumno/#/perfil";
                               //window.location.href='profe/';
                            }

                            }
                    else if (data.activado==false){
                       $scope.linknoactivado=true;
                        console.log("error!!");
                    
                  }
                    else{
                       $scope.logeoIncorrecto=true;
                        console.log("error!!");
                    }
                    
                  })
                  .error(function(data) {
                    console.log('Error: ' + data);
                    });                         
  };

    });