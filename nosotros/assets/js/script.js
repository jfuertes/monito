// script.js


    // include ngRoute for all our routing needs
var nosotrosApp = angular.module('nosotrosApp', ['ngRoute']);

    // configure our routes
nosotrosApp.config(function($routeProvider) {
$routeProvider
            // route for the contact page
            .when('/ayuda_escuelas', {
                templateUrl : 'pages/ayuda_escuelas.html',
                controller  : 'ayuda_escuelasCtrl'
            })
            // route for the contact page
            .when('/contactanos', {
                templateUrl : 'pages/contactanos.html',
                controller  : 'contactanosCtrl'
            })
            .when('/equipo', {
                templateUrl : 'pages/equipo.html',
                controller  : 'equipoCtrl'
            })
            // route for the about page
            .when('/miprofe', {
                templateUrl : 'pages/miprofe.html',
                controller  : 'miprofeCtrl'
            })
            // route for the about page
            .when('/miprofe_escuelas', {
                templateUrl : 'pages/miprofe_escuelas.html',
                controller  : 'miprofe_escuelasCtrl'
            })
            // r
            .when('/soluciones', {
                templateUrl : 'pages/soluciones.html',
                controller  : 'solucionesCtrl'
            })
            
            .otherwise({ templateUrl : 'pages/notfound.html' 
        });
    });

    // create the controller and inject Angular's $scope
nosotrosApp.controller('ayuda_escuelasCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Hello world, this is the home page!';
    });

nosotrosApp.controller('contactanosCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });

nosotrosApp.controller('equipoCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });

nosotrosApp.controller('miprofeCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Hello world, this is the home page!';
    });

nosotrosApp.controller('fmiprofe_escuelasCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });

nosotrosApp.controller('solucionesCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });
