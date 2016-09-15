export default
['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/people', {
				template: "<people></people>"
		})
	}
]