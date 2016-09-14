import angular from 'angular'
import ngRoute from 'angular-route/angular-route.js'

export default
	angular
		.module('app', ['ngRoute', 'angularjs-dropdown-multiselect'])
		.name