'use strict';

var expect = require('chai').expect;
var parseFH = require(__dirname + '/../lib/parse_file_header');
var fs = require('fs');

describe('#parseFile', function() {
	var buf = fs.readFileSync(__dirname + '/../images/palette-bitmap.bmp')
							.slice(0, 60);
	var buf2 = fs.readFileSync(__dirname + '/../images/non-palette-bitmap.bmp')
							.slice(0, 60);

	it("should return an object", function() {
		expect(typeof parseFH(buf)).to.eql('object');
	});

	describe("returned object's properties (for palette-bitmap)", function() {
		it("should have file type of 'BM'", function() {
			expect(parseFH(buf).bitmapType).to.eql('BM');
		});
		it("should have size of 11078", function() {
			expect(parseFH(buf).size).to.eql(11078);
		});
		it("should have width of 100", function() {
			expect(parseFH(buf).width).to.eql(100);
		});
		it("should have height of 100", function() {
			expect(parseFH(buf).height).to.eql(100);
		});
		it("should have pixel array's address at 1078", function() {
			expect(parseFH(buf).pixelDataStart).to.eql(1078);
		});
		it("should have bits/pixel value of 8", function() {
			expect(parseFH(buf).bitsPerPixel).to.eql(8);
		});
		it("should have 256 palette colors", function() {
			expect(parseFH(buf).numOfPaletteColors).to.eql(256);
		});
		it("should have a header size of 54", function() {
			expect(parseFH(buf).headerSize).to.eql(54);
		});
		it("should have a palette size of 1024", function() {
			expect(parseFH(buf).paletteSize).to.eql(1078 - 54); //pixel array start - header size
		});
	});

	describe("returned object's properties (for non-palette-bitmap)", function() {
		it("should have file type of 'BM'", function() {
			expect(parseFH(buf2).bitmapType).to.eql('BM');
		});
		it("should have size of 30054", function() {
			expect(parseFH(buf2).size).to.eql(30054);
		});
		it("should have width of 100", function() {
			expect(parseFH(buf2).width).to.eql(100);
		});
		it("should have height of 100", function() {
			expect(parseFH(buf2).height).to.eql(100);
		});
		it("should have pixel array's address at 54", function() {
			expect(parseFH(buf2).pixelDataStart).to.eql(54);
		});
		it("should have bits/pixel value of 24", function() {
			expect(parseFH(buf2).bitsPerPixel).to.eql(24);
		});
		it("should have 0 palette colors", function() {
			expect(parseFH(buf2).numOfPaletteColors).to.eql(0);
		});
		it("should have a header size of 54", function() {
			expect(parseFH(buf2).headerSize).to.eql(54);
		});
		it("should have a palette size of 0", function() {
			expect(parseFH(buf2).paletteSize).to.eql(0); //pixel array start - header size
		});
		it("should have a row size divisible by four", function() {
			expect(parseFH(buf2).rowSize % 4).to.eql(0);
		});
		it("should have a pixel-array size divisible by four", function() {
			expect(parseFH(buf2).pArraySize % 4).to.eql(0);
		});
	});
});
