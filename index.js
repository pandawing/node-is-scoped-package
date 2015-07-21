'use strict';

var isPackage = require('is-package');
var npa = require('npm-package-arg');

module.exports = function (name) {
  var bool;
  try {
    bool = isPackage(name) && (npa(name)['scope']);
  } catch (e) {
    bool = false;
  }
  return bool;
};
