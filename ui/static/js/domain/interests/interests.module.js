import interests from './interests.component.js'
import InterestsService from './interests.service.js'
import interestsRoute from './interests.route.js'

export default
	angular
		.module('interests', ['ngRoute', 'angularjs-dropdown-multiselect', 'person'])
		.component('interests', interests)
		.config(interestsRoute)
		.service('InterestsService', InterestsService)
		.name