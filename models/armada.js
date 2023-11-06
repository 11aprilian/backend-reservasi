'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Armada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Armada.init({
    nama: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    gambar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Armada',
  });
  return Armada;
};