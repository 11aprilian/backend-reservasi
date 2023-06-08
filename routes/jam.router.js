const express = require("express");
const router = express.Router();

const {
  getAllJam,
  getJamByID,
  addJam,
  deleteJamByID,
  updateJamByID,
} = require("../controllers/jam.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllJam);
router.get("/:id", getJamByID);
router.post("/", verifyAdminToken, addJam);
router.delete("/:id", verifyAdminToken, deleteJamByID);
router.put("/:id", verifyAdminToken, updateJamByID);

module.exports = router;
