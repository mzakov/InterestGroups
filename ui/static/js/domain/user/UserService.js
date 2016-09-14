/**
 * 
 */

angular.module('app').service('UserService',['$http', 'srvUrl', function($http, srvUrl){

	var url = 'people/';
	
	this.getAllUsers = function() { return $http.get(srvUrl + url) };

	
}]);