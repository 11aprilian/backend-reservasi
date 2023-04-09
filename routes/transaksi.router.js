const express = require("express");
const router = express.Router();

const {
  getAllTransaksi,
  getTransaksiByID,
  getTransaksiByUserID,
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
router.post("/", verifyUserToken, addTransaksi);
router.delete("/:id", deleteTransaksiByID);
router.put("/:id", updateTransaksiByID);
router.post("/notifikasi/", notifTransaksi);

module.exports = router;
