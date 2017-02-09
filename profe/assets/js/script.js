// script.js


    // include ngRoute for all our routing needs
var demoApp = angular.module('demoApp', ['ngRoute']);

    // configure our routes
demoApp.config(function($routeProvider) {
$routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/inicio.php',
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
              .when('/nivel', {
                templateUrl : 'pages/nivel.html',
                controller  : 'nivelCtrl'
            })
               .when('/metodo', {
                templateUrl : 'pages/metodo.html',
                controller  : 'metodoCtrl'

            })
                 .when('/listcursos', {
                templateUrl : 'pages/listcursos.html',
                controller  : 'listcursosCtrl'

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
demoApp.controller('mainCtrl', function($scope, $http, $rootScope) {
  
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
demoApp.controller('nivelCtrl', function($scope, $http, $rootScope) {
  $rootScope.cursoxprofe=[];
$scope.cambiarcurso=true;
           $scope.cursos= function(id){
            $rootScope.cursoxprofe.nivel=id;
           window.location.href='#cursos';
            console.log($rootScope.cursoxprofe.nivel);
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
demoApp.controller('listcursosCtrl', function($scope, $http, $rootScope) {
        
         $scope.getCursos= function(){
             $http.post('api/CursosxProfe.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.cursosxprofe=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getCursos();

    });
demoApp.controller('metodoCtrl', function($scope, $http, $rootScope) {
        
         $scope.presencial= function(){
            $rootScope.cursoxprofe.modalidad=0;
             $scope.guardarcurso();
         };
          $scope.online= function(){
            $rootScope.cursoxprofe.modalidad=1;
            $scope.guardarcurso();
         };
           $scope.guardarcurso= function(){
            console.log($rootScope.cursoxprofe);//que pasa aki!!!
           //  JSON.stringify($rootScope.cursoxprofe);
         id= {};
         id["nivel"]=$rootScope.cursoxprofe.nivel;
         id["id_curso"]=$rootScope.cursoxprofe.idcurso;
         id["modalidad"]=$rootScope.cursoxprofe.modalidad;
            //console.log(id);//locomaricon!!no vas a entender!
            $http.post('api/guardarcurso.php',{id :id})
                    .success(function(data) {
                      console.log(data);
                     // $scope.Subcursos=data;
                    })
                    .error(function(data) {
                      console.log('Error: ' + data);
                      });
            window.location.href='#listcursos';
         };
         

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
                
                $rootScope.cursoxprofe.idcurso=id;
                window.location.href='#metodo';
            }

      };
       $scope.getCursos= function(){
             $http.post('api/getCursosByNivel.php',{nivel:$rootScope.cursoxprofe.nivel} )
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

demoApp.filter('filternivel', function() {
  return function(id){
    var niveles = ['Primaria', 'Secundaria', 'Pre', 'Universitario'];
      return niveles[id-1];
    };
 
    });
demoApp.filter('filtermodalidad', function() {
  return function(id){
    var niveles = ['online', 'presencial'];
      return niveles[id];
    };
 
    });
