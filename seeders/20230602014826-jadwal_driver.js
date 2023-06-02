'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Jadwal_drivers', [
      {
        JadwalId:"1",
        TanggalId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"2",
        TanggalId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"3",
        TanggalId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"4",
        TanggalId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"5",
        TanggalId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"1",
        TanggalId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"2",
        TanggalId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"3",
        TanggalId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"4",
        TanggalId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"5",
        TanggalId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"1",
        TanggalId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"2",
        TanggalId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"3",
        TanggalId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"4",
        TanggalId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        JadwalId:"5",
        TanggalId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
