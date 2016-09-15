import person from './person.component.js'
import PersonService from './person.service.js'
import personRoute from './person.route.js'

export default
	angular
		.module('person', ['ngRoute', 'angularjs-dropdown-multiselect'])
		.component('person', person)
		.config(personRoute)
		.service('PersonService', PersonService)
		.name