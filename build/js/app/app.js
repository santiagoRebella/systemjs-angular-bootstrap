(function () {
  "use strict";

  require('angular');
  require('ui.bootstrap');
  require('angular-ui-router');
  require('angular-animate');
  require('app/rootCtrl.js');
  require('app/rest-api.js');
  require('app/nav-header.js');
  require('app/home.js');
  require('app/dashboard.js');


  angular.module('app', [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'rootCtrl',
    'navheader',
    'dashboard',
    'home',
    'rest-api'
  ])
  .config(["$stateProvider", "$urlRouterProvider", "$httpProvider",
      function ($stateProvider, $urlRouterProvider, $httpProvider) {

        //TODO
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    //$httpProvider.defaults.headers.post = {'Content-Type': 'application/xml'};

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('root', {
        url: '/',
        controller: 'rootCtrl',
        abstract: true
      })
      .state('root.home', {
        url: '',
        templateUrl : 'html/home.html',
        controller: 'homeCtrl'
      })
      .state('root.dashboard', {
        url: 'dashboard',
        templateUrl : 'html/dashboard.html',
        controller: 'dashboardCtrl'
      });

  }]);



}());