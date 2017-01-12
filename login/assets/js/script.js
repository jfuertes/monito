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
            .when('/forgot_password', {
                templateUrl : 'pages/forgot_password.html',
                controller  : 'forgot_passwordCtrl'
            })
            .otherwise({ templateUrl : 'pages/notfound.html' 
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

loginApp.controller('forgot_passwordCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });
