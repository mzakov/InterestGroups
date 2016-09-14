angular.module('app').controller('InterestsController', ['InterestsService', 'allInterests', function InterestsController(InterestsService, allInterests) {

	var ctrl = this;
	
	ctrl.interests = allInterests.data;
	
	console.dir(ctrl.interests);
	
}]);