import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

//create
export const createRoom = async (req, res, next) => {
  const { hotelId } = req.params;
  try {
    const newRoom = await Room.create(req.body);
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: newRoom._id } });
    } catch (error) {
      next(error);
    }
    res.status(201).json(newRoom);
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteRoom = async (req, res, next) => {
  const { id, hotelId } = req.params;

  try {
    await Room.findByIdAndDelete(id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: id } });
    } catch (error) {
      next(err);
    }
    res.status(200).json({ msg: "Room deleted successfully" });
  } catch (err) {
    next(err);
  }
};

//get
export const getRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const room = await Room.findById(id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

//get all
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

//update
export const updateRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

//put
export const updateRoomAvailability = async (req, res, next) => {
  const { roomId } = req.params;
  const { dates } = req.body;
  try {
    await Room.updateOne(
      { "roomNumbers._id": roomId },
      {
        $push: { "roomNumbers.$.unavailableDates": dates },
      }
    );
    res.status(200).json("Room unavailableDates has been updated. ");
  } catch (error) {
    next(error);
  }
};
