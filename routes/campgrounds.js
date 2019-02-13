var express = require("express"),
  router = express.Router(),
  Campground = require("../models/campground");

//INDEX - show all campgrounds
router.get("/", function(req, res) {
  console.log(req.user);
  Campground.find({}, function(err, AllCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", {
        campgrounds: AllCampgrounds
      });
    }
  });
});

//NEW - show form to create new campground
router.get("/new", function(req, res) {
  res.render("campgrounds/new");
});

//CREATE - add new campground to db
router.post("/", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = { name: name, image: image, description: desc };
  //create new campground and save to db
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      console.log(newlyCreated);
      res.redirect("/campgrounds");
    }
  });
});

//SHOW - shows more info about one campground
router.get("/:id", function(req, res) {
  //find the campground with provided ID
  Campground.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundCampground) {
      if (err) {
        console.log(err);
      } else {
        console.log(foundCampground);
        //render show template with that campground
        res.render("campgrounds/show", { campground: foundCampground });
      }
    });
});

module.exports = router;
