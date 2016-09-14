angular.module('app').service('UserDetailService', ['$http', 'srvUrl', function($http, srvUrl) {
	
	var url = 'people/';
	
	this.getUserDetails = function(id) { return $http.get(srvUrl + url + id) };
	
	this.patchUser = function(person) { return $http.patch(srvUrl + url + person.id, person) }; 
	
	this.getInterests = function() { return $http.get(srvUrl + 'interests/') };
	
	this.getGroups = function(city_id) { return $http.get(srvUrl + 'cities/' + city_id + '/groups/')};
	
	this.getCities = function(state_id) { return $http.get(srvUrl + 'states/' + state_id + '/cities/')};
	
	this.getStates = function() { return $http.get(srvUrl + 'states/')};
}])