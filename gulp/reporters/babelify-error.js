(function () {
  "use strict";

  var gutil = require('gulp-util');

  module.exports = function (err) {

    gutil.log(
      gutil.colors.red('################## ') +
      gutil.colors.red.bold('browserify | babelify') + gutil.colors.red(' ###################')
    );
    gutil.log(
      gutil.colors.red('>>>> ') +
      gutil.colors.yellow(err.message.split(' ').splice(1).join(' ').split('(')[0])
    );
    gutil.log(
      gutil.colors.dim.gray('file ') +
      gutil.colors.yellow(err.filename.split('/src')[1])
    );
    gutil.log(
      gutil.colors.dim.gray('line ') +
      gutil.colors.dim.cyan(err.loc.line) +
      gutil.colors.dim.gray(' column ') +
      gutil.colors.dim.cyan(err.loc.column)
    );
    gutil.log(gutil.colors.dim.gray('|---------------------------------------------------------|\n') +
      err.codeFrame);
    gutil.log( gutil.colors.red('############################################################') );

  };


}());
/*

 { { [SyntaxError: /home/san/workspace/blade_prototype/stacks/es6-polymer/src/app/init.js: Unexpected token (10:4) while parsing file: /home/san/workspace/blade_prototype/stacks/es6-polymer/src/app/init.js]
 pos: 213,
 loc: { line: 10, column: 4 },
 raisedAt: 216,
 _babel: true,
 codeFrame: '   8 |   dos\u001b[1m:\u001b[22m \u001b[31m\'kkokodkodksodskodsok\'\u001b[39m\n   9 | \u001b[32m}\u001b[39m\u001b[1m;\u001b[22m\n> 10 | sdf ldf\u001b[1m/\u001b[22m\u001b[1m?\u001b[22mp$$$$322\n     |     ^\n  11 | \n  12 | setTimeout\u001b[34m\u001b[1m(\u001b[22m\u001b[39m\u001b[36mfunction\u001b[39m \u001b[34m\u001b[1m(\u001b[22m\u001b[39m\u001b[34m\u001b[1m)\u001b[22m\u001b[39m \u001b[32m{\u001b[39m\n  13 |   console\u001b[1m.\u001b[22mlog\u001b[34m\u001b[1m(\u001b[22m\u001b[39m\u001b[31m\'he\'\u001b[39m\u001b[34m\u001b[1m)\u001b[22m\u001b[39m\u001b[1m;\u001b[22m',
 filename: '/home/san/workspace/blade_prototype/stacks/es6-polymer/src/app/init.js',
 stream:
 }

 */
