// script.js


    // include ngRoute for all our routing needs
var demoApp = angular.module('demoApp', ['ngRoute']);

    // configure our routes
demoApp.config(function($routeProvider) {
$routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/inicio.html',
                controller  : 'mainCtrl'
            })

            .when('/pass', {
                templateUrl : 'pages/pass.html',
                controller  : 'passCtrl'
            })

            .when('/cursos', {
                templateUrl : 'pages/cursos.html',
                controller  : 'cursosCtrl'
            })

            // route for the about page
            .when('/perfil', {
                templateUrl : 'pages/perfil.html',
                controller  : 'perfilCtrl'
            })
            .otherwise({ templateUrl : 'pages/notfound.html' 
        });
              
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
        $scope.logout=function() {
          if (confirm("esta seguro que desea salir?")) {
          // Respuesta afirmativa...
           $http.post('api/logout.php' )
                .success(function(data) {
                  console.log(data);
                  window.location.href='../';
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
        };
      };

      
    });


demoApp.controller('passCtrl', function($scope, $http, $rootScope) {
  $scope.error=false;

          $scope.formNewPass= function(us){
                  console.log(us);

                  $http.post('api/newpass.php', {us :us} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                                console.log("data.succesees :)");
                                delete $scope.us;
                               window.location.href='#';
                            }
                            else{
                                console.log("error!!");
                                $scope.error=true;
                            }
                            
                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
                                       

        };


    });
demoApp.controller('perfilCtrl', function($scope, $http, $rootScope) {
    $scope.getProfe= function(){
         $http.post('api/getdataProfe.php' )
                          .success(function(data) {
                            console.log(data);
                            $scope.pro=data;
                           
                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
    }
    $scope.getProfe();
      $scope.perfilprofesor =function(us){

      };

    
    });
