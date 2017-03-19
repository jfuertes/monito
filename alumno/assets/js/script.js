// script.js


    // include ngRoute for all our routing needs
var demoApp = angular.module('demoApp', ['ngRoute','ui.bootstrap']);

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
          .when('/perfil', {
                templateUrl : 'pages/perfil.html',
                controller  : 'perfilCtrl'
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
    $scope.getAlumno= function(){
         $http.post('api/getdataAlumno.php' )
                          .success(function(data) {
                            console.log(data);
                            $scope.alu=data;

                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
    }
    $scope.getAlumno();

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

   $scope.alerts = [];

    $scope.newAlert = function(mensaje, tipo, tiempo) {
        $scope.alerts.push({msg: mensaje, type: tipo, tiempo: tiempo});

        $('html,body').animate({
            scrollTop: $("#alerta").offset().top
        }, 500);
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };


          $scope.formNewPass= function(us){
                  console.log(us);

                  $http.post('api/newpass.php', {us :us} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                                console.log("data.succesees :)");
                                delete $scope.us;
                                
                                $scope.newAlert('La importación se realizó correctamente','success','3000');
                                //location.href=location.protocol+"//"+location.hostname+location.pathname+"#";
                               //window.location.href='#';
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

demoApp.controller('perfilCtrl', function($scope, $http, $rootScope, upload) {

  $scope.uploadFile = function()
  {
    var name = $scope.name;
    var file = $scope.file;
    
    upload.uploadFile(file, name).then(function(res)
    {
      console.log(res);
    })
  }

   $scope.correcto=false;
  
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
         
           $scope.getAlumno= function(){
         $http.post('api/getdataAlumno.php' )
                          .success(function(data) {
                            console.log(data);
                            $scope.alu=data;

                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
    }
    $scope.getAlumno();
      $scope.updateAlumno =function(alu){ 
        console.log(alu);
               $http.post('api/updateAlumno.php', {alu:alu} )
                          .success(function(data) {
                            console.log(data);
                            $scope.correcto=true;
                            location.reload();
                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
      };
    })
.directive('uploaderModel', ["$parse", function ($parse) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) 
    {
      iElement.on("change", function(e)
      {
        $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
      });
    }
  };
}])
.service('upload', ["$http", "$q", function ($http, $q) 
{
  this.uploadFile = function(file, name)
  {
    var deferred = $q.defer();
    var formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    return $http.post("api/uploadFoto.php", formData, {
      headers: {
        "Content-type": undefined
      },
      transformRequest: angular.identity
    })
    .success(function(res)
    {
      deferred.resolve(res);
    })
    .error(function(msg, code)
    {
      deferred.reject(msg);
    })
    return deferred.promise;
  } 
}]);