// Adding controller modules in one line using "Method Chaning"

var myApp = angular
            .module('myApp',[])
            .controller('myController',function($scope){
                var employee = {
                    firstname:'chandu',
                    lastname:'kanth',
                    phNo:8168594318
                };
// What you will attach to $scope object is act as Model in Application you can use that model in View to display
                $scope.chandu = employee;
            });

// Another way to careate Controller with out Method Chaining



myApp.controller('myAppController',function($scope){
    var Student = {
        firstname:"chandrakanth",
        lastname:"Thadkapally",
        Email: "sample.angular@gmail.com"
    };
    $scope.student = Student;
});