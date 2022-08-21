const express = require('express');
const app = express();

const format = require('date-format');

const PORT = process.env.PORT || 4000;

//at the time of deployment we want some of our variables to be coming from a central location and usually that location is process.env.PORT 

app.get("/", (req, res) => {
	res.status(200).send("<h1>Hello World !!</h1> ");
});

app.get("/api/v1/instagram", (req, res) => {
	const instaObj = {
		userName: "Bhagya_patel",
		followers: 299,
		following: 399,
		date: Date.now()
	};

	res.status(200).json(instaObj);
});

app.get("/api/v1/linkdn", (req, res) => {
	const instaObj = {
		userName: "Bhagya_patel",
		followers: 300,
		following: 300,
		date: format.asString("dd:MM hh:mm:ss", new Date())
	};

	res.status(200).json(instaObj);
});

app.get("/api/v1/facebook", (req, res) => {
	const instaObj = {
		userName: "Bhagya_patel",
		followers: 20,
		following: 25,
		date: Date.now()
	};

	res.status(200).json(instaObj);
});

app.get("/api/v1/:token", (req, res) => {
	console.log(req.params.token);
	res.status(200).json({
		params: req.params.token
	});
});

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});