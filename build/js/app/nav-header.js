(function () {
  "use strict";

  angular.module('navheader', ['rest-api'])
    .directive('navHeader',["$state", function ($state) {
      return {
        replace:true,
        restrict: 'EA',
        templateUrl: 'html/nav-header.html',
        controller: 'navHeaderCtrl',
        link: function (scope) {





          scope.isActive = function (state) {
              return $state.current.name === state;
          };
        }
      };
    }])
    .controller('navHeaderCtrl', [ "$scope", "RestAPI", function($scope, RestAPI) {


      $scope.something = {
        here: "Foo",
        there: "Bar"
      };

      RestAPI.clusterHealth().success(function (data) {
        $scope.something.here = data;
      }).error(function (err) {
        console.log(err);
      });



  }]);

})();
