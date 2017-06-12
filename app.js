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

// SERVICE PERSONALIZZATI
meteoApp.service('cittaService', function(){
   this.citta = 'Lissone, Italy'; 
});

// CONTROLLER
meteoApp.controller('homeController', ['$scope', 'cittaService', function($scope, cittaService) {
  $scope.citta = cittaService.citta;
    
  $scope.$watch('citta', function(){
    cittaService.citta = $scope.citta;    
  });
}]);

meteoApp.controller('previsioniController', ['$scope', '$resource', 'cittaService', function($scope, $resource, cittaService) {
  $scope.citta = cittaService.citta;
  $scope.meteoAPI = $resource('https://api.openweathermap.org/data/2.5/forecast/daily?APPID=e4ce5e259c3b4f09931b2181616b1d29', { callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
    
  $scope.meteoResult = $scope.meteoAPI.get({q: $scope.citta, cnt: 2});
    
   $scope.convertiInData = function(dt) {
        return new Date(dt * 1000);
    };
  $scope.convertiInCelsius = function(degK) {
      return Math.round(degK - 273);  
    };
}]);