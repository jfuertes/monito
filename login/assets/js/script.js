// script.js


    // include ngRoute for all our routing needs
var loginApp = angular.module('loginApp', ['ngRoute']);

    // configure our routes
loginApp.config(function($routeProvider) {
$routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/login.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/formulario', {
                templateUrl : 'pages/formulario.html',
                controller  : 'formularioCtrl'
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


loginApp.controller('formularioCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });
