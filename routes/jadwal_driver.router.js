const express = require("express");
const router = express.Router();

const {
  getAllJadwalDriver,
  getJadwalDriverByID,
  getAllJadwalDriverByHari,
  getJadwalDriverByHariRuteJam,
  addJadwalDriver,
  deleteJadwalDriverByID,
  updateJadwalDriverByID,
} = require("../controllers/jadwal_driver.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllJadwalDriver);
router.get("/:id", getJadwalDriverByID);
router.get("/hari/:id", getAllJadwalDriverByHari);
router.get("/all/:hari/:rute/:jam", getJadwalDriverByHariRuteJam);
router.post("/", addJadwalDriver);
router.delete("/:id", deleteJadwalDriverByID);
router.put("/:id", updateJadwalDriverByID);

module.exports = router;
