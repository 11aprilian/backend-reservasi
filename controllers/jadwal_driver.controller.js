const models = require("../models");
const { Jadwal_driver, Tanggal, Jadwal } = models;

module.exports = {
  getAllJadwalDriver: async (req, res) => {
    try {
      const jadwal_driver = await Jadwal_driver.findAll({
        include: [
            {
              model: Tanggal,
              as: "Tanggal",
            },
            {
              model: Jadwal,
              as: "Jadwal",
            },
          ],
      });
      res.json({
        message: "Data ditemukan!",
        data: jadwal_driver,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getJadwalDriverByID: async (req, res) => {
    const { id } = req.params;

    try {
      const jadwal_driver = await Jadwal_driver.findByPk(id);

      if (jadwal_driver)
        res.status(200).json({
          message: "Data ditemukan!",
          data: tanggal,
        });

      if (!jadwal_driver)
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

  addJadwalDriver: async (req, res) => {
    Jadwal_driver.create({
      TanggalId: req.body.TanggalId,
      JadwalId : req.body.JadwalId
    })
      .then(function (result) {
        res.json(result);
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  deleteJadwalDriverByID: (req, res) => {
    Jadwal_driver.destroy({
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

  updateJadwalDriverByID: (req, res) => {
    Jadwal_driver.update(
      {
        TanggalId: req.body.TanggalId,
        JadwalId : req.body.JadwalId
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
