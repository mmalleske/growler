var express = require('express');
var router = express.Router();
var growls = [{growl: "Growls Show up here!"}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { growls: growls });
});

router.get('/new', function(req, res, next) {
  res.render('/newitem/new');
});

router.post('/',function(req, res, next) {
  var newGrowl = (req.body);

  growls.push(newGrowl);
  res.redirect('/');
});


// function limitText(limitField, limitCount, limitNum) {
//   if (limitField.value.length > limitNum) {
//     limitField.value = limitField.value.substring(0, limitNum);
//   } else {
//     limitCount.value = limitNum - limitField.value.length;
//   }
// }
function limitText(){
  console.log('Hello');
}
module.exports = router;
