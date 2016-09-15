import 'angular'
import ngRoute from 'angular-route/angular-route.js'
import 'angularjs-dropdown-multiselect/src/angularjs-dropdown-multiselect.js'
import home from './home.component.js'
import people from '../domain/people/people.module.js'

export default
	angular
		.module('app', ['ngRoute', 'angularjs-dropdown-multiselect', 'people'])
		.component('home', home)
		.constant('srvUrl', 'http://localhost:8080/')
		.config(['$routeProvider', function config($routeProvider) {
			$routeProvider.
			when('/home', {
				template: "<home></home>"
			}).
	        otherwise('/home');
			}])	
		.name