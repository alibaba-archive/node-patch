/*!
 * node-patch - lib/node-patch.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

require('buffer-concat');
var fs = require('fs');
var path = require('path');

fs.exists = fs.exists || path.exists;
fs.existsSync = fs.existsSync || path.existsSync;
