export default
['$http', 'srvUrl', 
 class InterestsService {
	/* @ngInject */
	constructor($http, srvUrl) {
		this.$http = $http
		this.srvUrl = srvUrl
	}

	getAllInterests($http) {
		return $http.get(this.srvUrl + 'interests/') 
		}
}]