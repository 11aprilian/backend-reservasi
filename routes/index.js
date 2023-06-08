const express = require("express");
const router = express.Router();

const adminRouter = require("./admin.router");
const userRouter = require("./user.router");
const ruteRouter = require("./rute.router");
const transaksiRouter = require("./transaksi.router");
const hariRouter = require("./hari.router");
const jamRouter = require("./jam.router");
const jadwalDriverRouter = require("./jadwal_driver.router");
const driverRouter = require("./driver.router");

router.use("/admin", adminRouter);
router.use("/user", userRouter);
router.use("/rute", ruteRouter);
router.use("/transaksi", transaksiRouter);
router.use("/hari", hariRouter);
router.use("/jam", jamRouter);
router.use("/jadwaldriver", jadwalDriverRouter);
router.use("/driver", driverRouter);

module.exports = router;
