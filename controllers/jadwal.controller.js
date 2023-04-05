const models = require("../models");
const { Jadwal } = models;

module.exports = {
  getAllJadwal: async (req, res) => {
    try {
      const jadwal = await Jadwal.findAll();
      res.json({
        message: "Data ditemukan!",
        data: jadwal,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getJadwalByID: async (req, res) => {
    const { id } = req.params;

    try {
      const jadwal = await Jadwal.findByPk(id);
      res.json({
        message: "Data ditemukan!",
        data: jadwal,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  addJadwal: async (req, res) => {
    Jadwal.create({
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

  deleteJadwalByID: (req, res) => {
    Jadwal.destroy({
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

  updateJadwalByID: (req, res) => {
    Jadwal.update(
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
