'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jadwal_driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jadwal_driver.belongsTo(models.Tanggal)
      models.Tanggal.hasMany(Jadwal_driver)

      Jadwal_driver.belongsTo(models.Jadwal)
      models.Jadwal.hasMany(Jadwal_driver)

      // Jadwal_driver.belongsToMany(models.Driver, { 
      //   through: models.Driver_option,
      //   foreignKey: 'DriverId',
      //   otherKey: 'Jadwal_driverId',
      // });
    }
  }
  Jadwal_driver.init({
    // JadwalId: DataTypes.INTEGER,
    // TanggalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jadwal_driver',
  });
  return Jadwal_driver;
};