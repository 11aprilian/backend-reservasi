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
router.post("/", verifyAdminToken, addJadwal);
router.delete("/:id", verifyAdminToken, deleteJadwalByID);
router.put("/:id", verifyAdminToken, updateJadwalByID);

module.exports = router;
