const functions = require("firebase-functions");

exports.helloworld = functions.https.onRequest((request, response) => {
	response.send("hello.world");
});

/* const express = require("express");
const cors = require("cors");

const app = express();

app.use(
	cors({
		origin: true
	})
);
app.use(express.json());

app.get("*", (req, res) => {
	res.status(404).send("404, Not Found");
});

exports.api = functions.https.onRequest(app); */
