var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'portfolioController'
    })
    .when('/portfolio/:id', {
        templateUrl: 'pages/portfolio.html',
        controller: 'portfolioItem'
    })
    
}); 

myApp.factory('PortfolioItems', function() {
    
});

myApp.controller('portfolioController', ['$scope','$log', function($scope, $log) {
    $scope.item = 'This is main site.';
}]);

myApp.controller('portfolioItem', ['$scope','$log', '$routeParams', function($scope, $log, $routeParams) {
    $scope.item = 'Portfolio.';
    $scope.id = $routeParams.id;
}]);