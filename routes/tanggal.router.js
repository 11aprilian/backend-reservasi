const express = require("express");
const router = express.Router();

const {
  getAllTanggal,
  getTanggalByID,
  addTanggal,
  deleteTanggalByID,
  updateTanggalByID,
} = require("../controllers/tanggal.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllTanggal);
router.get("/:id", getTanggalByID);
router.post("/", addTanggal);
router.delete("/:id", deleteTanggalByID);
router.put("/:id", updateTanggalByID);

module.exports = router;
