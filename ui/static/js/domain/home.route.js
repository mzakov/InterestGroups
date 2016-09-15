export default
['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/home', {
				template: "<home></home>"
			})
			.otherwise('/home')
	}
]