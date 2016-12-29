// script.js


    // include ngRoute for all our routing needs
    var demoApp = angular.module('demoApp', ['ngRoute']);

    // configure our routes
    demoApp.config(function($routeProvider) {
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

            });
    });

    // create the controller and inject Angular's $scope
 demoApp.controller('mainCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Hello world, this is the home page!';
    });

    demoApp.controller('alumnoCtrl', function($scope, $http, $rootScope) {

           $scope.cursos= function(id){
            alert(id);
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

    demoApp.controller('profesorCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });

    demoApp.controller('cursosCtrl', function($scope, $http, $rootScope) {
        $scope.cursos= function(){
            window.location.href='#';
            console.log("entra en la consola scope boton1");
      }
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
