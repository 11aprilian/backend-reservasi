'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaksi.belongsTo(models.User)
      models.User.hasMany(Transaksi)

      Transaksi.belongsTo(models.Jadwal_driver)
      models.Jadwal_driver.hasMany(Transaksi)

      Transaksi.belongsTo(models.Seat)
      models.Seat.hasMany(Transaksi)
    }
  }
  Transaksi.init({
    UserId: DataTypes.INTEGER,
    JadwalDriverId: DataTypes.INTEGER,
    SeatId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    tanggal: DataTypes.STRING,
    payment: DataTypes.TEXT,
    total: DataTypes.INTEGER,
    paid: DataTypes.STRING,
    bank: DataTypes.STRING,
    va_number: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Transaksi',
  });
  return Transaksi;
};