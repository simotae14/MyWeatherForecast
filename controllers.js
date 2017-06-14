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

meteoApp.controller('previsioniController', ['$scope', '$routeParams', 'cittaService', 'meteoService', function($scope, $routeParams, cittaService, meteoService) {
  $scope.citta = cittaService.citta;
  $scope.giorni = $routeParams.giorni || '2';
    
  $scope.meteoResult = meteoService.GetMeteo($scope.citta, $scope.giorni); 
  
  $scope.convertiInData = function(dt) {
        return new Date(dt * 1000);
    };
  $scope.convertiInCelsius = function(degK) {
      return Math.round(degK - 273);  
    };
}]);