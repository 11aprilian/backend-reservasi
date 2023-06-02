const models = require("../models");
const { Driver } = models;

module.exports = {
  getAllDriver: async (req, res) => {
    try {
      const driver = await Driver.findAll();
      res.json({
        message: "Data ditemukan!",
        data: driver,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getDriverByID: async (req, res) => {
    const { id } = req.params;

    try {
      const driver = await Driver.findByPk(id);
      res.json({
        message: "Data ditemukan!",
        data: driver,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  addDriver: async (req, res) => {
    Driver.create({
      nama: req.body.nama
    })
      .then(function (result) {
        res.json(result);
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  deleteDriverByID: (req, res) => {
    Driver.destroy({
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

  updateDriverByID: (req, res) => {
    Driver.update(
      {
        nama: req.body.nama,
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
};
