var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope,$http,$log) {
// Creatinh HTTP Service for angular app. That will contain objects
            $http({
                    method:'GET',
                    url:'http://localhost:50633/webservices.asmx/GetAllEmployees'
            }).then(function(responce){
                    $scope.employees = responce.data;
                    $log.info(responce);
            },function(reason){
                    $scope.error = reason.data;
                    $log.info(reason);
            });
        });