'use strict';

var expect = require('chai').expect;
var bmpTr = require(__dirname + '/../lib/bitmap_transformer');
var transform = require(__dirname + '/../lib/transform');

describe('#bitmapTranformer', function() {
		it("should returned undefined if successful", function() {
			expect(bmpTr(
				__dirname + '/../images/non-palette-bitmap.bmp',
				__dirname + '/../images/npb-test.bmp', 
				transform))
			.to.eql(undefined);
		});
});
