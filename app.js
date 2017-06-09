// MODULO
var meteoApp = angular.module('meteoApp', ['ngRoute', 'ngResource']);

// ROUTE
meteoApp.config(function($routeProvider){
  $routeProvider
  
  .when('/', {
    templateUrl: 'pages/home.htm',
    controller: 'homeController'
  })
  
  .when('/previsioni', {
    templateUrl: 'pages/previsioni.htm',
    controller: 'previsioniController'
  })
});

// CONTROLLER
meteoApp.controller('homeController', ['$scope', function($scope) {
  
}]);

meteoApp.controller('previsioniController', ['$scope', function($scope) {
  
}]);