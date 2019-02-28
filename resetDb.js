var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");

console.log("k");
(function() {
  User.deleteMany({}, function(err) {
    if (err) console.log(err);
    console.log("deleted users");
    Campground.deleteMany({}, function(err) {
      if (err) console.log(err);
      console.log("deleted campgrounds");
      Comment.deleteMany({}, function(err) {
        if (err) console.log(err);
        console.log("deleted comments");
      });
    });
  });
})();
