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
            .when('/bloquecurso', {
                templateUrl : 'pages/bloquecurso.html',
                controller  : 'bloquecursoCtrl'
            })
            .when('/nivelbloque', {
                templateUrl : 'pages/nivelbloque.html',
                controller  : 'nivelbloqueCtrl'
            })
            .when('/nivelcurso', {
                templateUrl : 'pages/nivelcurso.html',
                controller  : 'nivelcursoCtrl'
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
            .when('/alumno', {
                templateUrl : 'pages/alumno.html',
                controller  : 'alumnoCtrl'
            })
             .when('/clase', {
                templateUrl : 'pages/clase.html',
                controller  : 'claseCtrl'
            })
            .otherwise({ templateUrl : 'pages/notfound.html' 
        });
              
    });

 demoApp.controller('mainCtrl', function($scope, $http, $rootScope) {
  
 console.log("mainCtrl");
          

      
    });