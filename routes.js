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
    
  .when('/previsioni/:giorni', {
    templateUrl: 'pages/previsioni.htm',
    controller: 'previsioniController'
  })
});