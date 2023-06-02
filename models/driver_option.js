'use strict';
const {
  Model
} = require('sequelize');
const jadwal_driver = require('./jadwal_driver');
module.exports = (sequelize, DataTypes) => {
  class Driver_option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Driver_option.belongsTo(models.Driver)
      models.Driver.hasMany(Driver_option)

      Driver_option.belongsTo(models.Jadwal_driver)
      models.Jadwal_driver.hasMany(Driver_option)
    }
  }
  Driver_option.init({
    // DriverId: DataTypes.INTEGER,
    // Jadwal_driverId: DataTypes.INTEGER
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Driver_option',
  });
  return Driver_option;
};