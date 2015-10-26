/****************************************************************************/
/* Mocha Test Task                                                          */
/****************************************************************************/
(function () {
  "use strict";

  var gulp = require('gulp'),
      mocha = require('gulp-mocha');

  module.exports = function() {

    gulp.task('test', function () {
      return gulp.src(['**/*.spec.js', '!node_modules/**/*.spec.js'], {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'spec'}));
    });

  };

}());

