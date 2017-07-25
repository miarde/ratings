'use strict';

angular.module('md.app', [
    'ngSanitize',
    'ui.router',
    'pouchdb',
    'toastr',

    //custom modules
    'md.app.main',
    'md.app.model'
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
