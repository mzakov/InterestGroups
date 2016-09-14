angular.module('app').service('InterestsService', ['$http', 'srvUrl', function($http, srvUrl){

	var url = 'interests/';
	this.getAllInterests = function() { return $http.get(srvUrl + url) };
}]);