(function () {
  "use strict";

  var gulp = require('gulp'),
      options = require('./gulp/options'),
      gp = require('gulp-load-plugins')(),
      gt = require('require-dir')('./gulp/tasks', options.requireDir),
      rp = require('require-dir')('./gulp/reporters', options.requireDir);

  /****************************************************************************/
  /*                       CUSTOM TASKS                                       */
  /****************************************************************************/

  gt.appTask(gp, rp);
  gt.watchTask(gp);
  gt.assetsTask(gp);

  /****************************************************************************/
  /* TASKS DEFINITION                                                         */
  /****************************************************************************/

  gulp.task('default', ['watch']);
  gulp.task('build', ['app:assets', 'app:build']);

}());