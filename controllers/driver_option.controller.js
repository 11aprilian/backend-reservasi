const models = require("../models");
const { Driver_option, Jadwal_driver, Driver, Tanggal, Jadwal } = models;

module.exports = {
  getAllDriverOption: async (req, res) => {
    try {
      const driver_option = await Driver_option.findAll({
        include: [
            {
              model: Driver,
              as: "Driver",
            },
            {
              model: Jadwal_driver,
              as: "Jadwal_driver",
              include: [
                {
                  model: Tanggal,
                  as: "Tanggal"
                },
                {
                  model: Jadwal,
                  as: "Jadwal"
                }
              ]
            },
          ],
      });
      res.json({
        message: "Data ditemukan!",
        data: driver_option,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getAllDriverByDriverID: async (req, res) => {
    try {
      const { driver } = req.params;
      const driver_option = await Driver_option.findAll({
        include: [
            {
              model: Driver,
              as: "Driver",
            },
            {
              model: Jadwal_driver,
              as: "Jadwal_driver",
              include: [
                {
                  model: Tanggal,
                  as: "Tanggal"
                },
                {
                  model: Jadwal,
                  as: "Jadwal"
                }
              ]
            },
          ],
          where: { DriverId: driver }
      });
      res.json({
        message: "Data ditemukan!",
        data: driver_option,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getAllDriverByJadwalDriverID: async (req, res) => {
    try {
      const { jadwaldriver } = req.params;
      const driver_option = await Driver_option.findAll({
        include: [
            {
              model: Driver,
              as: "Driver",
            },
            {
              model: Jadwal_driver,
              as: "Jadwal_driver",
              include: [
                {
                  model: Tanggal,
                  as: "Tanggal"
                },
                {
                  model: Jadwal,
                  as: "Jadwal"
                }
              ]
            },
          ],
          where: { JadwalDriverId: jadwaldriver }
      });
      res.json({
        message: "Data ditemukan!",
        data: driver_option,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getDriverOptionByID: async (req, res) => {
    const { id } = req.params;

    try {
      const driver_option = await Driver_option.findByPk(id);

      if (driver_option)
        res.status(200).json({
          message: "Data ditemukan!",
          data: driver_option,
        });

      if (!driver_option)
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

  addDriverOption: async (req, res) => {
    Driver_option.create({
      DriverId: req.body.DriverId,
      JadwalDriverId : req.body.JadwalDriverId,
      status: "available"
    })
      .then(function (result) {
        res.json(result);
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  deleteDriverOptionByID: (req, res) => {
    Driver_option.destroy({
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

  updateDriverOptionByID: (req, res) => {
    Driver_option.update(
      {
        DriverId: req.body.DriverId,
        Jadwal_driverId : req.body.Jadwal_driverId
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
