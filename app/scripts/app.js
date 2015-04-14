'use strict';

/**
 * @ngdoc overview
 * @name myMisAppApp
 * @description
 * # myMisAppApp
 *
 * Main module of the application.
 */
angular
  .module('myMisAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
