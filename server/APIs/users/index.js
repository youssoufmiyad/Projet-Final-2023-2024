const express = require("express");

const usersRoute = require("./routes/users.routes.js")
require("dotenv").config();

const app = express();
const PORT = 8080;

//middleware
// app.use(cors(corsOptions));
// app.use(express.json());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"OPTIONS, GET, POST, PUT, PATCH, DELETE",
	);

	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,Content-Type, Authorization",
	);
	if (req.method === "OPTIONS") {
		return res.sendStatus(200);
	}
	next();
});

// api routes
app.use("/users", usersRoute);


app.listen(PORT, () => {
	console.log(`listening on port http://localhost:${PORT}`);
});
