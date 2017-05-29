var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope,$http) {

            $http.get('http://localhost:50633/webservices.asmx//GetAllEmployees').then(function(res){
                $scope.employees = res.data;
            });
        });