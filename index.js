'use strict';

var bmpTransformer = require(__dirname + '/lib/bitmap_transformer');
var transform = require(__dirname + '/lib/transform');

var execute = function(fileName, destName) {
	bmpTransformer(fileName, destName, transform);
};

module.exports = execute;
