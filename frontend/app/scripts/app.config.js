'use strict';
// $urlRouterProvider, $stateProvider, $httpProvider, $authProvider, API_URL
angular.module('projectInspireDevApp').config(function($urlRouterProvider, $stateProvider, $httpProvider, API_URL){
  $urlRouterProvider.otherwise('/');
  $stateProvider

  .state('main', {
    url: '/',
    templateUrl: '/views/main.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl'
  })

  .state('logout', {
    url: '/logout',
    controller: 'LogoutCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: '/views/register.html',
    controller: 'RegisterCtrl'
  })

  .state('jobs', {
    url: '/jobs',
    templateUrl: '/views/jobs.html',
    controller: 'JobsCtrl'
  });

  $httpProvider.interceptors.push('authInterceptor');
})
.constant('API_URL', 'http://localhost:3000/');
