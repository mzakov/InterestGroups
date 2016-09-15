import '../domain/user/UserService.js'
import '../domain/user/UserDetailService.js'
import '../domain/interests/InterestsService.js'
import home from './app.component.js'

angular.
  module('app').
  config(['$routeProvider', 'baseRoute', 'homePage',
    function config($routeProvider, baseRoute, homePage) {

      $routeProvider.
      	when('/home', home).
      	when('/people', {
          
          templateUrl: baseRoute + 'user/userTemplate.html',
          controller: 'UserController',
          controllerAs: 'userController',
          resolve: {
          
          allUsers:['UserService', function(UserService){
	      return UserService.getAllUsers();
          }]
          }
        
        }).
        when('/people/:id', {
        	
        	templateUrl: baseRoute + 'user/userDetailTemplate.html',
        	controller: 'UserDetailController',
        	controllerAs: 'userDetailController',
        }).
        
        when('/interests', {
            
            templateUrl: baseRoute + 'interests/interestsTemplate.html',
            controller: 'InterestsController',
            controllerAs: 'interestsController',
            resolve: {
            	
            allInterests:['InterestsService', function(InterestsService){
            return InterestsService.getAllInterests();
            }]
          	}

          }).
         when('/interests/:id', {
          	
            templateUrl: baseRoute + 'interests/interestsTemplate.html',
            controller: 'InterestsController',
          	controllerAs: 'interestsController',
          	
          	}).
        otherwise('/home');
    }
  ]);