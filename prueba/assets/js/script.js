// script.js

 
    // include ngRoute for all our routing needs
var loginApp = angular.module('loginApp', ['ngRoute']);

    // configure our routes
loginApp.config(function($routeProvider) {
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

loginApp.controller('mainCtrl', function($scope, $http) {
  
});
loginApp.controller('loginprofesorCtrl', function($scope, $http) {
$scope.registroExitoso=false;
        // create a message to display in our view
        $scope.getDistritos= function(){
             $http.post('api/getDistritos.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.Distritos=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getDistritos();

            $scope.funcion=function(){
                        alert("ola");
            };

                $scope.formNewProf= function(nu){
                  console.log(nu);

                  $http.post('api/nuevoprofe.php', {nu :nu} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                                console.log("data.succesees :)");
                                document.getElementById("formNProfe").reset();
                                delete $scope.nu;
                                $scope.registroExitoso=true;
                            }
                            else{
                                console.log("error!!");
                            }
                            
                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
                };

                    $scope.login= function(us){
                  console.log(us);

                  $http.post('api/loginprofe.php', {us :us} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                                console.log("data.succesees :)");
                                delete $scope.us;
                               window.location.href='../';
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


loginApp.controller('formularioCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });



loginApp.controller('forgot_passwordCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });

loginApp.controller('mainCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });

loginApp.controller('loginalumnoCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });
