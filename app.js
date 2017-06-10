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
   this.citta = 'New York, NY'; 
});

// CONTROLLER
meteoApp.controller('homeController', ['$scope', 'cittaService', function($scope, cittaService) {
  $scope.citta = cittaService.citta;
    
  $scope.$watch('citta', function(){
    cittaService.citta = $scope.citta;    
  });
}]);

meteoApp.controller('previsioniController', ['$scope', 'cittaService', function($scope, cittaService) {
  $scope.citta = cittaService.citta;
  
}]);