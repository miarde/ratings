'use strict';

angular.module('md.app', [
  'ngSanitize',
  'ui.router',

  //custom modules
  'md.app.main'
])
  .config(function ($urlRouterProvider, $stateProvider) {
      // For any unmatched URL redirect to /
      $urlRouterProvider.otherwise('/');

      // Set up our application states
      $stateProvider
          .state('main', {
              url: '/',
              templateUrl: 'components/main/main.html',
              controller: 'MainCtrl',
              data: { title: 'Main' },
              controllerAs: 'mainCtrl'
          });
  });
