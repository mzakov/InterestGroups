import templateUrl from './app.component.html'

export default {
  templateUrl: 'js/core/home.html',
  controllerAs: 'homeController',
  controller: ['$log',
    /* @ngInject */
    class HomeController {
      constructor ($log) {
        $log.debug('AppController instantiated')
        this.message = 'booooo'
      }
    }]
}