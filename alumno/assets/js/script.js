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

            .when('/comentar', {
                templateUrl : 'pages/comentar.html',
                controller  : 'comentarCtrl'
            })

            .when('/cursos', {
                templateUrl : 'pages/cursos.html',
                controller  : 'cursosCtrl'
            })
          .when('/perfil', {
                templateUrl : 'pages/perfil.html',
                controller  : 'perfilCtrl'
            })

          .when('/comentario', {
                templateUrl : 'pages/comentario.html',
                controller  : 'comentarioCtrl'
            })

            .when('/historial', {
                templateUrl : 'pages/historial.html',
                controller  : 'historialCtrl'
            })
             .when('/clase/:id', {
                templateUrl : 'pages/clase.html',
                controller  : 'claseCtrl'
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
       $scope.getNClases= function(){
         $http.post('api/getNClases.php' )
                          .success(function(data) {
                            console.log(data);
                            $scope.nClases=data;

                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
    }
    $scope.getNClases();

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
       $http.post('api/checkperfilprofe.php' )
                .success(function(data) {
                  console.log(data);
                  if(data!=0){
                     window.location.href='#perfilprofe/'+data+'';
                  }
                 
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });

      
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
    $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso, modalidad: $rootScope.modalidad} )
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
        $rootScope.modalidad=0;
            $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso, modalidad: $rootScope.modalidad} )
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
                $rootScope.modalidad=1;
            $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso, modalidad: $rootScope.modalidad} )
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
demoApp.controller('historialCtrl', function($scope, $http, $rootScope) {
  //agregar detalles
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

    });

demoApp.controller('claseCtrl', function($scope, $http, $rootScope, $routeParams) {
    var id_clase = $routeParams.id;
   // $scope.yaCalificaste=true;
   $scope.init = function(){
    $scope.viewcomentar=false;
    $scope.calificarnn=false;
         
          //console.log(id);
        $http.post('api/getclase.php', {id_clase: id_clase} )
                .success(function(data) {
                    $scope.clase=data;
                   
                  if(data[0].comentario==null || data[0].puntuacion==null){
                        $scope.calificarnn=true;
                  }
                 console.log(  data);
                 
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });

              }
              $scope.init();



          $scope.calificar = function(){
            $scope.viewcomentar=true;
            console.log("comentar");

          };
          $scope.enviardata = function(co){
            console.log(co);
                $http.post('api/enviarcoment.php', {co: co, id_clase: id_clase} )
                .success(function(data) {
                  console.log(data);
                  $rootScope.clase=data;
                   // location.reload();//qwerty
         
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
              }
          
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
                                     $http.post('api/sendmail.php', {us :us} )
                                        .success(function(data) {
                                          console.log(data);
                                        })
                                        .error(function(data) {
                                          console.log('Error: ' + data);
                                          });
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

      $scope.getcursosxprofe =function(){
                $http.post('api/getcursosxprofe.php', {id_profe: $routeParams.id} )
                .success(function(data) {
                  console.log(data);
                  $scope.getcursosxprofe=data;
                
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
      };

 $scope.getcursosxprofe();

        $scope.contactar = function () {
           if (confirm("esta seguro que desea solicitar una clase?")) {
            console.log("confirmaste!");
              $scope.antesContactar = false
              //funcion para generar clase que falta
           }
        }
           $scope.solicitarClase = function () {
           if (confirm("esta seguro que desea solicitar una clase?")) {
            console.log("confirmaste!");
            //funcion para agregar clase
                $http.post('api/addClase.php', {id_profe: $routeParams.id, id_curso: $rootScope.idcurso} )
                .success(function(data) {

                  console.log(data);
                  $scope.clasea=data;
                   location.href=location.protocol+"//"+location.hostname+location.pathname+"#/clase/"+data.id;
                  
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
              //funcion para generar clase que falta
           }
        }
           $scope.solicitarxtabla = function (id_curso) {
           if (confirm("esta seguro que desea solicitar una clase?")) {
            console.log("confirmaste!");
            //funcion para agregar clase
                $http.post('api/addClase.php', {id_profe: $routeParams.id, id_curso: id_curso} )
                .success(function(data) {

                  console.log(data);
                  $scope.clasea=data;
                   location.href=location.protocol+"//"+location.hostname+location.pathname+"#/clase/"+data.id;
                  
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
              //funcion para generar clase que falta
           }
        }
        $scope.getComentsxprofe = function(){
                $http.post('api/getComentsxprofe.php', {id_profe: $routeParams.id} )
                .success(function(data) {
                  console.log(data);
                  $scope.Comentarios=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
        }
        $scope.getComentsxprofe();

    
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