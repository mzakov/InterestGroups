angular.module('app').controller('UserDetailController', ['UserDetailService', '$routeParams', '$scope' ,function(UserDetailService, $routeParams, $scope)
{
	
	
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
	

//	ctrl.getGroupInfo = function(person, groups) { 
//		
//		let enabledGroupIds = person.groups.map(group => {return group.id});
//		
//		return groups.map((group) => {
//			let res = { 'groupName' : group.name, 'enabled' : false }
//			
//			if(enabledGroupIds.includes(group.id)){
//				res.enabled = true;
//			}
//			return res;
//		});
//			
//	}
	
	UserDetailService.getUserDetails($routeParams.id).then(function(result){
		ctrl.person = result.data;
		return ctrl.person;
	}).then(person => {
		let id = person.city.id;
		UserDetailService.getGroups(id).then(function(result){
			ctrl.groups = result.data;
			return person;
		}).then((person) => {
			UserDetailService.getInterests().then(function(result){
				ctrl.interests = result.data;
				console.dir(ctrl.interests);
				return person;
			}).then((person) => {
				UserDetailService.getCities(person.city.state.id).then(function(result){
					ctrl.cities = result.data;
					console.dir(person.city.state.id);
				}).then(() => {
					UserDetailService.getStates().then(function(result){
						ctrl.states = result.data;
						console.dir(ctrl.states);
					});
				});
			});
		});
		
		return person;
	})


	ctrl.isMember = function(groups, group_id) {
		var groupsIds = groups.map((group) => {return group.id});
		return groupsIds.includes(group_id);
	};
	
	ctrl.update = function(person) {
		UserDetailService.patchUser(person);
	}

	$scope.interestsConfig = {
		displayProp: "name",
		idProp: "id",
		smartButtonMaxItems: 3,
		smartButtonTextConverter: function(itemText, originalItem) {
			return itemText;
		},
		externalIdProp: ''
	}
	$scope.statesConfig = {
			displayProp: "name",
			idProp: "id",
			selectionLimit: 1,
			scrollable: "true",
			scrollableHeight: "300px",
			smartButtonMaxItems: 3,
			smartButtonTextConverter: function(itemText, originalItem) {
				return itemText;
			},
			enableSearch: true,
			externalIdProp: ''
		}
	
//	console.dir(groupsIds);

	
}]);