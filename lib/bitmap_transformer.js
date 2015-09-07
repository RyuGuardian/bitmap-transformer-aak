'use strict';

var fs = require('fs');

var bmpTransformer = function(callback) {
	fs.readFile(__dirname + '/../images/palette-bitmap.bmp', function(err, data) {
		if(err) { throw err; }

		callback(data);
	});
};

module.exports = bmpTransformer;