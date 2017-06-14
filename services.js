// SERVICE PERSONALIZZATI
meteoApp.service('cittaService', function(){
   this.citta = 'Lissone, Italy'; 
});

meteoApp.service('meteoService', ['$resource', function($resource){
  this.GetMeteo = function(citta, giorni) {
    var meteoAPI = $resource('https://cors.now.sh/http://api.openweathermap.org/data/2.5/forecast/daily?APPID=e4ce5e259c3b4f09931b2181616b1d29', { callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
    
    return meteoAPI.get({q: citta, cnt: giorni});
  };
}]);