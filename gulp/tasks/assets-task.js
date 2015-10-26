/****************************************************************************/
/* assets                                                              */
/****************************************************************************/
(function () {
  "use strict";

  var del = require('del'),
    gulp = require('gulp'),
    sprity = require('sprity'),
    pngquant = require('imagemin-pngquant');

  module.exports = function(gp) {

    gulp.task('app:sprites', function () {
      return sprity.src({
        src: './src/assets/*.png',
        style: './src/sass/sprites.css'
      })
        .pipe(gp.if('*.png', gulp.dest('./build/assets/'), gulp.dest('./src/sass/')));
    });

    gulp.task('app:images', function () {

      del.sync(['build/assets/images']);

      return gulp.src(['src/assets/images/*.jpg', 'src/assets/images/*.png'])
        .pipe(gp.imagemin({
          progressive: true,
          optimizationLevel: 7,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
        }))
        .pipe(gulp.dest('build/assets/images'));

    });

    gulp.task('app:fonts', function () {

      del.sync(['build/assets/fonts']);

      return gulp.src('src/assets/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'));

    });

    gulp.task('app:assets', ['app:images', 'app:fonts']);

  };

}());

