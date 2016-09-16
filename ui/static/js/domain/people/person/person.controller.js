export default
['$log', '$scope', 'PersonService', '$http', '$route',
 /* @ngInject */
 class PersonController {
   constructor ($log, $scope, PersonService, $http , $route) {
 	
 	$scope.loaded = false
 	
 	$log.debug('PersonController instantiated')
    
 	/////////////////////////////////////////////////
	$scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
	////////////////////////////////////////////////
    
    var ctrl = this;
	var city_id;
	
	PersonService.getPerson($route.current.params.id).then((result) => {
		ctrl.person = result.data;
		return ctrl.person;
		
	}).then(person => {
		let id = person.city.id;
		PersonService.getCityGroups(id).then(function(result){
			ctrl.cityGroups = result.data;
			return person;
		}).then(person => {
			PersonService.getAllGroups().then(function(result){
				ctrl.AllGroups = result.data;
				return person;
			}).then((person) => {
			PersonService.getInterests().then(function(result){
				ctrl.interests = result.data;
				console.dir(ctrl.interests);
				return person;
			}).then((person) => {
				PersonService.getCities(person.city.state.id).then(function(result){
					ctrl.cities = result.data;
					console.dir(person.city.state.id);
				}).then(() => {
					PersonService.getStates().then(function(result){
						ctrl.states = result.data;
						console.dir(ctrl.states);
					});
				});
			});
		});
		});	
		return person;
	})

	$scope.isMember = function(groups, group_id) {
		var groupsIds = groups.map((group) => {return group.id});
		return groupsIds.includes(group_id);
	};
	
	ctrl.update = function(person) {
		PersonService.patchUser(person);
	}

	$scope.interestsConfig = {
		displayProp: "name",
		idProp: "id",
		smartButtonMaxItems: 3,
		smartButtonTextConverter: function(itemText, originalItem) {
			return itemText;
		},
		enableSearch: true,
		externalIdProp: '',
		groupByTextProvider: function(groupValue) { 
			return groupValue.name
		}
	}
	$scope.statesConfig = {
			displayProp: "name",
			idProp: "id",
			selectionLimit: 1,
			scrollable: true,
			scrollableHeight: "300px",
			smartButtonMaxItems: 3,
			smartButtonTextConverter: function(itemText, originalItem) {
				return itemText;
			},
			enableSearch: true,
			externalIdProp: '',
			groupByTextProvider: function(groupValue) { 
				return groupValue.name
			}
		}
	
//	$scope.customFilter = JSON.stringify(ctrl.person)
 	$scope.loaded = true
   }
 }]