const express = require("express");
const router = express.Router();

const {
  getAllRute,
  getRuteByID,
  addRute,
  deleteRuteByID,
  updateRuteByID,
  getRuteByName,
} = require("../controllers/rute.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllRute);
router.get("/:id", getRuteByID);
router.get("/name/:name", getRuteByName);
router.post("/", verifyAdminToken, addRute);
router.delete("/:id", verifyAdminToken, deleteRuteByID);
router.put("/:id", verifyAdminToken, updateRuteByID);

module.exports = router;
