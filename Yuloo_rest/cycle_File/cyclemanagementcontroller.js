var express = require('express'),
    push = express.Router(),
    bodyParser = require('body-parser')
    var hour_a=20;
    var E_hour_a=10;


var cycle_Y = __db.cycle
urlencodedParser = bodyParser.urlencoded({ extended: false })

push.use(bodyParser.json());
push.post('/get_cycle',urlencodedParser, function (req, res) {
	console.log(req.body)
	cycle_Y.create(req.body).then(function(added){
		res.status(200).send("Register");   
	},function(err){	
		res.status(500).send("Failed");
	})
})
push.post('/Entry_cycle',urlencodedParser, function (req, res) {
	cycle_Y.findOne({raw:true,where:{user_id: req.body.user_id}}).then(function(user){
		// select * from where 
		// feild access wrong
		
		if (user.hour<=80) {
			var remaining = parseInt(req.body.hour)*hour_a;
			console.log(remaining)
			var Total_hour = user.hour+parseInt(req.body.hour);
			cycle_Y.update({amount: remaining,hour: Total_hour},{where:{user_id:req.body.user_id}}).then(function (epin_update) {
	       	 return res.status(200).send("Your Paying Amount="+remaining);
	    	},function(err){
	    	    return res.status(500).send("Amount updation failed")
	    	});
			

		} else{
			var remains = parseInt(req.body.hour)*E_hour_a;
			console.log(" Your Paying Amount ="+remains)
			var Total_hour = user.hour+parseInt(req.body.hour);
			cycle_Y.update({amount: remains,hour: Total_hour},{where:{user_id:req.body.user_id}}).then(function (epin_update) {
	       	 return res.status(200).send("Your Paying Amount="+remains);
	    	},function(err){
	    	    return res.status(500).send("Amount updation failed")
	    	});
		}
    });
});
module.exports=push;

