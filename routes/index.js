const express = require('express');
const router = express.Router()

const adminRouter = require('./admin.router');
const userRouter = require('./user.router');
const ruteRouter = require('./rute.router');
const jadwalRouter = require('./jadwal.router');
const transaksiRouter = require('./transaksi.router');

router.use("/admin", adminRouter)
router.use("/user", userRouter)
router.use("/rute", ruteRouter)
router.use("/jadwal", jadwalRouter)
router.use("/transaksi", transaksiRouter)

module.exports = router
