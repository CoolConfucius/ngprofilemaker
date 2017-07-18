'use strict'; 

var app = angular.module('myApp', ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('skills', {url: '/', templateUrl: './html/skills.html' })
  
  $urlRouterProvider.otherwise('/'); 
});

app.controller('mainCtrl', function($scope) {

  console.log("mainCtrl");
  $scope.myskills = []; 
  
  $scope.addskill = function(skill){
    var index = $scope.myskills.indexOf(skill);
    if ( index === -1) {
      $scope.myskills.push(skill); 
    } else {
      
    }
  }
  
}); 