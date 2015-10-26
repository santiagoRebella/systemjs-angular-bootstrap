(function () {
  "use strict";

  System.config({
    baseURL: '/js',
    meta: {
      'vendor/angular.min': { format: 'global', exports: 'angular' },
      'vendor/angular-animate.min': { deps: ['angular'] },
      'vendor/angular-ui-router.min': { deps: ['angular'] },
      'vendor/ui-bootstrap-tpls.min': { deps: ['angular'] }
    },
    map: {
      'angular': 'vendor/angular.min.js',
      'angular-animate': 'vendor/angular-animate.min.js',
      'angular-ui-router': 'vendor/angular-ui-router.min.js',
      'ui.bootstrap': 'vendor/ui-bootstrap-tpls.min.js',
      'd3': 'vendor/d3.min.js'
    }
  });

  System.import('app/app.js').then(function () {
    angular.element(document).ready(function() {
      angular.bootstrap(document.body, ["app"], { strictDi: true });
    });
  });

}());


