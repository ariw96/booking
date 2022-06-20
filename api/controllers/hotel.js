import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
//post hotel
export const createHotel = async (req, res, next) => {
	const newHotel = new Hotel(req.body);
	try {
		const savedHotel = await newHotel.save();
		res.status(201);
		res.send(savedHotel);
	} catch (err) {
		next(err);
	}
};
//put hotel
export const updateHotel = async (req, res, next) => {
	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(201);
		res.send(updatedHotel);
	} catch (err) {
		next(err);
	}
};
//delete hotel
export const deleteHotel = async (req, res, next) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(201);
		res.send("Deleted hotel");
	} catch (err) {
		next(err);
	}
};
//get
export const getHotel = async (req, res, next) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(201);
		res.send(hotel);
	} catch (err) {
		next(err);
	}
};
//get all
export const getAllHotels = async (req, res, next) => {
	try {
		const hotels = await Hotel.find();
		res.status(201);
		res.send(hotels);
	} catch (err) {
		next(err);
	}
};
