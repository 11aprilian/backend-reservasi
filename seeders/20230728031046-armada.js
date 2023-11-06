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
    await queryInterface.bulkInsert('Armadas', [
      {
        nama:"All New Xenia", 
        keterangan:"Xenia 1.5 R CVT ASA berkapasitas 7-penupang dibekali juga dengan transmisi Variable Speed CVT.", 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nama:"Suzuki Ertiga", 
        keterangan:"Suzuki Ertiga 2014 mampu menampung 7 orang penumpang beserta barang bawaannya", 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nama:"Toyota Avanza", 
        keterangan:"Kapasitas mesin mobil Toyota Avanza cukup besar, yakni 1.300 cc yang bisa membawa 7 penumpang.", 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nama:"Daihatsu Luxio", 
        keterangan:"Daihatsu Luxio dapat mengangkut 8 orang penumpang dengan headroom setinggi 1.915 mm.", 
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
