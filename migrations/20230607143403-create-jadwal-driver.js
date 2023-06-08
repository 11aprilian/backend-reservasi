'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jadwal_drivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      JamId: {
        type: Sequelize.INTEGER,
        references: { model: 'Jam', key: 'id' }
      },
      HariId: {
        type: Sequelize.INTEGER,
        references: { model: 'Haris', key: 'id' }
      },
      RuteId: {
        type: Sequelize.INTEGER,
        references: { model: 'Rutes', key: 'id' }
      },
      DriverId: {
        type: Sequelize.INTEGER,
        references: { model: 'Drivers', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jadwal_drivers');
  }
};