// script.js


    // include ngRoute for all our routing needs
var loginApp = angular.module('loginApp', ['ngRoute']);

    // configure our routes
loginApp.config(function($routeProvider) {
$routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/alumno', {
                templateUrl : 'pages/alumno.html',
                controller  : 'alumnoCtrl'
            })

            // route for the contact page
            .when('/profesor', {
                templateUrl : 'pages/profesor.html',
                controller  : 'profesorCtrl'
            })


            .when('/cursos', {
                templateUrl : 'pages/cursos.html',
                controller  : 'cursosCtrl'

            })

            .when('/listaProf', {
                templateUrl : 'pages/listaProf.html',
                controller  : 'listaProfCtrl'

            })
            .when('/metodo', {
                templateUrl : 'pages/metodo.html',
                controller  : 'metodoCtrl'

            });
    });

    // create the controller and inject Angular's $scope
loginApp.controller('mainCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Hello world, this is the home page!';
    });

loginApp.controller('alumnoCtrl', function($scope, $http, $rootScope) {

           $scope.cursos= function(id){
            
            $rootScope.nivel=id;
           window.location.href='#cursos';
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

loginApp.controller('listaProfCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });



loginApp.controller('temasCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });


loginApp.controller('cursosCtrl', function($scope, $http, $rootScope) {
        $scope.cursos= function(){
            window.location.href='#';
            console.log("entra en la consola scope boton1");
      };
      $scope.ejecutar=function(id, seccion){
            if(seccion=="0"){
                    alert(id);
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
                window.location.href='#metodo';
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

loginApp.controller('metodoCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });
