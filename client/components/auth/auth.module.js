'use strict';

angular.module('siukoApp.auth', ['siukoApp.constants', 'siukoApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
