var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "Templates/Home.html",
                        controller: "homeController"
                    })
                    .when("/courses", {
                        templateUrl: "Templates/Courses.html",
                        controller: "coursesController"
                    })
                    .when("/students", {
                        templateUrl: "Templates/Students.html",
                        controller: "studentsController"
                    })
            })
            .controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
             .controller("studentsController", function ($scope) {
                var students = [{"id":1,"name":"Mark","gender":"Male","city":"London"},{"id":2,"name":"John","gender":"Male","city":"Chennai"},{"id":3,"name":"Sara","gender":"Female","city":"Sydney"},{"id":4,"name":"Tom","gender":"Male","city":"New York"},{"id":5,"name":"Pam","gender":"Male","city":"Los Angeles"},{"id":6,"name":"Catherine","gender":"Female","city":"Chicago"},{"id":7,"name":"Mary","gender":"Female","city":"Houston"},{"id":8,"name":"Mike","gender":"Male","city":"Phoenix"},{"id":9,"name":"Rosie","gender":"Female","city":"Manchester"},{"id":10,"name":"Sasha","gender":"Female","city":"Hyderabad"}];
                $scope.students=students;
             });
            
