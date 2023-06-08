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
    await queryInterface.bulkInsert('Drivers', [
      {nama: "aprilian", createdAt: new Date(), updatedAt: new Date()},
      {nama: "ihza", createdAt: new Date(), updatedAt: new Date()},
      {nama: "kiki", createdAt: new Date(), updatedAt: new Date()},
      {nama: "andrianto", createdAt: new Date(), updatedAt: new Date()},
      {nama: "guntur", createdAt: new Date(), updatedAt: new Date()},
      {nama: "rifai", createdAt: new Date(), updatedAt: new Date()},

      {nama: "rohmad", createdAt: new Date(), updatedAt: new Date()},
      {nama: "krisna", createdAt: new Date(), updatedAt: new Date()},
      {nama: "arif", createdAt: new Date(), updatedAt: new Date()},
      {nama: "rovin", createdAt: new Date(), updatedAt: new Date()},
      {nama: "anjis", createdAt: new Date(), updatedAt: new Date()},
      {nama: "rafif", createdAt: new Date(), updatedAt: new Date()},
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
