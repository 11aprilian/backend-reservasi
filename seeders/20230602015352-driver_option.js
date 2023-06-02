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
    await queryInterface.bulkInsert('Driver_options', [
      {
        DriverId:"1",
        JadwalDriverId:"1",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"1",
        JadwalDriverId:"2",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"1",
        JadwalDriverId:"3",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"1",
        JadwalDriverId:"4",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"1",
        JadwalDriverId:"5",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"1",
        JadwalDriverId:"6",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"1",
        JadwalDriverId:"7",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"1",
        JadwalDriverId:"8",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"1",
        JadwalDriverId:"9",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"1",
        JadwalDriverId:"10",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"1",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"2",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"3",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"4",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"5",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"6",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"7",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"8",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"9",
        status: "available",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        DriverId:"2",
        JadwalDriverId:"10",
        status: "available",
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
