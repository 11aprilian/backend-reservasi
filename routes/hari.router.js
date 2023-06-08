const express = require("express");
const router = express.Router();

const {
  getAllHari,
  getHariByID,
  addHari,
  deleteHariByID,
  updateHariByID,
} = require("../controllers/hari.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllHari);
router.get("/:id", getHariByID);
router.post("/", addHari);
router.delete("/:id", deleteHariByID);
router.put("/:id", updateHariByID);

module.exports = router;
