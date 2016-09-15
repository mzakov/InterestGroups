import angular from 'angular'
import ngRoute from 'angular-route/angular-route.js'
import 'angularjs-dropdown-multiselect/src/angularjs-dropdown-multiselect.js'
import webApp from './app.component'

export default
	angular
		.module('app', ['ngRoute', 'angularjs-dropdown-multiselect'])
		.component('webApp', webApp)
		.name