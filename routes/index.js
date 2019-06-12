var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){

	//res.send('Index Page');
	res.render("index.html");
//	res.sendFile('../views/index.html');
//	res.sendFile(path.join(__dirname+'/app.component.html'));
});

module.exports = router;