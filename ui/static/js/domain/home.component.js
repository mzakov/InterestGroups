import templateUrl from './home.component.html'

export default {
  templateUrl,
  controllerAs: 'home',
  controller: ['$log',
    /* @ngInject */
    class HomeController {
      constructor ($log) {
        $log.debug('HomeController instantiated')
      }
    }]
}