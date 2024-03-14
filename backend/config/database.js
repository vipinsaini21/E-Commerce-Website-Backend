// Importing Mongoose to connect server with mongoDB
const mongoose = require("mongoose");

const connectDatabase = () => {
	mongoose
		.connect(process.env.DB_URI, {
			// Use below commands if using mongoose of version 6 or less
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
			// useCreateIndex: true,
		})
		.then((data) => {
			console.log(`Mongodb connected with server: ${data.connection.host}`);
		});
	// Haven't written the catch block since handled the error in error.js
};

module.exports = connectDatabase;
