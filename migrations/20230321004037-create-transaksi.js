'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transaksis', {
      UserId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      RuteId: {
        type: Sequelize.INTEGER,
        references: { model: 'Rutes', key: 'id' }
      },
      JadwalId: {
        type: Sequelize.INTEGER,
        references: { model: 'Jadwals', key: 'id' }
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      no_hp: {
        type: Sequelize.STRING
      },
      tanggal: {
        type: Sequelize.STRING
      },
      payment: {
        type: Sequelize.TEXT
      },
      total: {
        type: Sequelize.INTEGER
      },
      paid: {
        type: Sequelize.STRING
      },
      bank: {
        type: Sequelize.STRING
      },
      va_number: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Transaksis');
  }
};