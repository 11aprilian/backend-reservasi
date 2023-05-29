const express = require("express");
const router = express.Router();

const adminRouter = require("./admin.router");
const userRouter = require("./user.router");
const ruteRouter = require("./rute.router");
const jadwalRouter = require("./jadwal.router");
const transaksiRouter = require("./transaksi.router");
const tanggalRouter = require("./tanggal.router");
const jadwalDriverRouter = require("./jadwal_driver.router");

router.use("/admin", adminRouter);
router.use("/user", userRouter);
router.use("/rute", ruteRouter);
router.use("/jadwal", jadwalRouter);
router.use("/transaksi", transaksiRouter);
router.use("/tanggal", tanggalRouter);
router.use("/jadwaldriver", jadwalDriverRouter);

module.exports = router;
