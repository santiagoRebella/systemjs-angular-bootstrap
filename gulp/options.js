(function () {
  "use strict";

  var options = {};

  options.csslint = {
    'shorthand': false,
    'known-properties': false,
    'adjoining-classes': false,
    'compatible-vendor-prefixes': false,
    'fallback-colors': false,
    'duplicate-background-images': false,
    'ids': false,
    'overqualified-elements': false,
    'box-model': false,
    'important': false,
    'font-sizes': false,
    'qualified-headings': false,
    'unqualified-attributes': false
  };

  options.sass = {
    'debug_info': true
  };
  options.jade = { pretty: false };

  options.livereload = {
    auto: false
  };

  options.requireDir = {
    camelcase: true
  };

  module.exports = options;

}());