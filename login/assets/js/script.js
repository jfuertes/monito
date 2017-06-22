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
            .when('/forgot_password_alu', {
                templateUrl : 'pages/forgot_password_alu.html',
                controller  : 'forgot_password_aluCtrl'
            })
             .when('/forgot_password_pro', {
                templateUrl : 'pages/forgot_password_pro.html',
                controller  : 'forgot_password_proCtrl'
            })
             .when('/recupera/:link', {
                templateUrl : 'pages/recupera.html',
                controller  : 'recuperaCtrl'
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
                                //document.getElementById("formNProfe").reset();

                                     $http.post('../api/email/gmail.php', {reci: nu.email, mensaje: mensaje} )
                                        .success(function(data) {
                                          console.log(data);
                                          delete $scope.nu;
                                         window.location.href = '../#/loginprofesor'
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



loginApp.controller('forgot_password_aluCtrl', function($scope, $http) {
    $scope.forgotalu= function(nu){
      $scope.enviadocorreo=false;
      $scope.errorcorreo=false;
             $http.post('../api/email/forgotalu.php', {nu :nu} )
                .success(function(data) {
                  console.log(data);
                  $scope.enviadocorreo=true;
                  if(data.success){
                    alert("funciono");
                    $scope.enviadocorreo=true;
                  }
                  else{
                    $scope.errorcorreo=true;
                  }
                  
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
        

    });
loginApp.controller('forgot_password_proCtrl', function($scope, $http) {
      $scope.forgotpro= function(nu){
      $scope.enviadocorreo=false;
      $scope.errorcorreo=false;
             $http.post('../api/email/forgotpro.php', {nu :nu} )
                .success(function(data) {
                  console.log(data);
                  $scope.enviadocorreo=true;
                  if(data.success){
                    alert("funciono");
                    $scope.enviadocorreo=true;
                  }
                  else{
                    $scope.errorcorreo=true;
                  }
                  
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
        

    });
loginApp.controller('recuperaCtrl', function($scope, $http, $routeParams) {
  $scope.clavenocambiada=false;
  $scope.clavecambiadacorrecto=false;
      var link = $routeParams.link;
       $http.post('api/getUser.php', {link :link} )
                .success(function(data) {
                  console.log(data);
                  
                  $scope.user=data;
                  
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });

      $scope.cambiarclave= function(np){
             $http.post('api/cambiarclave.php', {link :link, np: np} )
                .success(function(data) {
                  console.log(data);
                 if(data.success){
                   console.log(data.success);
                      $scope.clavecambiadacorrecto=true;
                      if(data.type=='profesor'){
                        setTimeout( window.location.href = '../#/loginprofesor',1000);
                      }
                      else{
                        setTimeout( window.location.href = '../#/loginalumno',1000);
                      }
                     // setTimeout( window.location.href = '../#/loginalumno',1000);
                    
                      
                 }
                 else{
                  console.log("mal la contra");
                     $scope.clavenocambiada=true;
                 }
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };


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
                                     
                                      //document.getElementById("formNProfe").reset();

                                     $http.post('../api/email/gmail.php', {reci: nu.email, mensaje: mensaje} )
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
