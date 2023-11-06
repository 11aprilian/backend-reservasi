const models = require("../models");
const { Armada } = models;

module.exports = {
  getAllArmada: async (req, res) => {
    try {
      const armada = await Armada.findAll();
      res.json({
        message: "Data ditemukan!",
        data: armada,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getArmadaByID: async (req, res) => {
    const { id } = req.params;

    try {
      const armada = await Armada.findByPk(id);
      res.json({
        message: "Data ditemukan!",
        data: armada,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  addArmada: async (req, res) => {
    Armada.create({
      nama: req.body.nama,
      keterangan: req.body.keterangan,
      gambar: req.body.gambar
    })
      .then(function (result) {
        res.json(result);
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  deleteArmadaByID: (req, res) => {
    Armada.destroy({
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

  updateArmadaByID: (req, res) => {
    Armada.update(
      {
        nama: req.body.nama,
        keterangan: req.body.keterangan,
        gambar: req.body.gambar
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
