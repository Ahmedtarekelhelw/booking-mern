import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
  countByCity,
  getHotelRooms,
  countByType,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Get All
router.get("/", getHotels);

//Get
router.get("/find/:id", getHotel);

//countByCity
router.get("/countByCity", countByCity);

//countByType
router.get("/countByType", countByType);

//Update
router.put("/:id", verifyAdmin, updateHotel);

//Create
router.post("/", verifyAdmin, createHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/room/:hotelId", getHotelRooms);

export default router;
