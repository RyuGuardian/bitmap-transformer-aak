'use strict';

var fs = require('fs');

var bmpTransformer = function(source, dest, callback) {
	fs.readFile(source, function(err, data) {
		if(err) { throw err; }

		fs.writeFile(dest, callback(data), function(err) {
			if(err) { throw err; }
		});
	});
};

module.exports = bmpTransformer;