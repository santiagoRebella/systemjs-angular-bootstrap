(function () {
	"use strict";

	angular.module('rest-api', [])
    .factory('RestAPI', ["$http", function($http) {

      var RestAPI = {};

      RestAPI.clusterHealth = function () {
        return $http.get('http://localhost:9200/_cat/health?v');
      };
      RestAPI.postItem= function (item) {
        return $http.post('/item/', item);
      };

	    return RestAPI;

	}]);

}());
