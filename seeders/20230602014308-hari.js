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
    await queryInterface.bulkInsert('Haris', [
      {
        hari:"Minggu",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        hari:"Senin",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        hari:"Selasa",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        hari:"Rabu",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        hari:"Kamis",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        hari:"Jumat",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        hari:"Sabtu",
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
