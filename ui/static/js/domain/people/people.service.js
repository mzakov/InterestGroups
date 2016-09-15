export default
['$http', 'srvUrl', 
 class PeopleService {
	/* @ngInject */
	constructor($http, srvUrl) {
		this.$http = $http
		this.srvUrl = srvUrl
	}

	getAllPeople($http) {
		return $http.get(this.srvUrl + 'people/') 
		}
}]