// script.js


    // include ngRoute for all our routing needs
var demoApp = angular.module('demoApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

    // configure our routes
demoApp.config(function($routeProvider) {
$routeProvider

            // route for the home page
          
                   // route for the contact page
                 .when('/universidad', {
                templateUrl : 'pages/universidad.html',
                controller  : 'uniCtrl'
            })
                      .when('/', {
                templateUrl : 'pages/login.html',
                controller  : 'loginprevioCtrl'
            })
         
         
            .otherwise({ templateUrl : 'pages/notfound.html' 
        });
              
    });

    // create the controller and inject Angular's $scope
 demoApp.controller('mainCtrl', function($scope, $http, $rootScope) {
  
 console.log("mainCtrl");
          

      
    });
  demoApp.controller('loginprevioCtrl', function($scope, $http, $rootScope) {
  
 console.log("loginprevioCtrl");
          

      
    });

demoApp.controller('uniCtrl', function($scope, $http, $rootScope, upload) {

     $scope.correcto=false;
      $scope.agregarUniversidad=false;

      $scope.uploadFile = function()
      {
        var name = $scope.name;
        var file = $scope.file;
        
        upload.uploadFile(file, name).then(function(res)
        {
          console.log(res);
        })
      }


       $scope.init = function(){
         
      $http.post('api/getUniversidades.php')
                .success(function(data) {
                  console.log(data);
                  $scope.universidades=data;

                })
                .error(function(data) {
                  console.log('Error: ' + data);
                  });
              }
              $scope.init();

            $scope.eliminar = function(index, codigo){
               if ( confirm("¿Está seguro que desea eliminar la universidad?") ) {
            $scope.universidades.splice(index,1);
            $http.post('api/eliminaruniversidad.php', { id: codigo } )
              .success(function(data) {
                console.log(data);
              })
              .error(function(data) {
                console.log('Error: ' + data);
                //Materialize.toast('Se encontró un problema al tratar de eliminar el usuario.', 3000);
              });
        }
         }


  $scope.agregaruni=function(){
             $scope.agregarUniversidad=true;
             console.log("agregar universidad");

         }
      $scope.addUNI =function(nuni){ 
          console.log(nuni);
               $http.post('api/addUNI.php', {nuni:nuni} )
                          .success(function(data) {
                            console.log(data);
                            $scope.correcto=true;
                            location.reload();
                          })
                          .error(function(data) {
                            console.log('Error: ' + data);
                            });


        if($scope.file!=null){
          var name = $scope.name;
          var file = $scope.file;
          
          upload.uploadFile(file, name).then(function(res)
          {
            console.log(res);
          })
        }
        
      
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
    return $http.post("api/uploadFotoUNI.php", formData, {
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