'use strict';

angular.module('siukoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('entry', {
        url: '/entry',
        template: '<entry></entry>'
      });
  });
