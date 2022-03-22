const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const importData = require("./watchesCorr.json");
const admin = require("firebase-admin");
const { sendEmail } = require("./sendEmail");

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
    const { message } = req.body;
    const teste2 = {
      message: "mano",
      userName: "2",
      userEmail: "3",
    };
    const submitFeedback = await sendEmail(teste2);
    res.status(200).send(submitFeedback);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: err.message,
    });
  }
});

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
