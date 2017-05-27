var myApp = angular
            .module('myApp',[])
            .controller('myController',function($scope){
                $scope.chandu = "This tutorial for NG-Modle";
            });

myApp.controller('myAppController', function($scope){
    var Employee = {
        firstname: "chandu",
        lastname:'kanth',
        Email:'chandu@gmail.com'
    };

    $scope.employee = Employee;
});