angular.module('app').controller('UserController', ['UserService','allUsers', function UserController(UserService, allUsers) {

	var ctrl = this;
	
	ctrl.people = allUsers.data;
	
	console.dir(ctrl.people);
	
}]);