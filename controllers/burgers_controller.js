var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
  db.Burger.findAll({}).then(function(dbBurger){
    var hbsObject = {
        burgers: dbBurger
    };
    res.render("index", hbsObject)
  })
 
});
router.post("/api/burgers", function (req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {
        res.json(dbBurger);
      });
})
// router.put("/api/burgers/:id", function (req, res) {
//     burger.update(req.body.devour, req.params.id, function (result) {
//         if (result.changedRows === 0) {
//             return res.status(404).end();
//         }
//         res.status(200).end();
//     });
// })
router.put("/api/burgers/:id", function (req, res) {
    db.Burger.update({
        devoured: req.body.devour
    },{
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger){
        res.json(dbBurger);
    });
});



module.exports = router;

