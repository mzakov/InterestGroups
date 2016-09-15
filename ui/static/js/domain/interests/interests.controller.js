export default
['$log', '$scope', 'InterestsService', '$http',
 /* @ngInject */
 class InterestsController {
   constructor ($log, $scope, InterestsService, $http) {
 	
 	$scope.loaded = false
 	
 	$log.debug('InterestsController instantiated')
     
 	InterestsService.getAllInterests($http).then((interests) => {
 		this.interests = interests.data
 	})
 	$scope.loaded = true
 	console.dir(this.interests)
   }
 }]