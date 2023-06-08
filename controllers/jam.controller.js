const models = require("../models");
const { Jam } = models;

module.exports = {
  getAllJam: async (req, res) => {
    try {
      const jam = await Jam.findAll();
      res.json({
        message: "Data ditemukan!",
        data: jam,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getJamByID: async (req, res) => {
    const { id } = req.params;

    try {
      const jam = await Jam.findByPk(id);
      res.json({
        message: "Data ditemukan!",
        data: jam,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  addJam: async (req, res) => {
    Jam.create({
      jam: req.body.jam,
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

  deleteJamByID: (req, res) => {
    Jam.destroy({
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

  updateJamByID: (req, res) => {
    Jam.update(
      {
        jam: req.body.jam,
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
