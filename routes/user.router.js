const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  addUser,
  deleteUserByID,
  updateUserByID,
  login,
} = require("../controllers/user.controller");
const verifyAdminToken = require("../middlewares/admin.auth");
const verifyUserToken = require("../middlewares/user.auth");

router.get("/", getAllUser);
router.get("/profile/:id", getUserByID);
router.post("/register", addUser);
router.delete("/:id", deleteUserByID);
router.put("/:id", updateUserByID);
router.post("/login", login);

module.exports = router;
