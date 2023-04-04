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
    await queryInterface.bulkInsert('Rutes', [
      {
        arah:"TULUNGAGUNG-MALANG", 
        harga:"100000", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        arah:"TULUNGAGUNG-SURABAYA", 
        harga:"150000", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        arah:"KEDIRI-SURABAYA", 
        harga:"130000", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        arah:"BLITAR-SURABAYA", 
        harga:"150000", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        arah:"TRENGGALEK-SURABAYA", 
        harga:"170000", 
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
