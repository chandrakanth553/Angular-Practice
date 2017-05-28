var myApp = angular
            .module('myApp',[])
            .controller('myController',function($scope){
                var Lunguages =[ { name: "C#", likes: 0, dislikes: 0 },
                    { name: "ASP.NET", likes: 0, dislikes: 0 },
                    { name: "SQL", likes: 0, dislikes: 0 },
                    { name: "AngularJS", likes: 0, dislikes: 0 }];
                
                $scope.lunguages = Lunguages;

                $scope.incrementLikes =function(lunguage){
                        lunguage.likes++;
                };
                $scope.decrementLikes =function(lunguage){
                        lunguage.dislikes++;
                }
            });