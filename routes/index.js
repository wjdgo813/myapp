var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:'Terry' });
});

router.writecookie= function(req,res){
	console.log("writecookie");
	res.cookie('name','terry',{expires:new Date(Date.now()+900000),httpOnly:true,signed : true});
	res.end();
};

router.readcookie = function(req,res){
	console.log("readcookie");
	var name = req.signedCookies.name;
	console.log("name cookie is :"+name);
	res.end();
}
module.exports = router;
