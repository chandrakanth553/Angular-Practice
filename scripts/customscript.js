
// Creating Module using Angular.modules methos
var myApp = angular.module('myApp',[]);

function mycontroller($scope){
    $scope.chandu =" Welcome to ANgular Js";
};
// eacch modules having differnent type of functions
//to work on modules angular needs "Controllers"
//Initiating Controller is below.
myApp.controller('mycontroller',mycontroller);