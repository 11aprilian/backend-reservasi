'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tanggal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tanggal.init({
    tanggal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tanggal',
  });
  return Tanggal;
};