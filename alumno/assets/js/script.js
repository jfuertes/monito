// script.js


    // include ngRoute for all our routing needs
var demoApp = angular.module('demoApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

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
           .when('/alumno', {
                templateUrl : 'pages/alumno.html',
                controller  : 'alumnoCtrl'
            })

                   // route for the contact page
       
                     .when('/listaprof', {
                templateUrl : 'pages/listaProf.html',
                controller  : 'listaProfCtrl'

            })

       
            .when('/metodo', {
                templateUrl : 'pages/metodo.html',
                controller  : 'metodoCtrl'

            })
        
          
             .when('/perfilprofe/:id', {
                templateUrl : 'pages/perfilprofe.php',
                controller  : 'perfilprofeCtrl'

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


demoApp.controller('listaProfCtrl', function($scope, $http, $rootScope) { 
  $scope.SinProfes=false;
    $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso} )
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

    $scope.ejecutar=function(username){
         location.href=location.protocol+"//"+location.hostname+location.pathname+"#/perfilprofe";
                //window.location.href='#metodo';
                $rootScope.usernameprofe=username;
    }
    });
demoApp.controller('metodoCtrl', function($scope, $http, $rootScope) {
      $scope.online=function(){
            $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso} )
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
            $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso} )
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
demoApp.controller('perfilprofeCtrl', function($scope, $http, $rootScope, $routeParams) { 
$scope.antesContactar=true;
   $scope.init = function(){
          var username = $routeParams.id;
          //console.log(id);
          
        $http.post('api/getProfeByusername.php', {username: username} )
                .success(function(data) {
                  console.log(data);
                  $rootScope.pro=data;
                  if(data.length==0){
                    $scope.SinProfes=true;
                  }

                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
              }
              $scope.init();
    
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

        if($scope.file!=null){
          var name = $scope.name;
          var file = $scope.file;
          
          upload.uploadFile(file, name).then(function(res)
          {
            console.log(res);
          })
        }
        
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