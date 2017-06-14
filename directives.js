// DIRETTIVE
meteoApp.directive('meteoReport', function(){
   return {
      restrict: 'E',
      templateUrl: 'directives/meteoReport.html',
      scope: {
        meteoGiorno: '=',
        convertiStandard: '&',
        convertiData: '&',
        formatoData: '@'
      }
   };
});