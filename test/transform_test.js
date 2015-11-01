'use strict';

var expect = require('chai').expect;
var transform = require(__dirname + '/../lib/transform');
var fs = require('fs');

describe("#transform", function() {
	var buf = fs.readFileSync(__dirname + '/../images/palette-bitmap.bmp');

	it("should return a buffer", function() {
		expect(Buffer.isBuffer(transform(buf))).to.eql(true);
	});
});
