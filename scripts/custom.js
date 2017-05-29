var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope,stringService) {
                $scope.trasforming = function(input){
                         $scope.output = stringService.validstring(input);
                }
        });