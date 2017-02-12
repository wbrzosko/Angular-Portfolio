var myApp = angular.module('myApp', ['ngRoute', 'angular-parallax']);

myApp.config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'portfolioList'
    })
    .when('/portfolio/:id', {
        templateUrl: 'pages/portfolio.html',
        controller: 'portfolioItem'
    })
    
}); 

myApp.factory('portfolioItems', function($http) {
    return {
        getData: function() {
            return $http.get('json/portfolio.json');
        }
    }
    
});

myApp.factory('skillsItems', function($http) {
    return {
        getData: function() {
            return $http.get('json/skills.json');
        }
    }
    
});

myApp.controller('portfolioList', ['$scope', '$log', 'portfolioItems', function($scope, $log, portfolioItems) {
    $scope.item = 'This is main site.';
    $scope.portfolio = null;
    portfolioItems.getData()
        .success( function(data) {
            $scope.portfolio = data.portfolio;
        })
        .error( function(data,status,error,config) {
            $scope.portfolio = 'Error loading data...'; 
    });
}]);

myApp.controller('portfolioItem', ['$scope', '$log', '$routeParams', 'portfolioItems', function($scope, $log, $routeParams, portfolioItems) {
    $scope.item = 'Portfolio.';
    $scope.id = $routeParams.id;
    portfolioItems.getData()
        .success( function(data) {
            $scope.portfolio = data.portfolio[$scope.id];
        })
        .error( function(data,status,error,config) {
            $scope.portfolio = 'Error loading data...'; 
    });
}]);

myApp.controller('SkillsController', function($scope, skillsItems) {
   skillsItems.getData()
   .success(function(data) {
       $scope.skills = data.skills;
   })
   .error( function(data,status,error,config) {
      $scope.skills = 'Error loading data...'; 
   });
});
