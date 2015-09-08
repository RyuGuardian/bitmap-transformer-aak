'use strict';

var fs = require('fs');

var bmpTransformer = function(source, dest, callback) {
	fs.readFile(source, function(err, data) {
		if(err) {
			throw err;
		}
		else {
			fs.writeFile(dest, callback(data), function(err) {
				if(err) {
				  throw 'Could not write file';
				}
			});
		}
	});
};

module.exports = bmpTransformer;