import angular from 'angular'
import ngRoute from 'angular-route/angular-route.js'
import 'angularjs-dropdown-multiselect/src/angularjs-dropdown-multiselect.js'
import people from './people.component.js'
import PeopleService from './people.service.js'
import peopleRoute from './people.route.js'

export default
	angular
		.module('people', ['ngRoute', 'angularjs-dropdown-multiselect'])
		.component('people', people)
		.config(peopleRoute)
		.service('PeopleService', PeopleService)
		.name