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
} = require("../controllers/transaksi.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllTransaksi);
router.get("/:id", getTransaksiByID);
router.get("/user/:id", getTransaksiByUserID);
router.post("/", verifyUserToken, addTransaksi);
router.delete("/:id", deleteTransaksiByID);
router.put("/:id", updateTransaksiByID);
router.post("/notifikasi/:id", notifTransaksi);

module.exports = router;
