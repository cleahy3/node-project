var User = require('../models/user');

function newUser(req,res){
	var user = {
		first_name: "",
		last_name: "",
		email: "",
		password: ""
	}
	res.render("users/new", {
		title: "Register",
		user: user
	});
}

function createUser(req,res){
	User.create(req.body, function(err,user){
		if(err) {console.log(err.message)};
		
		res.redirect("/"); 
		console.log(req.body);
	});
}

module.exports={
	create:createUser,
	new:newUser
}