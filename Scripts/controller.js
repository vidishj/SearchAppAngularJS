var flightsearch = angular.module('flightSearch', []);

flightsearch.controller('flightList', function ($scope, $http) {
    $http.get('flights-list.json').success(function (data) {
        $scope.flights = data;
        
        $scope.addToList = function (data) {
     
            $scope.list = [];
            angular.forEach($scope.flights, function(value,index){
                if(value.source == $scope.from && value.destination == $scope.destination)
                {   
                    $scope.list.push(value);
                    //alert(value.price);
                }
                
            });
            return $scope.list;           
        };
    });
});