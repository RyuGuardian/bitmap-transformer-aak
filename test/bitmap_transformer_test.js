'use strict';

var expect = require('chai').expect;
var bmpTr = require(__dirname + '/../lib/bitmap_transformer');
var transform = require(__dirname + '/../lib/transform');

describe('#bitmapTranformer', function() {
		var err = new Error();

    //Couldn't get this test to work. Also couldn't figure out proper test for successful file read, because async.
		it("should throw an error if the file doesn't exist", function() {
			expect(bmpTr(__dirname + '/palette.bmp', __dirname + 'new.bmp', transform)).to.throw(err);
		});
});
