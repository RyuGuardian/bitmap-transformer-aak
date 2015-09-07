'use strict';

var os = require('os');
var parseFH = require(__dirname + '/parse_file_header' + os.endianness()); //no if statement!

//transform is passed a buffer and manipulates it using info in an object to change color values
var transform = function(image) {
	var info = parseFH(image);	//use function to parse header for info

	//for color-table-based image...
	if(info.bitsPerPixel === 8) {
		//...start at color table address, iterate to the start of the pixel array
		for(var i = info.headerSize; i < info.pixelDataStart; i++) {
			image.writeUInt8(255 - image.readUInt8(i), i); //invert color at i
		}
	}
	//for image where each pixel contains color data...
	else if(info.hasOwnProperty('pArraySize')) {
		//...start at the pixel array, iterate through its size
		for(var i = info.pixelDataStart; i < (info.pixelDataStart + info.pArraySize); i++) {
			image.writeUInt8(255 - image.readUInt8(i), i); //invert color at i
		}
	}

	return image;
};

module.exports = transform;