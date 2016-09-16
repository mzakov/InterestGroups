import 'angular'
import ngRoute from 'angular-route/angular-route.js'
import 'angularjs-dropdown-multiselect/src/angularjs-dropdown-multiselect.js'
import home from './home.component.js'
import people from '../domain/people/people.module.js'
import interests from '../domain/interests/interests.module.js'
import homeRoute from './home.route.js'
import 'checklist-model'

export default
	angular
		.module('app', ['ngRoute', 'angularjs-dropdown-multiselect', 'people', 'interests', 'checklist-model'])
		.component('home', home)
		.constant('srvUrl', 'http://localhost:8080/')
		.config(homeRoute)	
		.name