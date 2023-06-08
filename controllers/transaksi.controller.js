const models = require("../models");
const { Transaksi, User, Rute, Jadwal_driver, Driver, Hari, Jam } = models;

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

  addTransaksi: async (req, res, next) => {
    coreApi.charge(req.body).then((chargeResponse) => {
      var dataOrder = {
        id: chargeResponse.order_id,
        UserId: req.body.UserId,
        JadwalDriverId: req.body.JadwalDriverId,
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
