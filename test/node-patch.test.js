/*!
 * node-patch - test/node-patch.test.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

require('../');
var should = require('should');

describe('node-patch.test.js', function () {
  describe('fs module', function () {
    it('should has existsSync and exists function', function () {
      var fs = require('fs');
      fs.should.have.property('exists').with.be.a('function');
      fs.should.have.property('existsSync').with.be.a('function');
    });
  });

  describe('buffer module', function () {
    it('should has concat function', function () {
      Buffer.should.have.property('concat').with.be.a('function');
    });
  });
});