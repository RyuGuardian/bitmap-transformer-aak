'use strict';

var expect = require('chai').expect;
var transform = require(__dirname + '/../lib/transform');
var fs = require('fs');

describe("#transform", function() {
	var buf = fs.readFileSync(__dirname + '/../images/palette-bitmap.bmp');
  var buf2 = fs.readFileSync(__dirname + '/../images/non-palette-bitmap.bmp');

	transform(buf);
	transform(buf2);
	
	it("should write to a new file");
});
