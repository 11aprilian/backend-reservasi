const models = require("../models");
const { Jadwal_driver, Hari, Jam, Rute, Driver, Armada } = models;

module.exports = {
  getAllJadwalDriver: async (req, res) => {
    try {
      const jadwal_driver = await Jadwal_driver.findAll({
        include: [
            {
              model: Hari,
              as: "Hari",
            },
            {
              model: Jam,
              as: "Jam",
            },
            {
              model: Rute,
              as: "Rute",
            },
            {
              model: Driver,
              as: "Driver",
            },
            {
              model: Armada,
              as: "Armada",
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

  getAllJadwalDriverByHari: async (req, res) => {
    const { id } = req.params;
    try {
      const jadwal_driver = await Jadwal_driver.findAll({
        include: [
            {
              model: Hari,
              as: "Hari",
            },
            {
              model: Jam,
              as: "Jam",
            },
            {
              model: Rute,
              as: "Rute",
            },
            {
              model: Driver,
              as: "Driver",
            },
            {
              model: Armada,
              as: "Armada",
            },
          ],
          order: [["HariId", "DESC"]],
          where: {HariId : id}
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

  getJadwalDriverByHariRuteJam: async (req, res) => {
    const { hari, rute, jam } = req.params;
    try {
      const jadwal_driver = await Jadwal_driver.findOne({
        include: [
            {
              model: Hari,
              as: "Hari",
            },
            {
              model: Jam,
              as: "Jam",
            },
            {
              model: Rute,
              as: "Rute",
            },
            {
              model: Driver,
              as: "Driver",
            },
            {
              model: Armada,
              as: "Armada",
            },
          ],
          where: {
            HariId : hari,
            RuteId : rute,
            JamId : jam
          }
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
      const jadwal_driver = await Jadwal_driver.findByPk(id,{
        include: [
          {
            model: Hari,
            as: "Hari",
          },
          {
            model: Jam,
            as: "Jam",
          },
          {
            model: Rute,
            as: "Rute",
          },
          {
            model: Driver,
            as: "Driver",
          },
          {
            model: Armada,
            as: "Armada",
          },
        ],
      });

      if (jadwal_driver)
        res.status(200).json({
          message: "Data ditemukan!",
          data: jadwal_driver,
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
      HariId: req.body.HariId,
      JamId : req.body.JamId,
      RuteId: req.body.RuteId,
      DriverId : req.body.DriverId,
      ArmadaId : req.body.ArmadaId
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
        DriverId: req.body.DriverId,
        ArmadaId: req.body.ArmadaId,
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
