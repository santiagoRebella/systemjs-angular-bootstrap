/****************************************************************************/
/* App js and sass main builds                                              */
/****************************************************************************/
(function () {
  "use strict";

  var gulp = require('gulp'),
      options =  require('../options'),
      del = require('del'),
      source = require('vinyl-source-stream');

  module.exports = function(gp, rp) {

    gulp.task('app:sass', function () {
      del.sync(['build/css/main.min.css']);
      gulp.src('./src/sass/style.sass')
        .pipe(gp.plumber())
        .pipe(gp.sourcemaps.init())
        .pipe(gp.sass(options.sass))
          .on('error', rp.sassError)
        .pipe(gp.rename("main.min.css"))
        .pipe(gp.csslint(options.csslint))
          .pipe(gp.csslint.reporter(rp.csslintReporter))
        .pipe(gulp.dest('./build/css'))
        .pipe(gp.livereload(options.livereload));
    });

    gulp.task('app:js', function() {

      del.sync(['build/**/*.js']);

      gulp.src([
        "./src/app/**/*.js",
        "./src/app/*.js"
      ])
        .pipe(gp.plumber())
        .pipe(gp.jshint())
          .pipe(gp.jshint.reporter('jshint-stylish'))
        .pipe(gp.flatten())
        .pipe(gulp.dest('build/js/app'))
        .pipe(gp.livereload(options.livereload));

      gulp.src([
        "node_modules/systemjs/dist/system.js",
        "node_modules/systemjs/dist/system.js.map",
        "node_modules/systemjs/dist/system-polyfills.js"
      ])
        .pipe(gp.plumber())
        .pipe(gulp.dest('build/js/system'));

      gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/d3/d3.min.js'
      ])
        .pipe(gp.plumber())
        .pipe(gulp.dest('build/js/vendor'));

      gulp.src("./src/init.js")
        .pipe(gulp.dest('build/js'));

    });


    gulp.task('app:jade', function() {
      del.sync(['build/*.html']);

      gulp.src('src/index.jade')
        .pipe(gp.jade(options.jade))
          .on('error', rp.jadeError)
        .pipe(gulp.dest('build'))
        .pipe(gp.livereload(options.livereload));

      gulp.src('src/app/**/*.jade')
        .pipe(gp.jade(options.jade))
          .on('error', rp.jadeError)
        .pipe(gp.flatten())
        .pipe(gulp.dest('build/html'))
        .pipe(gp.livereload(options.livereload));

    });


    gulp.task('app:build', ['app:jade', 'app:sass', 'app:js']);

  };

}());
