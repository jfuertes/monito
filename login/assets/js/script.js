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

            .when('/loginalumno', {
                templateUrl : 'pages/loginalumno.html',
                controller  : 'loginalumnoCtrl'
            })

            .when('/loginprofesor', {
                templateUrl : 'pages/loginprofesor.html',
                controller  : 'loginprofesorCtrl'
            })

            // route for the about page
            .when('/formulario', {
                templateUrl : 'pages/formulario.html',
                controller  : 'formularioCtrl'
            })

            // route for the contact page
            .when('/forgot_password', {
                templateUrl : 'pages/forgot_password.html',
                controller  : 'forgot_passwordCtrl'
            })
            .otherwise({ templateUrl : 'pages/notfound.html' 
        });
    });

    // create the controller and inject Angular's $scope
loginApp.controller('loginprofesorCtrl', function($scope, $http) {
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
                                window.location.href='#loginCursos';
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
