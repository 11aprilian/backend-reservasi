const models = require("../models");
const { Op } = require("sequelize");
const moment = require("moment");
const { Seat, Transaksi, Jadwal_driver, Armada } = models;

module.exports = {
  getAllSeat: async (req, res) => {
    try {
      const seat = await Seat.findAll();
      res.json({
        message: "Data ditemukan!",
        data: seat,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  }, 

  getAllSeatByArmadaID: async (req, res) => {
    try {
      const { id } = req.params;
      const seat = await Seat.findAll({where : {ArmadaId : id}});
      res.json({
        message: "Data ditemukan!",
        data: seat,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  getAvailableSeat: async (req, res) => {
    try {
      const { jadwal } = req.params;
      const { tanggal } = req.query;

      // Ambil data JadwalDriver berdasarkan parameter jadwal
      const jadwalDriver = await Jadwal_driver.findByPk(jadwal);
      if (!jadwalDriver) {
        return res.status(404).json({ message: "Jadwal Belum Diatur!" });
      }

      // Ambil daftar kursi untuk ArmadaId yang dimiliki oleh JadwalDriver
      const semuaKursi = await Seat.findAll({
        where: { ArmadaId: jadwalDriver.ArmadaId },
      });

      // Ambil daftar transaksi pada tanggal dan JadwalDriver tertentu dengan status pembayaran 'settlement'
      const transaksi = await Transaksi.findAll({
        where: {
          tanggal: tanggal,
          paid: `settlement`,
          JadwalDriverId: jadwal,
        },
      });

      // Cari kursi yang tersedia berdasarkan daftar kursi yang telah dipesan dengan status pembayaran 'settlement'
      const kursiTersedia = semuaKursi.filter((seat) => {
        const isKursiDipesan = transaksi.some(
          (tr) =>
            tr.SeatId === seat.id && tanggal);

        // Jika kursi telah dipesan pada tanggal dan jadwal driver yang diminta, maka tidak ditampilkan (kursi tidak tersedia).
        // Jika tidak, kursi dianggap tersedia dan ditampilkan.
        return !isKursiDipesan;
      });

      res.json({
        message: "Data ditemukan!",
        data: kursiTersedia,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat memproses permintaan" });
    }
  },

  getSeatByID: async (req, res) => {
    const { id } = req.params;

    try {
      const seat = await Seat.findByPk(id);
      res.json({
        message: "Data ditemukan!",
        data: seat,
      });
    } catch (error) {
      res.status(500).send({
        status: res.statusCode,
        message: error.message,
      });
    }
  },

  addSeat: async (req, res) => {
    Seat.create({
      ArmadaId: req.body.ArmadaId,
      nomor: req.body.nomor,
    })
      .then(function (result) {
        res.json(result);
      })
      .catch(function (error) {
        res.json({ error: error });
      });
  },

  deleteSeatByID: (req, res) => {
    Seat.destroy({
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

  updateSeatByID: (req, res) => {
    Seat.update(
      {
        ArmadaID: req.body.ArmadaID,
        nomor: req.body.nomor,
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
