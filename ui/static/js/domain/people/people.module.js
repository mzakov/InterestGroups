import people from './people.component.js'
import PeopleService from './people.service.js'
import peopleRoute from './people.route.js'
import person from './person/person.module.js'

export default
	angular
		.module('people', ['ngRoute', 'angularjs-dropdown-multiselect', 'person'])
		.component('people', people)
		.config(peopleRoute)
		.service('PeopleService', PeopleService)
		.name