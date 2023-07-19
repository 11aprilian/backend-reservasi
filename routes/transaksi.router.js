const express = require("express");
const router = express.Router();

const {
  getAllTransaksi,
  getTransaksiByID,
  getTransaksiByUserID,
  rekapAllTransaksi,
  rekapTransaksi,
  reportTransaksi,
  reportAllTransaksi,
  addTransaksi,
  deleteTransaksiByID,
  updateTransaksiByID,
  notifTransaksi,
  getTransaksiByStatus,
} = require("../controllers/transaksi.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllTransaksi);
router.get("/:id", getTransaksiByID);
router.get("/user/:id", getTransaksiByUserID);
router.get("/user/:id/:status", getTransaksiByStatus);
router.get("/rekap/all", rekapAllTransaksi);
router.get("/rekap/:startDate/:endDate", rekapTransaksi);
router.get("/report/all/:startDate/:endDate", reportAllTransaksi);
router.get("/report/:driverId/:startDate/:endDate", reportTransaksi);
router.post("/", verifyUserToken, addTransaksi);
router.delete("/:id", deleteTransaksiByID);
router.put("/:id", updateTransaksiByID);
router.post("/notifikasi/", notifTransaksi);

module.exports = router;
