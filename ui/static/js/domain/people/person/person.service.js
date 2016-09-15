export default
['$http', 'srvUrl', 
 class PersonService {
	/* @ngInject */
	constructor($http, srvUrl) {
		this.$http = $http
		this.srvUrl = srvUrl
	}

	getPerson (id) { return this.$http.get(this.srvUrl + 'people/' + id) };
	
	patchUser (person) { return this.$http.patch(this.srvUrl + 'people/' + person.id, person) }; 
	
	getInterests () { return this.$http.get(this.srvUrl + 'interests/') };
	
	getGroups (city_id) { return this.$http.get(this.srvUrl + 'cities/' + city_id + '/groups/')};
	
	getCities () { return this.$http.get(this.srvUrl + 'cities/')};
	
	getStates () { return this.$http.get(this.srvUrl + 'states/')};
}]