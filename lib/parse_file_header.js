'use strict';

var fs = require('fs');
var os = require('os');	//to use os.endianness()

//read header data, and return an object with labeled data
var parseFileHeader = function(buf) {
	var stats = {};

	stats.bitmapType = buf.toString('utf8', 0, 2);
	stats.size = buf.readUInt32LE(2);
	stats.width = buf.readInt32LE(18);
	stats.height = buf.readInt32LE(22);
	stats.pixelDataStart = buf.readUInt32LE(10);
	stats.bitsPerPixel = buf.readUInt16LE(28);
	stats.numOfPaletteColors = buf.readUInt32LE(46);
	stats.headerSize = 14 + buf.readUInt32LE(14);
	stats.paletteSize = stats.pixelDataStart - stats.headerSize; //palette start address is equal to headerSize

	if(stats.bitsPerPixel >= 24 && stats.paletteSize === 0) {
		//calculate needed stats for non-palette images
		stats.rowSize = Math.ceil(((stats.bitsPerPixel*stats.width)/32) * 4);
		stats.pArraySize = stats.rowSize * Math.abs(stats.height);
	}

	return stats;
};

module.exports = parseFileHeader;