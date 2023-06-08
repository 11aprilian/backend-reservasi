const models = require("../models");
const { Hari } = models;

module.exports = {
  getAllHari: async (req, res) => {
    try {
      const hari = await Hari.findAll();
      res.json({
        message: "Data ditemukan!",
        data: hari,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getHariByID: async (req, res) => {
    const { id } = req.params;

    try {
      const hari = await Hari.findByPk(id);

      if (hari)
        res.status(200).json({
          message: "Data ditemukan!",
          data: hari,
        });

      if (!hari)
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

  addHari: async (req, res) => {
    Hari.create({
      hari: req.body.hari
    })
      .then(function (result) {
        res.json(result);
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  deleteHariByID: (req, res) => {
    Hari.destroy({
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

  updateHariByID: (req, res) => {
    Hari.update(
      {
        hari: req.body.hari
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
