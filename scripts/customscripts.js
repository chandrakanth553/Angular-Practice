var myApp = angular
            .module('myApp',[])
            .controller('myController',function($scope){
                var country = {
                    name:'INDIA',
                    capatial: "Delhi",
                    flag:'Images/India.png'
                };

                $scope. India = country;
            });