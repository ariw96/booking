import express from "express";
import {
	updateUser,
	deleteUser,
	getUser,
	getUsers,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
// router.get("/checkAuth", verifyToken, (req, res, next) => {
// 	res.status(200).send("You are logged in");
// });
// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
// 	res.status(200).send("You are logged in can delete user");
// });
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
// 	res.status(200).send("You are admin in can delete user");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
