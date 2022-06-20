import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import errorHandler from "./middleware/errorMiddleware.js";
// import roomsRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/auth.js";
// import router from "./routes/auth.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB Connected");
	} catch (err) {
		throw err;
	}
};
//middleware
app.use("/api/auth", authRoute);
// app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);
// app.use("/api/users", usersRoute);
app.use(errorHandler);

app.listen(5000, () => {
	connect();
	console.log("Server is running on port 5000");
});
