const express = require("express");
const router = express.Router();

const {
  getAllArmada,
  getArmadaByID,
  addArmada,
  deleteArmadaByID,
  updateArmadaByID
} = require("../controllers/armada.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllArmada);
router.get("/:id", getArmadaByID);
router.post("/", addArmada);
router.delete("/:id", deleteArmadaByID);
router.put("/:id", updateArmadaByID);

module.exports = router;
