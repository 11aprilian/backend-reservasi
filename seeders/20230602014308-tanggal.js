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
    await queryInterface.bulkInsert('Tanggals', [
      {
        tanggal:"3 Juni 2023",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        tanggal:"4 Juni 2023",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        tanggal:"5 Juni 2023",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        tanggal:"6 Juni 2023",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        tanggal:"7 Juni 2023",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        tanggal:"8 Juni 2023",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        tanggal:"9 Juni 2023",
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
