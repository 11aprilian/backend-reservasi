const express = require("express");
const router = express.Router();

const {
  getAllRute,
  getRuteByID,
  addRute,
  deleteRuteByID,
  updateRuteByID,
} = require("../controllers/rute.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllRute);
router.get("/:id", getRuteByID);
router.post("/", addRute);
router.delete("/:id", deleteRuteByID);
router.put("/:id", updateRuteByID);

module.exports = router;
