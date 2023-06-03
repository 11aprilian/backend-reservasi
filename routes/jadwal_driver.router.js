const express = require("express");
const router = express.Router();

const {
  getAllJadwalDriver,
  getJadwalDriverByID,
  getAllJadwalDriverByTanggal,
  addJadwalDriver,
  deleteJadwalDriverByID,
  updateJadwalDriverByID,
} = require("../controllers/jadwal_driver.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllJadwalDriver);
router.get("/:id", getJadwalDriverByID);
router.get("/tanggal/:id", getAllJadwalDriverByTanggal);
router.post("/", addJadwalDriver);
router.delete("/:id", deleteJadwalDriverByID);
router.put("/:id", updateJadwalDriverByID);

module.exports = router;
