const mysql = require("mysql");

const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST || "localhost",
	user: process.env.MYSQL_USER || "root",
	password: process.env.MYSQL_PASSWORD || "",
	database: process.env.MYSQL_DATABASE || "watchstatistics"
});

connection.connect();

function createPost(firstName, callback) {
	const query = `
  INSERT INTO submitform (firstName)
  VALUES (?)
  `;

	const params = firstName; // usar array para mais valores []

	connection.query(query, params, (error, result) => {
		if (error) {
			callback(error);
			return;
		}
		callback(null, result.insertId);
	});
}
exports.createPost = createPost;

function getPosts(callback) {
	const query = `
  SELECT * FROM submitform
  `;

	connection.query(query, (error, results) => {
		if (error) {
			callback(error);
			return;
		}
		callback(null, results);
	});
}
exports.getPosts = getPosts;
