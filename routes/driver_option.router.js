const express = require("express");
const router = express.Router();

const {
  getAllDriverOption,
  getAllDriverByDriverID,
  getAllDriverByJadwalDriverID,
  getDriverOptionByID,
  addDriverOption,
  deleteDriverOptionByID,
  updateDriverOptionByID,
} = require("../controllers/driver_option.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllDriverOption);
router.get("/jadwaldriver/:jadwaldriver", getAllDriverByJadwalDriverID);
router.get("/driver/:driver", getAllDriverByDriverID);
router.get("/:id", getDriverOptionByID);
router.post("/", addDriverOption);
router.delete("/:id", deleteDriverOptionByID);
router.put("/:id", updateDriverOptionByID);

module.exports = router;
