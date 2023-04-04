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
    await queryInterface.bulkInsert('Jadwals', [
      {jam:"23.00", createdAt: new Date(), updatedAt: new Date()},
      {jam:"04.00", createdAt: new Date(), updatedAt: new Date()},
      {jam:"07.00", createdAt: new Date(), updatedAt: new Date()},
      {jam:"10.00", createdAt: new Date(), updatedAt: new Date()},
      {jam:"14.00", createdAt: new Date(), updatedAt: new Date()},
      {jam:"20.00", createdAt: new Date(), updatedAt: new Date()},      
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
