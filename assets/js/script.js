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
            .when('/metodo', {
                templateUrl : 'pages/metodo.html',
                controller  : 'metodoCtrl'

            })
             .when('/perfilprofe', {
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

                  $http.post('login/api/loginprofe.php', {us :us} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                                console.log("data.succesees :)");
                                delete $scope.us;
                               window.location.href='profe/';
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

demoApp.controller('perfilprofeCtrl', function($scope, $http) {
   console.log("perfilprofe");
    $scope.getProfe= function(){
             $http.post('api/getProfe.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.Atributo=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getProfe();

    });


demoApp.controller('alumnoCtrl', function($scope, $http, $rootScope) {
$scope.cambiarcurso=true;
           $scope.cursos= function(id){
            $rootScope.nivel=id;
           window.location.href='#cursos';
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

    $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso} )
                .success(function(data) {
                  console.log(data);
                  $scope.Profes=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
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
                window.location.href='#metodo';
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

demoApp.controller('metodoCtrl', function($scope, $http, $rootScope) {
         


    });
