const models = require("../models");
const { Rute } = models;

module.exports = {
  getAllRute: async (req, res) => {
    try {
      const rutes = await Rute.findAll();
      res.json({
        message: "Data ditemukan!",
        data: rutes,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getRuteByID: async (req, res) => {
    const { id } = req.params;

    try {
      const rute = await Rute.findByPk(id);

      if (rute)
        res.status(200).json({
          message: "Data ditemukan!",
          data: rute,
        });

      if (!rute)
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

  getRuteByName: async (req, res) => {
    const { name } = req.params;

    try {
      const rute = await Rute.findAll({ where: { arah: name },
      });

      if (rute)
        res.status(200).json({
          message: "Data ditemukan!",
          data: rute,
        });

      if (!rute)
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

  addRute: async (req, res) => {
    Rute.create({
      arah: req.body.arah,
      harga: req.body.harga,
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

  deleteRuteByID: (req, res) => {
    Rute.destroy({
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

  updateRuteByID: (req, res) => {
    Rute.update(
      {
        arah: req.body.arah,
        harga: req.body.harga,
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
