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

            .when('/distritos', {
                templateUrl : 'pages/distritos.html',
                controller  : 'distritosCtrl'
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
                  $rootScope.Nivel=data;
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
  $scope.show=[];
         $scope.getNivel= function(){
             $http.post('api/getNivel.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.Nivel=data;
                  $rootScope.Nivel=data;
                  $scope.optionsNivel=$rootScope.Nivel;
                    $scope.show.nivel=$rootScope.nivel;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getNivel();

   //$scope.show.nivel=$rootScope.nivel;
         $scope.show.id_curso=$rootScope.idcurso;
         $scope.show.Metodo=$rootScope.modalidad;
     //   $scope.optionsNivel=$rootScope.Nivel;

       $scope.getCursosByNivel= function(showNivel){
            $http.post('../api/getsCursosByNivel.php',{nivel: showNivel} )
                .success(function(data) {
                  console.log(data);
                  $scope.optionsCursos=data;
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
              };
              $scope.getCursosByNivel( $scope.show.nivel);
  $scope.getDistritos= function(){
             $http.post('../login/api/getDistritos.php' )
                .success(function(data) {
                  console.log(data);
                  $scope.optionsDistritos=data;
                   $scope.show.Iddistrito=$rootScope.dis;
                  // alert($scope.showIddistrito);
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
         };
         $scope.getDistritos();
console.log($scope.show);


    $scope.showlistprofes=function(){
          if ($rootScope.modalidad==1) {
                $scope.SinProfes=false;
                $scope.SinProfesendistrito=false;

                  $http.post('api/getProfeByCursoanddistrito.php', {id_curso: $rootScope.idcurso, modalidad: $rootScope.modalidad, distrito: $rootScope.dis} )
                //  $http.post('api/getProfeByCurso.php', {id_curso: $rootScope.idcurso, modalidad: $rootScope.modalidad, distrito: $rootScope.dis} )
                              .success(function(data) {
                                console.log(data);
                                $scope.Profes=data.success;
                                $scope.ProfesGenericos=data.todos;
                                if(data.success=false){
                                  $scope.SinProfesendistrito=true;
                                }
                                else if(data.todos.length==0){
                                  $scope.SinProfes=true;
                                }

                              })
                              .error(function(data) {
                                console.log('Error: ' + data);
                                });
                }

           else{
                  $scope.SinProfes=false;
                  $scope.SinProfesendistrito=false;

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
                }
                
    }

     $scope.newsearchprofe=function(){
          //alert("ola");
          console.log("nueva busqueda");
         $rootScope.idcurso= $scope.show.id_curso;
         $rootScope.modalidad= $scope.show.Metodo;
         $rootScope.dis= $scope.show.Iddistrito;

          $scope.showlistprofes();
         };



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
                          location.href=location.protocol+"//"+location.hostname+location.pathname+"#/distritos";
                          // window.location.href='#listaprof';

                        })
                        .error(function(data) {
                          console.log('Error: ' + data);
                          });
            };
    });
demoApp.controller('distritosCtrl', function($scope, $http, $rootScope) {

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


      $scope.agregarDistrito= function(dis){
        $rootScope.dis=dis;
           
                    location.href=location.protocol+"//"+location.hostname+location.pathname+"#/listaprof";
                    // window.location.href='#listaprof';

              
      }

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

           $scope.propertyName = 'fecha';
          $scope.reverse = true;
          

          $scope.sortBy = function(propertyName) {
            //alert(propertyName);
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
          };

    });

demoApp.controller('claseCtrl', function($scope, $http, $rootScope, $routeParams) {
    var id_clase = $routeParams.id;
      $scope.getAlumno= function(){
         $http.post('api/getdataAlumno.php' )
                          .success(function(data) {
                            console.log(data);
                            $scope.alus=data;

                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });
    }
    $scope.getAlumno();
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
                    location.reload();//qwerty
         
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
  
 

   $scope.haycursoenrootscope=false;
if(typeof $rootScope.idcurso == 'undefined') {//en caso no exista guardado un curso desde atras en el rootscope
  $scope.haycursoenrootscope=true;
  //alert($rootScope.idcurso);
}
//alert(typeof $scope.idcurso == 'undefined');
$scope.antesContactar=true;
   $scope.init = function(){
          var username = $routeParams.id;
          //console.log(id);
          
        $http.post('api/getProfeByusername.php', {username: username} )
                .success(function(data) {
                  console.log(data);
                  $rootScope.pro=data;
                   $( ".agregarvideo" ).append( "<p> <iframe width='560' height='315' src='https://www.youtube.com/embed/"+data['link2view']+"' frameborder='0' allowfullscreen></iframe></p>" );

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
                 
                    //asignar curso al que te estas metiendo en variables locales
                  $scope.valoresactuales=[];
                  $scope.valoresactuales.modalidad=$rootScope.modalidad
                  $.each(data, function( k, v ) {
                      if(v['id_curso']==$rootScope.idcurso){
                            $scope.valoresactuales.nombre=v['nombre']
                            $scope.valoresactuales.nivel=v['nivel']
                      }
                      
                    });
                  
 
                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
      };

 $scope.getcursosxprofe();

        $scope.contactar = function () {
          
            console.log("mostrar numeros y datos");
              $scope.antesContactar = false
              //funcion para generar clase que falta
           
        }
           $scope.solicitarClase = function () {
           if (confirm("esta seguro que desea solicitar una clase?")) {
            console.log("confirmaste!");
            //funcion para agregar clase
                $http.post('api/addClase.php', {id_profe: $routeParams.id, id_curso: $rootScope.idcurso, status: $rootScope.modalidad} )
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
           $scope.solicitarxtabla = function (id_curso, modalidad) {
            if(modalidad==0){//filtrar por modalidad si es online solo cambia el texto
                  if (confirm("esta seguro que desea solicitar una clase?")) {
                      console.log("confirmaste!");
                      //funcion para agregar clase
                          $http.post('api/addClase.php', {id_profe: $routeParams.id, id_curso: id_curso, status: modalidad} )
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
            else{
                   if (confirm("esta seguro que desea solicitar una clase? recuerda que solo esta disponible en esos distritos")) {
                      console.log("confirmaste!");
                      //funcion para agregar clase
                          $http.post('api/addClase.php', {id_profe: $routeParams.id, id_curso: id_curso, status: modalidad} )
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

         $scope.getDistritos= function(){
             $http.post('api/getDistritosebyidprofe.php', {id_profe: $routeParams.id} )
                .success(function(data) {
                  console.log(data);
                  $scope.DistritosArray=data;
                  //comenzamos a ver los distritos por cursos
                    $http.post('api/getDistritosbyidprofe.php', {id_profe: $routeParams.id} )
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