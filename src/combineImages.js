/*!
 * CombineImages v0.1.0
 * Copyright 2014-Preset
 * Author: Ratchagarn Naewbuntad
 * Licensed under MIT
 */

(function() {

'use strict';


/**
 * combile image
 * ------------------------------------------------------------
 * @name CombineImages
 * @param {String} canvas id
 */

function CombineImages(id) {
  if (id == null) { id = 'combine-images-tmp'; }

  var canvas = document.createElement('canvas');
  canvas.id = id;

  // document.body.appendChild(canvas);

  this.canvas = canvas;
  this.images_sources = [];
}


/**
 * Set images source to combine
 * ------------------------------------------------------------
 * @name CombineImages.addSources
 * @param {Object} Array of images data source
 *   - path
 *   - left
 *   - top
 *   - width
 *   - height
 * @return CombineImages object
 */

CombineImages.prototype.addSources = function(images) {
  this.images_source = images;
  return this;
}


/**
 * Set canvas size
 * ------------------------------------------------------------
 * @name CombineImages.setSize
 * @param {Number} canvas width
 * @param {Number} canvas height
 * @return CombineImages object
 */

CombineImages.prototype.setSize = function(width, height) {
  this.canvas.width = width;
  this.canvas.height = height;
  return this;
}


/**
 * Combine all set of images to data url
 * ------------------------------------------------------------
 * @name CombineImages.toDataURL
 * @param {Function} callback function for get data url
 */

CombineImages.prototype.toDataURL = function(callback) {
  var that = this,
      canvas = this.canvas,
      ctx = this.canvas.getContext('2d'),
      pointer = 0;

  // clear canvas before new draw
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  function _toDataURL(source) {
    var imageObj = new Image();

    imageObj.src = source.path;
    imageObj.onload = function() {

      var sx = source.sx || 0,
          sy = source.sy || 0,
          sWidth = source.sWidth || imageObj.width,
          sHeight = source.sHeight || imageObj.height,
          dx = source.dx,
          dy = source.dy,
          dWidth = source.dWidth,
          dHeight = source.dHeight;

      // draw image
      if (source.crop) {
        ctx.drawImage(imageObj, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      }
      else {
        ctx.drawImage(imageObj, sx, sy, sWidth, sHeight);
      }

      // check for go next
      if (that.images_source[pointer + 1]) {
        ++pointer;
        _toDataURL( that.images_source[pointer] );
      }
      else {
        var dataURL = canvas.toDataURL();
        (callback || function() {})( dataURL );
      }
    };
  }

  if (this.images_source[pointer]) {
    _toDataURL( this.images_source[pointer] );
  }
}


window.CombineImages = CombineImages;


}).call(this);