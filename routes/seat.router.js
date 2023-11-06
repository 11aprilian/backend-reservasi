const express = require("express");
const router = express.Router();

const {
  getAllSeat,
  getAvailableSeat,
  getSeatByID,
  addSeat,
  deleteSeatByID,
  updateSeatByID,
  getAllSeatByArmadaID
} = require("../controllers/seat.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllSeat);
router.get("/armada/:id", getAllSeatByArmadaID);
router.get("/:jadwal/available", getAvailableSeat);
router.get("/:id", getSeatByID);
router.post("/", addSeat);
router.delete("/:id", deleteSeatByID);
router.put("/:id", updateSeatByID);

module.exports = router;
