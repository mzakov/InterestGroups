export default
['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/people/:id', {
				template: "<person></person>"
		})
	}
]