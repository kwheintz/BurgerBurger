const db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  db.Burger.findAll().then(function(result) {
     res.render("index", {"burger": result});
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("POST", req.body);
  const burger = req.body.burger_type;
  db.Burger.create({
    name: burger
  }).then(function(result){
      res.redirect("/")
  
});
})

router.put("/api/burgers/:id", function(req, res) {
  console.log(req.params.id)
  db.Burger.update({
    devour: true
  },
  {
    where: {
      id: req.params.id
    }
  }).then(result => {
      res.json(result)
  })
});


router.delete("/api/burgers/:id", function(req, res) {
  console.log(req.params.id)
  db.Burger.destroy(
  {
    where: {
      id: req.params.id
    }
  }).then(result => {
      res.json(result)
  })
});




module.exports = router;