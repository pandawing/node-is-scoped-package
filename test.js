'use strict';
var assert = require('power-assert');
var isScopedPackage = require('./');

it('should not be scoped package', function () {
  assert.equal(isScopedPackage('generator-nm'), false);
});
it('should be scoped package', function () {
  assert.equal(isScopedPackage('@sanemat/generator-nm'), true);
});
