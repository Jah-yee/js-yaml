'use strict';


var assert = require('assert');
var yaml   = require('../../');


it('Infinite loop when attempting to parse multi-line scalar document that is not indented', function () {
  // Block scalar with zero indentation should throw an error (issue #280)
  assert.throws(function () { yaml.load('--- |\nfoo\n'); }, /missing indentation for block scalar/);
});
