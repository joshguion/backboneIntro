//This is a Bb collection//
var Backbone = require('backbone');
var PictureModel = require('./pictureModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/instaglam',
  model: PictureModel
});
