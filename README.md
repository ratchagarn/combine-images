combine-images
==============


## Version 0.1.0

### Change log


Combine images with canvas


### Method

- `setSize` set size of image (width, height).
- `addSources` add source images for combine.
- `toDataURL` export all source images to data uri.


### Options

- `path` - image path.
- `crop` - enable crop mode, if set it then require `dx, dy, dWidth, dHeight`.
- `sy` - The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
- `sx` - The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
- `sWidth` - The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used. If you specify a negative value, the image is flipped horizontally when drawn.
- `sHeight` - The height of the sub-rectangle of the source image to draw into the destination context. If you specify a negative value, the image is flipped vertically when drawn.
- `dx` - The X coordinate in the destination canvas at which to place the top-left corner of the source image.
- `dy` - The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
- `dWidth` - The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
- `dHeight` - The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.