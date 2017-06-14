// CONTROLLER
meteoApp.controller('homeController', ['$scope', '$location', 'cittaService', function($scope, $location, cittaService) {
  $scope.citta = cittaService.citta;
    
  $scope.$watch('citta', function(){
    cittaService.citta = $scope.citta;    
  });
  $scope.submit = function(){
    $location.path('/previsioni');
  };
}]);

meteoApp.controller('previsioniController', ['$scope', '$resource', '$routeParams', 'cittaService', function($scope, $resource, $routeParams, cittaService) {
  $scope.citta = cittaService.citta;
  $scope.giorni = $routeParams.giorni || '2';
  $scope.meteoAPI = $resource('https://cors.now.sh/http://api.openweathermap.org/data/2.5/forecast/daily?APPID=e4ce5e259c3b4f09931b2181616b1d29', { callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
    
  $scope.meteoResult = $scope.meteoAPI.get({q: $scope.citta, cnt: $scope.giorni});
    
   $scope.convertiInData = function(dt) {
        return new Date(dt * 1000);
    };
  $scope.convertiInCelsius = function(degK) {
      return Math.round(degK - 273);  
    };
}]);