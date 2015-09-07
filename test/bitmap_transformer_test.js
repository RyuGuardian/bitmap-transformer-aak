'use strict';

var expect = require('chai').expect;
var bmpTr = require(__dirname + '/../lib/bitmap_transformer');
var transform = require(__dirname + '/../lib/transform');

describe('#bitmapTranformer', function() {
		it("should write to a new file");
		it("should returned undefined if successful", function() {
			expect(bmpTr(transform)).to.eql(undefined);
		});
});
