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
    await queryInterface.bulkInsert('Seats', [
      //armada 1
      {
        ArmadaId:"1", 
        nomor:"1", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"1", 
        nomor:"2", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"1", 
        nomor:"3", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"1", 
        nomor:"4", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"1", 
        nomor:"5", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"1", 
        nomor:"6", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"1", 
        nomor:"7", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },

      //armada 2
      {
        ArmadaId:"2", 
        nomor:"1", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"2", 
        nomor:"2", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"2", 
        nomor:"3", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"2", 
        nomor:"4", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"2", 
        nomor:"5", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"2", 
        nomor:"6", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"2", 
        nomor:"7", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },

      //armada 3
      {
        ArmadaId:"3", 
        nomor:"1", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"3", 
        nomor:"2", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"3", 
        nomor:"3", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"3", 
        nomor:"4", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"3", 
        nomor:"5", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"3", 
        nomor:"6", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"3", 
        nomor:"7", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },

      //armada 4
      {
        ArmadaId:"4", 
        nomor:"1", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"4", 
        nomor:"2", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"4", 
        nomor:"3", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"4", 
        nomor:"4", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"4", 
        nomor:"5", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"4", 
        nomor:"6", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"4", 
        nomor:"7", 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        ArmadaId:"4", 
        nomor:"8", 
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
