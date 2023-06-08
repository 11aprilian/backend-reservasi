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
      Jadwal_driver.belongsTo(models.Hari)
      models.Hari.hasMany(Jadwal_driver)

      Jadwal_driver.belongsTo(models.Jam)
      models.Jam.hasMany(Jadwal_driver)

      Jadwal_driver.belongsTo(models.Rute)
      models.Rute.hasMany(Jadwal_driver)

      Jadwal_driver.belongsTo(models.Driver)
      models.Driver.hasMany(Jadwal_driver)

    }
  }
  Jadwal_driver.init({
    // JamId: DataTypes.INTEGER,
    // HariId: DataTypes.INTEGER,
    // RuteId: DataTypes.INTEGER,
    // DriverId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Jadwal_driver',
  });
  return Jadwal_driver;
};