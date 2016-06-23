var express = require('express');
var router = express.Router();
var growls = [{growl: "Growls Show up here!"}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { growls: growls });
});

router.post('/',function(req, res, next) {
  var newGrowl = (req.body);
  //console.log(newGrowl);
  growls.push(newGrowl);
  res.redirect('/');
  console.log(growls);
});

// router.post('/', function (req, res, next){
//   var newItem = (req.body);
//   items.push(newItem);
//   res.redirect('/');
// });

module.exports = router;
