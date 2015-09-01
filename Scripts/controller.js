var flightsearch = angular.module('flightSearch', []);

flightsearch.controller('flightList', function ($scope, $http) {
    $http.get('flights-list.json').success(function (data) {
        $scope.flights = data;
        
        $scope.addToList = function (data) {
     
            $scope.list = [];
            angular.forEach($scope.flights, function(value,index){
                if(value.source == $scope.from && value.destination == $scope.destination && value.departdate == $("#departuredate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val() && value.returndate == $("#returndate").datepicker({ dateFormat: 'dd,MM,yyyy' }).val() )
                {   
                    $scope.list.push(value);
                    
                }
                
            });
            return $scope.list;           
        };
    });
});