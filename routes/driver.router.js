const express = require("express");
const router = express.Router();

const {
  getAllDriver,
  getDriverByID,
  addDriver,
  deleteDriverByID,
  updateDriverByID
} = require("../controllers/driver.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllDriver);
router.get("/:id", getDriverByID);
router.post("/", addDriver);
router.delete("/:id", deleteDriverByID);
router.put("/:id", updateDriverByID);

module.exports = router;
