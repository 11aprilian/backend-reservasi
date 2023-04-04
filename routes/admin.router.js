const express = require("express");
const router = express.Router();

const {
  getAllAdmin,
  getAdminByID,
  addAdmin,
  deleteAdminByID,
  updateAdminByID,
  login
} = require("../controllers/admin.controller");
const verifyAdminToken = require("../middlewares/admin.auth");

router.get("/", getAllAdmin);
router.get("/:id", getAdminByID);
router.post("/", addAdmin);
router.delete("/:id", deleteAdminByID);
router.put("/:id", updateAdminByID);
router.post("/login", login);

module.exports = router;
