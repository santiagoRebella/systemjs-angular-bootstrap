(function () {
  "use strict";



  var rootCtrlModule = angular.module('rootCtrl', []);

  rootCtrlModule.controller('rootCtrl', [
    "$scope",
    "$state",

    function ($scope, $state) {
      console.log($scope + ' ' + $state );
    }
  ]);

}());