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
  
 console.log("mainCtrl");
          
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
   $scope.correcto=false;
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
     $scope.getDistritos= function(){
             $http.post('../login/api/getDistritos.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.Distritos=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getDistritos();
      $scope.updateProfesor =function(pro){ 
        console.log(pro);
               $http.post('api/updateProfe.php', {pro:pro} )
                          .success(function(data) {
                            console.log(data);
                            $scope.correcto=true;
                            //location.reload();
                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });

      };

    
    });
