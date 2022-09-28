import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Get All
router.get("/", getRooms);

//Get
router.get("/:id", getRoom);

//Update
router.put("/:id", verifyAdmin, updateRoom);

//Create
router.post("/:hotelId", verifyAdmin, createRoom);

//Delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//put
router.put("/availability/:roomId", updateRoomAvailability);

export default router;
