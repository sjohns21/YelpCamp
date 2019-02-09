var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
  {
    name: "Salmon Creek",
    image:
      "https://photosforclass.com/download/pixabay-691424?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fef3cb00b2af01c22d2524518b7444795ea76e5d004b014459cf6c47da0efb7_960.jpg&user=Free-Photos"
  },
  {
    name: "Granite Hill",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Mountain Goat's Rest",
    image:
      "https://photosforclass.com/download/pixabay-1845719?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f9c77ca3eab7ba_960.jpg&user=Pexels"
  }
];

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.listen(3000);
