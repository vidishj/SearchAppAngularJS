var flightsearch = angular.module('flightSearch', []);

flightsearch.controller('flightList', function ($scope, $http) {
    $http.get('flights-list.json').success(function (data) {
        $scope.flights = data;
        
        $scope.addToList = function (data) {
     
            $scope.list = [];
            angular.forEach($scope.flights, function(value,index){
                if(value.source == $scope.from && value.destination == $scope.destination && value.departdate == $("#departuredate").datepicker.parseDate("yy-mm-dd", "2007-01-26")
                {   
                    $scope.list.push(value);
                    alert(value);
                }
                alert($("#departuredate").datepicker("getDate") + value.departdate);
            });
            return $scope.list;           
        };
    });
});