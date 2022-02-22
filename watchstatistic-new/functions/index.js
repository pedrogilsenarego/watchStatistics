const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const importData = require("./watchesCorr.json");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send({ data: "welcome to watch statistics endpoint" });
});

app.get(`/watchcorrelations`, (req, res) => {
	res.send(importData);
});

exports.app = functions.https.onRequest(app);

/* exports.addWatches = function.firestore.document("/products/{documentID}").onCreate((snapshot, context)=>{
	console.log(snapshot.data())
	return Promise.resolve()
}) */
