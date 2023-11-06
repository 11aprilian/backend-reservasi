const models = require("../models");
const { Op, literal, fn } = require("sequelize");
const {
  Transaksi,
  User,
  Rute,
  Jadwal_driver,
  Driver,
  Hari,
  Jam,
  Seat,
  sequelize,
} = models;

const midtransClient = require("midtrans-client");

let coreApi = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: "SB-Mid-server-9kuW6-DKbnJmvbpHvG7cp5Wd",
  clientKey: "SB-Mid-client-KDSEPYp5sduhlUgd",
});

module.exports = {
  getAllTransaksi: async (req, res) => {
    try {
      const transaksi = await Transaksi.findAll({
        include: [
          {
            model: User,
            as: "User",
          },
          {
            model: Seat,
            as: "Seat",
          },
          {
            model: Jadwal_driver,
            as: "Jadwal_driver",
            include: [
              {
                model: Driver,
                as: "Driver",
              },
              {
                model: Rute,
                as: "Rute",
              },
              {
                model: Hari,
                as: "Hari",
              },
            ],
          },
        ],
        order: [["updatedAt", "DESC"]],
      });
      res.json({
        message: "Data ditemukan!",
        data: transaksi,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getTransaksiByID: async (req, res) => {
    const { id } = req.params;

    try {
      const transaksi = await Transaksi.findByPk(id, {
        include: [
          {
            model: User,
            as: "User",
          },
          {
            model: Seat,
            as: "Seat",
          },
          {
            model: Jadwal_driver,
            as: "Jadwal_driver",
            include: [
              {
                model: Driver,
                as: "Driver",
              },
              {
                model: Rute,
                as: "Rute",
              },
              {
                model: Hari,
                as: "Hari",
              },
              {
                model: Jam,
                as: "Jam",
              },
            ],
          },
        ],
      });

      if (transaksi)
        res.status(200).json({
          message: "Data ditemukan!",
          data: transaksi,
        });

      if (!transaksi)
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

  getTransaksiByUserID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const transaksi = await Transaksi.findAll({
        include: [
          {
            model: User,
            as: "User",
          },
          {
            model: Jadwal_driver,
            as: "Jadwal_driver",
            include: [
              {
                model: Driver,
                as: "Driver",
              },
              {
                model: Rute,
                as: "Rute",
              },
              {
                model: Hari,
                as: "Hari",
              },
              {
                model: Jam,
                as: "Jam",
              },
              {
                model: Seat,
                as: "Seat",
              },
            ],
          },
        ],
        where: { UserId: id },
        order: [["updatedAt", "DESC"]],
      });
      res.json({
        message: "Data ditemukan!",
        data: transaksi,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getTransaksiByStatus: async (req, res, next) => {
    try {
      const { id, status } = req.params;
      const transaksi = await Transaksi.findAll({
        include: [
          {
            model: User,
            as: "User",
          },
          {
            model: Jadwal_driver,
            as: "Jadwal_driver",
            include: [
              {
                model: Driver,
                as: "Driver",
              },
              {
                model: Rute,
                as: "Rute",
              },
              {
                model: Hari,
                as: "Hari",
              },
              {
                model: Jam,
                as: "Jam",
              },
            ],
          },
        ],
        where: { UserId: id, paid: status },
        order: [["updatedAt", "DESC"]],
      });
      res.json({
        message: "Data ditemukan!",
        data: transaksi,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  rekapAllTransaksi: async (req, res, next) => {
    try {
      const transaksi = await Transaksi.findAll({
        attributes: [
          "Jadwal_driver.DriverId",
          [sequelize.fn("SUM", sequelize.col("total")), "total_pendapatan"],
          [
            sequelize.literal(
              `(
                SELECT COUNT(*)
                FROM transaksis AS t
                JOIN jadwal_drivers AS j ON t.JadwalDriverId = j.id
                WHERE j.DriverId = Jadwal_driver.DriverId
              )`
            ),
            "jumlah_transaksi",
          ],
          [
            sequelize.fn(
              "COUNT",
              sequelize.literal("DISTINCT tanggal, JadwalDriverId")
            ),
            "jumlah_perjalanan",
          ],
        ],
        include: [
          {
            model: Jadwal_driver,
            attributes: ["DriverId"],
            include: [
              {
                model: Driver,
                attributes: ["nama"],
              },
            ],
          },
        ],
        group: ["Jadwal_driver.DriverId"],
        order: [["jumlah_transaksi", "DESC"]],
      });

      res.json({
        message: "Data ditemukan!",
        data: transaksi,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Terjadi kesalahan saat mengambil data Transaksi." });
    }
  },

  rekapTransaksi: async (req, res, next) => {
    try {
      // Ambil rentang tanggal dari req.params
      const startDate = new Date(req.params.startDate);
      const endDate = new Date(req.params.endDate);

      // Query menggunakan Sequelize
      const transaksi = await Transaksi.findAll({
        attributes: [
          "Jadwal_driver.DriverId", // Kolom yang ingin dikelompokkan
          [sequelize.fn("SUM", sequelize.col("total")), "total_pendapatan"], // Kolom harga yang dijumlahkan
          [
            sequelize.literal(
              `(
                SELECT COUNT(*)
                FROM transaksis AS t
                JOIN jadwal_drivers AS j ON t.JadwalDriverId = j.id
                WHERE j.DriverId = Jadwal_driver.DriverId
                AND t.paid = "settlement"
                AND t.updatedAt BETWEEN '${startDate.toISOString()}' AND '${endDate.toISOString()}'
              )`
            ),
            "jumlah_transaksi",
          ],
          [
            sequelize.fn(
              "COUNT",
              sequelize.literal("DISTINCT tanggal, JadwalDriverId")
            ),
            "jumlah_perjalanan",
          ],
        ],
        include: [
          {
            model: Jadwal_driver,
            attributes: ["DriverId"],
            include: [
              {
                model: Driver,
                attributes: ["nama"],
              },
            ],
          },
        ],
        where: {
          paid: "settlement",
          updatedAt: {
            [Op.between]: [startDate.toISOString(), endDate.toISOString()], // Filter berdasarkan rentang updatedAt
          },
        },
        group: ["Jadwal_driver.DriverId"], // Group by Jadwal_driver.DriverId
        order: [["jumlah_transaksi", "DESC"]],
      });

      res.json({
        message: "Data ditemukan!",
        data: transaksi,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Terjadi kesalahan saat mengambil data Transaksi." });
    }
  },

  reportAllTransaksi: async (req, res, next) => {
    const startDate = new Date(req.params.startDate);
    const endDate = new Date(req.params.endDate);
    try {
      const transaksi = await Transaksi.findAll({
        include: [
          {
            model: Jadwal_driver,
            include: [
              {
                model: Driver,
                as: "Driver",
              },
              {
                model: Rute,
                as: "Rute",
              },
              {
                model: Jam,
                as: "Jam",
              },
              {
                model: Hari,
                as: "Hari",
              },
            ],
          },
          {
            model: User,
            as: "User",
          },
        ],
        where: {
          paid: "settlement",
          updatedAt: {
            [Op.between]: [startDate.toISOString(), endDate.toISOString()],
          },
        },
        order: [["updatedAt", "DESC"]],
      });

      res.json({
        message: "Data ditemukan!",
        data: transaksi,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  },

  reportTransaksi: async (req, res, next) => {
    const startDate = new Date(req.params.startDate);
    const endDate = new Date(req.params.endDate);
    const { driverId } = req.params;

    try {
      const transaksi = await Transaksi.findAll({
        include: [
          {
            model: Jadwal_driver,
            where: { Driverid: driverId },
            include: [
              {
                model: Driver,
                as: "Driver",
              },
              {
                model: Rute,
                as: "Rute",
              },
              {
                model: Jam,
                as: "Jam",
              },
              {
                model: Hari,
                as: "Hari",
              },
            ],
          },
          {
            model: User,
            as: "User",
          },
        ],
        where: {
          paid: "settlement",
          updatedAt: {
            [Op.between]: [startDate.toISOString(), endDate.toISOString()],
          },
        },
        order: [["updatedAt", "DESC"]],
      });

      res.json({
        message: "Data ditemukan!",
        data: transaksi,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  },

  addTransaksi: async (req, res, next) => {
    coreApi.charge(req.body).then((chargeResponse) => {

      var dataOrder = {
        id: chargeResponse.order_id,
        UserId: req.body.UserId,
        JadwalDriverId: req.body.JadwalDriverId,
        SeatId: req.body.SeatId,
        nama: req.body.nama,
        alamat: req.body.alamat,
        tanggal: req.body.tanggal,
        no_hp: req.body.no_hp,
        createdAt: new Date(),
        updatedAt: new Date(),
        payment: JSON.stringify(chargeResponse),
        total: chargeResponse.gross_amount,
        paid: "Pending",
        bank: req.body.bank_transfer.bank,
        va_number:
          chargeResponse.permata_va_number ||
          JSON.stringify(
            chargeResponse.va_numbers.map(({ va_number }) => va_number)
          ).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
        expiration: 600
      };

      Transaksi.create(dataOrder)
        .then(function (result) {
          res.json(result);
        })
        .catch(function (error) {
          res.json({ error: error });
        });
    });
  },

  deleteTransaksiByID: (req, res) => {
    Transaksi.destroy({
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

  updateTransaksiByID: (req, res) => {
    Transaksi.update(
      {
        UserId: req.body.UserId,
        JadwalDriverId: req.body.JadwalDriverId,
        nama: req.body.nama,
        alamat: req.body.alamat,
        no_hp: req.body.no_hp,
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
  notifTransaksi: async (req, res, next) => {
    coreApi.transaction.notification(req.body).then((statusResponse) => {
      let orderId = statusResponse.order_id;
      let paymentStatus = JSON.stringify(statusResponse);

      Transaksi.update(
        { payment: paymentStatus, paid: statusResponse.transaction_status },
        {
          where: { id: orderId },
        }
      )
        .then(function (result) {
          res.json({
            message: "Notifikasi Baru!",
            data: Transaksi,
          });
        })
        .catch(function (error) {
          res.json({ error: error });
        });
    });
  },
};
