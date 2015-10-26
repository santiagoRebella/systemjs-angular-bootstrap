(function () {
  "use strict";

  var gutil = require('gulp-util');

  module.exports = function (err) {

    gutil.log(
      gutil.colors.red('######################## ') +
      gutil.colors.red.bold(err.plugin) +
      gutil.colors.red(' ########################')
    );
    gutil.log(
      gutil.colors.red('>>>> ') +
      gutil.colors.yellow(err.message.split(' ').splice(1).join(' ').split('(')[0])
    );
    gutil.log(
      gutil.colors.dim.gray('file ') +
      gutil.colors.yellow(err.fileName.split('/src')[1])
    );
    gutil.log(
      gutil.colors.dim.gray('line ') +
      gutil.colors.dim.cyan(err.loc.line) +
      gutil.colors.dim.gray(' column ') +
      gutil.colors.dim.cyan(err.loc.column)
    );
    gutil.log('\n' +
      err.codeFrame
    );
    gutil.log( gutil.colors.red('############################################################') );

  };


}());
/*

 { [SyntaxError: /home/san/workspace/blade_prototype/stacks/es6-polymer/src/components/header/header.es6.js: Unexpected token (6:44)]
 pos: 173,
 loc: { line: 6, column: 44 },
 raisedAt: 174,
 _babel: true,
 codeFrame: '  4 |     \u001b[90m// set this element\'s owner property\u001b[39m\n  5 |     \u001b[36mthis\u001b[39m\u001b[1m.\u001b[22mappName \u001b[1m=\u001b[22m \u001b[31m"Polymer App"\u001b[39m\u001b[1m;\u001b[22m\n> 6 |     \u001b[36mthis\u001b[39m\u001b[1m.\u001b[22mappDesc \u001b[1m=\u001b[22m \u001b[31m"A brief descirption"\u001b[39m\u001b[1m;\u001b[22m\u001b[33m[\u001b[39m\u001b[33m]\u001b[39m\u001b[1m;\u001b[22m\u001b[33m]\u001b[39ml\n    |                                             ^\n  7 | \n  8 |   \u001b[32m}\u001b[39m\n  9 | \u001b[32m}\u001b[39m\u001b[34m\u001b[1m)\u001b[22m\u001b[39m\u001b[1m;\u001b[22m',
 name: 'SyntaxError',
 message: '/home/san/workspace/blade_prototype/stacks/es6-polymer/src/components/header/header.es6.js: Unexpected token (6:44)',
 stack: 'SyntaxError: /home/san/workspace/blade_prototype/stacks/es6-polymer/src/components/header/header.es6.js: Unexpected token (6:44)\n  4 |     \u001b[90m// set this element\'s owner property\u001b[39m\n  5 |     \u001b[36mthis\u001b[39m\u001b[1m.\u001b[22mappName \u001b[1m=\u001b[22m \u001b[31m"Polymer App"\u001b[39m\u001b[1m;\u001b[22m\n> 6 |     \u001b[36mthis\u001b[39m\u001b[1m.\u001b[22mappDesc \u001b[1m=\u001b[22m \u001b[31m"A brief descirption"\u001b[39m\u001b[1m;\u001b[22m\u001b[33m[\u001b[39m\u001b[33m]\u001b[39m\u001b[1m;\u001b[22m\u001b[33m]\u001b[39ml\n    |                                             ^\n  7 | \n  8 |   \u001b[32m}\u001b[39m\n  9 | \u001b[32m}\u001b[39m\u001b[34m\u001b[1m)\u001b[22m\u001b[39m\u001b[1m;\u001b[22m\n    at Parser.pp.raise (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/lib/acorn/src/location.js:73:13)\n    at Parser.pp.unexpected (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/lib/acorn/src/parseutil.js:87:8)\n    at Parser.pp.parseExprAtom (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/lib/acorn/src/expression.js:393:12)\n    at Parser.parseExprAtom (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/node_modules/acorn-jsx/inject.js:624:24)\n    at Parser.pp.parseExprSubscripts (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/lib/acorn/src/expression.js:217:19)\n    at Parser.pp.parseMaybeUnary (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/lib/acorn/src/expression.js:199:19)\n    at Parser.pp.parseExprOps (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/lib/acorn/src/expression.js:155:19)\n    at Parser.pp.parseMaybeConditional (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/lib/acorn/src/expression.js:138:19)\n    at Parser.pp.parseMaybeAssign (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/lib/acorn/src/expression.js:106:19)\n    at Parser.pp.parseExpression (/home/san/workspace/blade_prototype/stacks/es6-polymer/node_modules/gulp-babel/node_modules/babel-core/lib/acorn/src/expression.js:81:19)',
 fileName: '/home/san/workspace/blade_prototype/stacks/es6-polymer/src/components/header/header.es6.js',
 showStack: false,
 showProperties: false,
 plugin: 'gulp-babel' }

 */
