// script.js


    // include ngRoute for all our routing needs
var demoApp = angular.module('demoApp', ['ngRoute']);

    // configure our routes
demoApp.config(function($routeProvider) {
$routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/listcursos.html',
                controller  : 'listcursosCtrl'
            })


            .when('/universidades', {
                templateUrl : 'pages/universidades.html',
                controller  : 'universidadesCtrl'
            })

            .when('/pass', {
                templateUrl : 'pages/pass.html',
                controller  : 'passCtrl'
            })

            .when('/adduni', {
                templateUrl : 'pages/adduni.html',
                controller  : 'adduniCtrl'
            })

            .when('/addcurso', {
                templateUrl : 'pages/addcurso.html',
                controller  : 'addcursoCtrl'
            })
            .when('/addbloque', {
                templateUrl : 'pages/addbloque.html',
                controller  : 'passCtrl'
            })
               .when('/metodo', {
                templateUrl : 'pages/metodo.html',
                controller  : 'metodoCtrl'

            })
             .when('/listcursos', {
            templateUrl : 'pages/listcursos.html',
            controller  : 'listcursosCtrl'

            })
            .when('/alumnos', {
                templateUrl : 'pages/alumnos.html',
                controller  : 'alumnosCtrl'
            })
            .when('/profesores', {
                templateUrl : 'pages/profesores.html',
                controller  : 'profesoresCtrl'
            })
            .otherwise({ templateUrl : 'pages/notfound.html' 
        });
              
    });

 demoApp.controller('mainCtrl', function($scope, $http, $rootScope) {
  
 console.log("mainCtrl");
          

      
    });