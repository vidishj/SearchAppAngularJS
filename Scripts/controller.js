var flightsearch = angular.module('flightSearch', []);
var flights;



flightsearch.controller('flightList', ['$scope', '$http', 'flightSearchService', function ($scope, $http, flightSearchService) {
        $scope.searchFlights = function(data) {
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
        
    });
   
    return {
        getFlights : function(){
        var sourcecity = document.getElementById("source").value;
        var destinationcity = document.getElementById("destination").value;
        
        
            
        var list = [];
        
        angular.forEach(flights, function(value, index){
            if (value.source == sourcecity && value.destination == destinationcity && value.departdate == $("#departuredate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val() && value.returndate == $("#returndate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val() )
            {
                list.push(value);
                
            }
            
        });
    return list;
        }
    };
});
