var flightsearch = angular.module('flightSearch', []);
var flights;



flightsearch.controller('flightList', ['$scope', '$http', 'flightSearchService', function ($scope, $http, flightSearchService) {
        $scope.addToList = function(data) {
            alert("I am in addToList");
            $scope.flights = flightSearchService.getFlights();
        }
        //$scope.addToList = function (data) {
     
            //$scope.list = [];
            //angular.forEach($scope.flights, function(value,index){
                //if(value.source == $scope.from && value.destination == $scope.destination && value.departdate == $("#departuredate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val() && value.returndate == $("#returndate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val() )
               // {   
                 //   $scope.list.push(value);
                    
                //}
                
            //});
           // return $scope.list;           
        //};
    //});

}]);



flightsearch.factory('flightSearchService', function($http){
    $http.get('flights-list.json').success(function (data) {
        flights = data;
        alert(data);
    });
   
   
    return {
        
         
        getFlights : function(){
            
    var list = [];
          
            alert(flights);
    angular.forEach(flights, function(value, index){
        if (value.source == "MEL")
        {
            list.push(value);
            alert("I am just returning the flight list");
        }
    });
            
            
    return list;
}
    };
});
