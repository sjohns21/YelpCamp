var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Salmon Creek",
    image:
      "https://i1.wp.com/visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg?fit=640%2C480",
    description: "blah"
    // comments: []
  },
  {
    name: "Granite Hill",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    description: "blah"
    // comments: []
  },
  {
    name: "Salmon Creek",
    image:
      "https://i1.wp.com/visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg?fit=640%2C480",
    description: "blah"
    // comments: []
  }
];

function seedDB() {
  Campground.deleteMany({}, function(err) {
    if (err) {
      console.log(err);
    }
    //#TODO DELETE COMMENTS??
    console.log("removed campgrounds!");
    data.forEach(function(seed) {
      Campground.create(seed, function(err, campground) {
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          Comment.create(
            {
              text: "this place is great",
              author: "homer"
            },
            function(err, comment) {
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("created new comment");
              }
            }
          );
        }
      });
    });
  });
}

module.exports = seedDB;
