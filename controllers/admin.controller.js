require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const models = require("../models");
const { Admin } = models;

module.exports = {
  getAllAdmin: async (req, res) => {
    try {
      const admin = await Admin.findAll();
      res.json({
        message: "Data ditemukan!",
        data: admin,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getAdminByID: async (req, res) => {
    const { id } = req.params;
    try {
      const admin = await Admin.findByPk(id);

      if (admin)
        res.status(200).json({
          message: "Data ditemukan!",
          data: admin,
        });

      if (!admin)
        res.json({
          message: "Data tidak ditemukan!",
        });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  addAdmin: async (req, res) => {
    const { username, password } = req.body;
    const usernameExist = await Admin.findOne({
      where: { username: username },
    });

    if (!password)
      return res.status(400).send({
        message: "Silahkan masukkan password!",
      });

    if (password.length < 6)
      return res.status(400).send({
        message: "Password minimal 6 kata!",
      });

    if (!username)
      return res.status(400).send({
        message: "Silahkan masukkan username!",
      });

    if (username.length < 4)
      return res.status(400).send({
        message: "Username minimal 4 kata!",
      });

    if (usernameExist)
      return res.status(400).send({
        message: "Username sudah digunakan, mohon gunakan username yang lain!",
      });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    Admin.create({
      username: req.body.username,
      password: hashPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then(function (result) {
        res.json(result);
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  deleteAdminByID: (req, res) => {
    Admin.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(function (result) {
        res.json({ message: "Data berhasil dihapus!" });
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  updateAdminByID: async (req, res) => {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    Admin.update(
      {
        username: username,
        password: hashPassword,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(function (result) {
        res.json({ message: "Data berhasil diperbarui!" });
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ where: { username: username } });
    if (admin) {
      const checkPass = await bcrypt.compare(password, admin.password);
      if (!checkPass) {
        return res
          .status(400)
          .send({ message: "Password yang dimasukkan salah!" });
      } else {
        const token = jwt.sign({ id: admin.id }, process.env.ADMIN_KEY);
        res.send({
          message: "Login Berhasil!",
          token,
          id: admin.id,
          username: admin.username,
        });
      }
    } else {
      return res.status(404).send({ message: "User tidak ditemukan!" });
    }
  },
};
