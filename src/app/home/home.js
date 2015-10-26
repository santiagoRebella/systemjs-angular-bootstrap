(function () {
	"use strict";

  require('d3');

	angular.module('home', [])
    .controller('homeCtrl', [ "$scope", function($scope) {
      $scope.my = {
        data : [
          { "hours":"8", "checkIn":"07:00","checkOut":"19:30", "date":"01/07/2014" },
          { "hours":"12", "checkIn":"07:00","checkOut":"19:30", "date":"02/07/2014" },
          { "hours":"10", "checkIn":"07:00","checkOut":"19:30", "date":"03/07/2014" },
          { "hours":"8", "checkIn":"07:00","checkOut":"19:30", "date":"04/07/2014" },
          { "hours":"7", "checkIn":"07:00","checkOut":"19:30", "date":"05/07/2014" },
          { "hours":"8", "checkIn":"07:00","checkOut":"19:30", "date":"06/07/2014" },
          { "hours":"6", "checkIn":"07:00","checkOut":"19:30", "date":"07/07/2014" },
          { "hours":"8", "checkIn":"07:00","checkOut":"19:30", "date":"08/07/2014" },
          { "hours":"16", "checkIn":"07:00","checkOut":"19:30", "date":"07/07/2014" },
          { "hours":"24", "checkIn":"07:00","checkOut":"19:30", "date":"08/07/2014" }
        ]

      };
      $scope.details = function (obj) {
        console.log("details " + obj.hours);
      };

    }])
    .directive('d3BarChart', function() {
      return {
        scope: {
          input: "=",
          w: "@",
          h: "@",
          t: "@",
          dx: "=",
          dy:"=",
          details:"="
        },
        restrict: "EA",
        link: function (scope, element) {
          var config = {
                axis: { y:{ ticks: 24}, x:{ } }
              },
              x = d3.scale.linear().domain(scope.dx).range( [0, (scope.w - (scope.t * 2) ) ]),
              y = d3.scale.linear().domain(scope.dy).range( [0, (scope.h - (scope.t * 2) ) ]),

              xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom"),

              yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .ticks(config.axis.y.ticks),

              canvas = d3.select(element[0])
                .append("svg")
                  .attr("width", scope.w)
                  .attr("height", scope.h)
                  .style("border", "1px solid black");

          canvas.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(" + scope.t + "," + (( scope.h - scope.t ) + 0.5) + ")")
            .call(xAxis);

          canvas.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + (scope.t - 0.5) + "," + scope.t + ")")
            .call(yAxis);

          canvas.selectAll("rect").data(scope.input).enter()
            .append("rect").call(yAxis)
              .attr("x", function(d, i) { return x(i); })
              .attr("y", function(d) { return (y(parseInt(d.hours, 10)) - y(scope.dy[0]) ); })
              .attr("height", function(d) { return (scope.h - (scope.t * 2)) - y(parseInt(d.hours, 10)); })
              .attr("width", function() { return x(0.9); })
              .attr("fill", "#307D7E")
              .attr("transform", "translate(" + scope.t + "," + scope.t + ")")
              .style("cursor", "pointer")
              .on("mouseover", function(){d3.select(this).style("fill", "#7C7D2F");})
              .on("mouseout", function(){ d3.select(this).style("fill", "#307D7E"); })
              .on("click", function(d){ scope.details(d); });
        }
      };
    });


})();
