'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Driver.belongsToMany(models.Jadwal_driver, { 
      //   through: models.Driver_option,
      //   foreignKey: 'Jadwal_driverId',
      //   otherKey: 'DriverId',
      // });
    }
  }
  Driver.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Driver',
  });
  return Driver;
};