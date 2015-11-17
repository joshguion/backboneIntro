

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var PictureCollection = require('./pictureCollection');
var PictureModel = require('./pictureModel');


$(document).ready(function (){

page.init();



});

var page = {


      init: function() {
      page.initEvents();
      page.initStyling();

},

initEvents: function (){
 $('.photo-input').on('click', 'submit', function(event){
   event.preventDefault();
   var newGlam = new PictureModel ({
     imageUrl: $('.photoUrl').val(),
     caption: $('.caption').val()
   });
   newGlam.save();
 });

},






initStyling: function () {
$('.title').append("<h1>" + 'Insta-Glam' + "</h1>");
$('.photo-div').append("<div>" + '<img src="http://placekitten.com/200/300"/>' + "</div>");
$('body').append("<button type='submit' class='likeButton'>" + '+' + "</button>");
},








};
