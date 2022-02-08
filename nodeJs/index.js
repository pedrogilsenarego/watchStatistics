const express = require("express");
const app = express();
const importData = require("./watchesCorr.json");
let port = process.env.PORT || 3000;

app.get(`/watchcorrelations`, (req, res) => {
	res.send(importData);
});

app.get(`/`, (req, res) => {
	res.send("Hello world");
});

app.listen(port, () => {
	console.log(`example app is listening on port http://localhost:${port}`);
});
