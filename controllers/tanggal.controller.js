const models = require("../models");
const { Tanggal } = models;

module.exports = {
  getAllTanggal: async (req, res) => {
    try {
      const tanggals = await Tanggal.findAll();
      res.json({
        message: "Data ditemukan!",
        data: tanggals,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getTanggalByID: async (req, res) => {
    const { id } = req.params;

    try {
      const tanggal = await Tanggal.findByPk(id);

      if (tanggal)
        res.status(200).json({
          message: "Data ditemukan!",
          data: tanggal,
        });

      if (!tanggal)
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

  addTanggal: async (req, res) => {
    Tanggal.create({
      tanggal: req.body.tanggal
    })
      .then(function (result) {
        res.json(result);
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  deleteTanggalByID: (req, res) => {
    Tanggal.destroy({
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

  updateTanggalByID: (req, res) => {
    Tanggal.update(
      {
        tanggal: req.body.tanggal
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
