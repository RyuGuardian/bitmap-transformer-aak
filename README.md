#Bitmap Color Transformer

The first-weekend Code Fellows assignment. It takes a bitmap file and transforms its colors using a transforming callback function. So far it only inverts colors.

###Assignment Description:

For this assignment you will be building a Bitmap reader and transformer.

It will read a Bitmap in from disk, run one or more color transforms on the bitmap and then write it out to a new file. This project will require the use of node buffers in order to manipulate binary data and your project should include tests, as well as a gulpfile and package.json file. Also, make sure to run all your code through jshint.

Bonuses:

Detect endianness of the OS and use the correct functions to read the buffer data accordingly. (Achieved)

Be able to transform palette and non-palette bitmaps. (Achieved)

Be able to transform a bitmap of any size.

Be able to transform more than one kind of bitmap.