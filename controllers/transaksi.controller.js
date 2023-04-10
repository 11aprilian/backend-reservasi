const models = require("../models");
const { Transaksi } = models;
const { User } = models;
const { Rute } = models;
const { Jadwal } = models;

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
            model: Rute,
            as: "Rute",
          },
          {
            model: Jadwal,
            as: "Jadwal",
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
            model: Rute,
            as: "Rute",
          },
          {
            model: Jadwal,
            as: "Jadwal",
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
            model: Rute,
            as: "Rute",
          },
          {
            model: Jadwal,
            as: "Jadwal",
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
            model: Rute,
            as: "Rute",
          },
          {
            model: Jadwal,
            as: "Jadwal",
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
        RuteId: req.body.RuteId,
        JadwalId: req.body.JadwalId,
        nama: req.body.nama,
        alamat: req.body.alamat,
        no_hp: req.body.no_hp,
        tanggal: req.body.tanggal,
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
        id_user: req.body.id_user,
        id_rute: req.body.id_rute,
        id_jadwal: req.body.id_jadwal,
        nama: req.body.nama,
        alamat: req.body.alamat,
        no_hp: req.body.no_hp,
        tanggal: req.body.tanggal,
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
