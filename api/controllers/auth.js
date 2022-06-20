import User from "../models/User.js";
export const register = async (req, res, next) => {
	try {
		const newUser = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		await newUser.save();
		res.status(201).json({
			message: "User created successfully",
			data: newUser,
		});
	} catch (err) {
		next(err);
	}
};
