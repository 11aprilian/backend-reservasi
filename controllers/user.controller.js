require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const models = require("../models");
const { User } = models;

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json({
        message: "Data ditemukan!",
        data: users,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getUserByID: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);

      if (user)
        res.status(200).json({
          message: "Data ditemukan!",
          data: user,
        });

      if (!user)
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

  addUser: async (req, res) => {
    const { username, email, password } = req.body;
    const usernameExist = await User.findOne({ where: { username: username } });
    const emailExist = await User.findOne({ where: { email: email } });

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

    if (!email)
      return res.status(400).send({
        message: "Silahkan masukkan email!",
      });

    if (emailExist)
      return res.status(400).send({
        message: "Email sudah digunakan, mohon gunakan email yang lain!",
      });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    User.create({
      email: email,
      username: username,
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

  deleteUserByID: (req, res) => {
    User.destroy({
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

  updateUserByID: async (req, res) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    User.update(
      {
        username: username,
        email: email,
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
    const { username, email, password } = req.body;

    if (username) {
      const user = await User.findOne({ where: { username: username } });
      if (user) {
        const checkPass = await bcrypt.compare(password, user.password);
        if (!checkPass) {
          return res
            .status(400)
            .send({ message: "Password yang dimasukkan salah!" });
        } else {
          const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
          res.send({
            message: "Login Berhasil!",
            token,
            id: user.id,
            username: user.username,
            email: user.email,
          });
        }
      } else {
        return res.status(404).send({ message: "User tidak ditemukan!" });
      }
    } else {
      const user = await User.findOne({ where: { email: email } });
      if (user) {
        const checkPass = await bcrypt.compare(password, user.password);
        if (!checkPass) {
          return res
            .status(400)
            .send({ message: "Password yang dimasukkan salah!" });
        } else {
          const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
          res.send({
            message: "Login Berhasil!",
            token,
            id: user.id,
            username: user.username,
            email: user.email,
          });
        }
      } else {
        return res.status(404).send({ message: "User tidak ditemukan!" });
      }
    }
  },
};
