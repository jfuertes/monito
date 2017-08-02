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

            .when('/comentario', {
                templateUrl : 'pages/comentario.html',
                controller  : 'comentarioCtrl'
            })

            .when('/listdistritos', {
                templateUrl : 'pages/listdistritos.html',
                controller  : 'listdistritosCtrl'
            })

            .when('/historial', {
                templateUrl : 'pages/historial.html',
                controller  : 'historialCtrl'
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
                .when('/historial', {
                templateUrl : 'pages/historial.html',
                controller  : 'historialCtrl'
            })
             .when('/clase/:id', {
                templateUrl : 'pages/clase.html',
                controller  : 'claseCtrl'
            })
            .otherwise({ templateUrl : 'pages/notfound.html' 
        });
              
    });
demoApp.filter('filterfecha', function() {
  return function(id){
   var resultado = id.split(" ");
      return resultado[0];
    };
 
    });
demoApp.filter('filtermodalidad', function() {
  return function(id){
    var niveles = ['online', 'presencial'];
      return niveles[id];
    };
 
    });
demoApp.filter('filternivel', function() {
  return function(id){
    var niveles = ['Primaria', 'Secundaria', 'Pre', 'Universitario'];
      return niveles[id-1];
    };
 
    });
    // create the controller and inject Angular's $scope
demoApp.controller('mainCtrl', function($scope, $http, $rootScope) {
  
 console.log("mainCtrl");
          
     $scope.getProfe= function(){
         $http.post('api/getdataProfe.php' )
                          .success(function(data) {
                            console.log(data);
                            $scope.pro=data;
                            $rootScope.pro=data;

                           
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
                  location.href=location.protocol+"//"+location.hostname+location.pathname+"../";
                  //window.location.href='../';
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
        };
      };

      
    });


demoApp.controller('passCtrl', function($scope, $http, $rootScope) {
  $scope.pros=$rootScope.pro;
  $scope.error=false;

          $scope.formNewPass= function(us){
                  console.log(us);

                  $http.post('api/newpass.php', {us :us} )
                          .success(function(data) {
                            console.log(data);
                            if(data.success){
                                console.log("data.succesees :)");
                                delete $scope.us;
                               location.href=location.protocol+"//"+location.hostname+location.pathname+"#";
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
demoApp.controller('nivelCtrl', function($scope, $http, $rootScope) {
  $rootScope.cursoxprofe=[];
$scope.cambiarcurso=true;
           $scope.cursos= function(id){
            $rootScope.cursoxprofe.nivel=id;
            location.href=location.protocol+"//"+location.hostname+location.pathname+"#/cursos";
           //window.location.href='#cursos';
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
   $scope.pros=$rootScope.pro;
        
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
         $scope.eliminar = function(index, codigo){
               if ( confirm("¿Está seguro que desea eliminar el usuario seleccionado?") ) {
            $scope.cursosxprofe.splice(index,1);
            $http.post('api/eliminarcurso.php', { id: codigo } )
              .success(function(data) {
                console.log(data);
              })
              .error(function(data) {
                console.log('Error: ' + data);
                //Materialize.toast('Se encontró un problema al tratar de eliminar el usuario.', 3000);
              });
        }
         }
          //ordenamiento de tabla============
          $scope.propertyName = 'nombre';
          $scope.reverse = false;
          

          $scope.sortBy = function(propertyName) {
            //alert(propertyName);
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
          };

    });
demoApp.controller('listdistritosCtrl', function($scope, $http, $rootScope) {
   $scope.pros=$rootScope.pro;
        
         $scope.getDistritos= function(){
             $http.post('api/getDistritose.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.DistritosArray=data;
                  //comenzamos a ver los distritos por cursos
                    $http.post('api/getDistritosxProfe.php' )
                      .success(function(data) {
                        console.log(data.distritos);

                        var distritosBrutos=data.distritos;//falta dividir por comas
                        var distritosxprofeArray=distritosBrutos.split(",");
                        $scope.distritosTabla=[];
                        $.each(distritosxprofeArray, function( index, value ) {
                         // console.log( index + ": " + value );
                          $scope.distritosTabla.push({"id_distrito" : value, "nombre" : $scope.DistritosArray[value-1]})
                        });
                        console.log($scope.distritosTabla);


                      })
                      .error(function(data) {
                        console.log('Error: ' + data);
                        });
             
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getDistritos();

           $scope.getDistritoso= function(){
             $http.post('../login/api/getDistritos.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.distritos=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getDistritoso();

          
         $scope.eliminar = function(index, codigo){
               if ( confirm("¿Está seguro que desea eliminar el distrito seleccionado?") ) {
            $scope.distritosTabla.splice(index,1);
            $http.post('api/eliminardistrito.php', { id_distrito: codigo } )
              .success(function(data) {
                console.log(data);
              })
              .error(function(data) {
                console.log('Error: ' + data);
                //Materialize.toast('Se encontró un problema al tratar de eliminar el usuario.', 3000);
              });
        }
         }
         $scope.agregarDistrito = function(id_distrito){
                $http.post('api/agregardistrito.php', { id_distrito: id_distrito } )
              .success(function(data) {
                console.log(data);
                 $scope.getDistritos();
              })
              .error(function(data) {
                console.log('Error: ' + data);
                //Materialize.toast('Se encontró un problema al tratar de eliminar el usuario.', 3000);
              });
         }

    });
demoApp.controller('metodoCtrl', function($scope, $http, $rootScope) {
        
         $scope.presencial= function(){
            $rootScope.cursoxprofe.modalidad=1;
             $scope.guardarcurso();
         };
          $scope.online= function(){
            $rootScope.cursoxprofe.modalidad=0;
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
                    location.href=location.protocol+"//"+location.hostname+location.pathname+"#/listcursos";
            //window.location.href='#listcursos';
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
                location.href=location.protocol+"//"+location.hostname+location.pathname+"#/metodo";
                //window.location.href='#metodo';
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
demoApp.controller('historialCtrl', function($scope, $http, $rootScope) {
   $scope.pros=$rootScope.pro;
      $scope.getclases=function(){
            $http.post('api/getclases.php' )
                        .success(function(data) {
                          console.log(data);
                          $scope.clases=data;
                          
                        })
                        .error(function(data) {
                          console.log('Error: ' + data);
                          });
            };
           $scope.getclases();

           $scope.revisardetalle=function(id){
               location.href=location.protocol+"//"+location.hostname+location.pathname+"#/clase/"+id;
                         
           };
           //ordenamiento de tabla============
          $scope.propertyName = 'fecha';
          $scope.reverse = true;
          

          $scope.sortBy = function(propertyName) {
            //alert(propertyName);
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
          };

    });

demoApp.controller('claseCtrl', function($scope, $http, $rootScope, $routeParams) {

    $scope.pros=$rootScope.pro;
   $scope.init = function(){
          var id_clase = $routeParams.id;
          //console.log(id);
        $http.post('api/getclase.php', {id_clase: id_clase} )
                .success(function(data) {
                  console.log(data);
                  $rootScope.clase=data;
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
           $scope.pros=$rootScope.pro; 
      $scope.updateProfesor =function(pro){ 

        if($scope.file!=null){
          var name = $scope.name;
          var file = $scope.file;
          
          upload.uploadFile(file, name).then(function(res)
          {
            console.log(res);
          })
        }
        console.log(pro);
               $http.post('api/updateProfe.php', {pro:pro} )
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
