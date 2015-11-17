//Picture Model//

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/instaglam',
  idAttribute: '_id',
  defaults: {
    "picture": "http://qtattoostudio.co.uk/img/face.png",
    "title": "Please add title",
    "likes": 0
  },
  initialize: function () {
    
  }
});
