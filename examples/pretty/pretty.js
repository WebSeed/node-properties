"use strict";

var properties = require ("../../lib/properties");

var header =
		"MyApp\n" +
		"Authors: You and Me\n" +
		"Date: 23:59:59 31/12/12";

var config = {
	//Enables the sections
	sections: true,
	//Writes a comment at the beginning of the file
	header: header,
	//The output is pretty printed
	pretty: true
};

var p = {
	users: {
		$comment: "User contribution",
		$value: {
			gagle: {
				$comment: "This is me!",
				$value: "100%"
			}
		}
	},
	timestamp: Date.now (),
	database: {
		user: {
			$comment: "A very long comment because I need to show you how the " +
					"comments are word wrapped at 80 columns if the output it's " +
					"pretty printed",
			$value: "root"
		},
		secret_password: "a very long password because I'm afraid that bad " +
				"people can try to use brute force to hack this database"
	}
};

properties.store (__dirname + "/pretty", p, config, function (error){
	if (error) return console.log (error);
});