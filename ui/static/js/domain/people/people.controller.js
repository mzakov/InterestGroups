export default
['$log', '$scope', 'PeopleService', '$http',
 /* @ngInject */
 class PeopleController {
   constructor ($log, $scope, PeopleService, $http) {
 	
 	$scope.loaded = false
 	
 	$log.debug('PeopleController instantiated')
     
 	PeopleService.getAllPeople($http).then((people) => {
 		this.people = people.data
 	})
 	$scope.loaded = true
 	console.dir(this.people)
   }
 }]