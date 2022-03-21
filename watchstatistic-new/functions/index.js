const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const importData = require("./watchesCorr.json");
const admin = require("firebase-admin");
const { sendEmail } = require("./email");

admin.initializeApp(functions.config().firebase);

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({ data: "welcome to watch statistics endpoint" });
});

app.get(`/watchcorrelations`, (req, res) => {
  res.status(200).send(importData);
});

app.get("/submitfeedback", async (req, res) => {
  try {
    const { userEmail, userName, message } = req.body;
    const submitFeedback = await sendEmail(userEmail, userName, message);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: err.message,
    });
  }
});

sendEmail("teste", "teste2", "teste3");

exports.api = functions.https.onRequest(app);

/* app.get(`/teste`, (req, res) => {
	res.send(handleFetchAllProducts());
});

exports.app = functions.https.onRequest(app);

const handleFetchAllProducts = () => {
	const db = admin.firestore();
	db.collection("products")
		.get()
		.then((snapshot) => {
			const data = [
				...snapshot.docs.map((doc) => {
					return {
						...doc.data(),
						documentID: doc.id
					};
				})
			];

			resolve({ teste: teste, data });
		})
		.catch((err) => {
			reject(err);
		});
}; */
