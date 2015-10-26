(function () {
  "use strict";

  var crudModule = angular.module('crud', []);

  //
  //<list-table input="lists.feedList" caption="feeds" clone="cloneEntity" remove="deleteEntity" relations="relationsEntity" edit="editEntity"></list-table>
    //
  crudModule.directive('listTable', function () {
    return {
      scope: {
        input: "=",
        edit: "=",
        clone: "=",
        remove: "=",
        caption: "@"
      },
      restrict: "EA",
      templateUrl: 'src/app/crud/tableDv.html',
      link: function (scope) {
        scope.info = {};

        scope.$watch('input', function () {
          scope.info.empty = scope.input.length < 1;
        }, true);

      }
    };
  });

  crudModule.controller('dashboardCtrl', [ "$scope", "RestAPI", function ($scope, RestAPI) {

    $scope.show = {
      panel : true,
      valid : true
    };
    $scope.data = {
      raw: []
    };

    function refreshData() {
      RestAPI.getItems().success(function (data) {
        $scope.data.raw = data;
      }).error(function (err) { console.log(err); });
    }
    refreshData();

    $scope.delete = function (id) {
      console.log("delete " + id);
    };
    $scope.clone = function (id) {
      console.log("clone " + id);
    };
    $scope.edit = function (id) {
      console.log("edit " + id);
    };
    $scope.relations = function (id) {
      console.log("relations " + id);
    };

  }]);

}());
