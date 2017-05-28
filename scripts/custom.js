var myApp = angular
            .module('myApp', [])
            .controller('myController',function($scope){
                var employees = [
                    { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
                    { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
                    { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
                    { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
                    { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }
                ];

                $scope.Emp = employees;

                var countries = [
                    {
                        name: "UK",
                        cities: [
                            { name: "London" },
                            { name: "Birmingham" },
                            { name: "Manchester" }
                        ]
                    },
                    {
                        name: "USA",
                        cities: [
                            { name: "Los Angeles" },
                            { name: "Chicago" },
                            { name: "Houston" }
                        ]
                    },
                    {
                        name: "India",
                        cities: [
                            { name: "Hyderabad" },
                            { name: "Chennai" },
                            { name: "Mumbai" }
                        ]
                    }
                ];

                $scope.count = countries;
            });