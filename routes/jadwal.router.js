const express = require("express");
const router = express.Router();

const {
  getAllJadwal,
  getJadwalByID,
  addJadwal,
  deleteJadwalByID,
  updateJadwalByID,
} = require("../controllers/jadwal.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllJadwal);
router.get("/:id", getJadwalByID);
router.post("/", addJadwal);
router.delete("/:id", deleteJadwalByID);
router.put("/:id", updateJadwalByID);

module.exports = router;