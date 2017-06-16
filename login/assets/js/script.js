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

loginApp.controller('mainCtrl', function($scope, $http) {
  
});
loginApp.controller('loginprofesorCtrl', function($scope, $http) {
  $scope.errorCrear=false;
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

           $scope.getUNI= function(){
             $http.post('api/getUNI.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.UNI=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getUNI();

                $scope.formNewProf= function(nu){
                  console.log(nu);

                  $http.post('api/nuevoprofe.php', {nu :nu} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                              var mensaje ="bienvenida";
                                console.log("data.succesees :)");
                                document.getElementById("formNProfe").reset();

                                     $http.post('../api/email2/gmail.php', {reci: nu.email, mensaje: mensaje} )
                                        .success(function(data) {
                                          console.log(data);
                                          //delete $scope.nu;
                                         //window.location.href = '../#/loginprofesor'
                                        })
                                        .error(function(data) {
                                          console.log('Error: ' + data);
                                          });
                               
                               
                              //  $scope.registroExitoso=true;
                            }
                            else{
                              $scope.errorCrear=true;
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
                                location.href=location.protocol+"//"+location.hostname+location.pathname+"../";
                               //window.location.href='../';
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

loginApp.controller('loginalumnoCtrl', function($scope, $http, $routeParams) {
 if($routeParams.id !=null){
      console.log("se tiene el username de fb");
     var username = $routeParams.id;
     $scope.nu.username=username;
 }

  $scope.errorCrear=false;
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

           

                $scope.formNewAlu= function(nu){
                  console.log(nu);

                  $http.post('api/nuevoalumno.php', {nu :nu} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                                console.log("data.succesees :)");
                                document.getElementById("formNAlu").reset();
                                var mensaje ="bienvenida";
                                //delete $scope.nu;
                                //$scope.registroExitoso=true;
                                //redirigir
                                     
                                       $http.post('../api/email2/gmail.php', {reci: nu.email, mensaje: mensaje} )
                                        .success(function(data) {
                                          console.log(data);
                                          delete $scope.nu;
                                         window.location.href = '../#/loginalumno'
                                        })
                                        .error(function(data) {
                                          console.log('Error: ' + data);
                                          });
}
})
                               
//                              window.location.href = '../#/loginalumno'
                
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
                };

                    $scope.loginalu= function(us){
                  console.log(us);

                  $http.post('api/loginalumno.php', {us :us} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                                console.log("data.succesees :)");
                                delete $scope.us;
                                location.href=location.protocol+"//"+location.hostname+location.pathname+"../";
                               //window.location.href='../';
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
