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
      // minggu
      {
        HariId:"1",
        JamId:"1",
        RuteId:"1",
        DriverId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"2",
        RuteId:"1",
        DriverId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"3",
        RuteId:"1",
        DriverId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"1",
        RuteId:"2",
        DriverId:"4",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"2",
        RuteId:"2",
        DriverId:"5",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"3",
        RuteId:"2",
        DriverId:"6",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"1",
        RuteId:"3",
        DriverId:"7",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"2",
        RuteId:"3",
        DriverId:"8",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"3",
        RuteId:"3",
        DriverId:"9",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"1",
        RuteId:"4",
        DriverId:"10",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"2",
        RuteId:"4",
        DriverId:"11",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"1",
        JamId:"3",
        RuteId:"4",
        DriverId:"12",
        createdAt: new Date(), 
        updatedAt: new Date()
      },

      //senin
      {
        HariId:"2",
        JamId:"1",
        RuteId:"1",
        DriverId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"",
        JamId:"2",
        RuteId:"1",
        DriverId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"3",
        RuteId:"1",
        DriverId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"1",
        RuteId:"2",
        DriverId:"4",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"2",
        RuteId:"2",
        DriverId:"5",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"3",
        RuteId:"2",
        DriverId:"6",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"1",
        RuteId:"3",
        DriverId:"7",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"2",
        RuteId:"3",
        DriverId:"8",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"3",
        RuteId:"3",
        DriverId:"9",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"1",
        RuteId:"4",
        DriverId:"10",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"2",
        RuteId:"4",
        DriverId:"11",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"2",
        JamId:"3",
        RuteId:"4",
        DriverId:"12",
        createdAt: new Date(), 
        updatedAt: new Date()
      },

      //selasa
      {
        HariId:"3",
        JamId:"1",
        RuteId:"1",
        DriverId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"2",
        RuteId:"1",
        DriverId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"3",
        RuteId:"1",
        DriverId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"1",
        RuteId:"2",
        DriverId:"4",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"2",
        RuteId:"2",
        DriverId:"5",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"3",
        RuteId:"2",
        DriverId:"6",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"1",
        RuteId:"3",
        DriverId:"7",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"2",
        RuteId:"3",
        DriverId:"8",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"3",
        RuteId:"3",
        DriverId:"9",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"1",
        RuteId:"4",
        DriverId:"10",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"2",
        RuteId:"4",
        DriverId:"11",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"3",
        JamId:"3",
        RuteId:"4",
        DriverId:"12",
        createdAt: new Date(), 
        updatedAt: new Date()
      },

      //rabu
      {
        HariId:"4",
        JamId:"1",
        RuteId:"1",
        DriverId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"2",
        RuteId:"1",
        DriverId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"3",
        RuteId:"1",
        DriverId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"1",
        RuteId:"2",
        DriverId:"4",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"2",
        RuteId:"2",
        DriverId:"5",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"3",
        RuteId:"2",
        DriverId:"6",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"1",
        RuteId:"3",
        DriverId:"7",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"2",
        RuteId:"3",
        DriverId:"8",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"3",
        RuteId:"3",
        DriverId:"9",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"1",
        RuteId:"4",
        DriverId:"10",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"2",
        RuteId:"4",
        DriverId:"11",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"4",
        JamId:"3",
        RuteId:"4",
        DriverId:"12",
        createdAt: new Date(), 
        updatedAt: new Date()
      },

      //kamis
      {
        HariId:"5",
        JamId:"1",
        RuteId:"1",
        DriverId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"2",
        RuteId:"1",
        DriverId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"3",
        RuteId:"1",
        DriverId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"1",
        RuteId:"2",
        DriverId:"4",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"2",
        RuteId:"2",
        DriverId:"5",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"3",
        RuteId:"2",
        DriverId:"6",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"1",
        RuteId:"3",
        DriverId:"7",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"2",
        RuteId:"3",
        DriverId:"8",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"3",
        RuteId:"3",
        DriverId:"9",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"1",
        RuteId:"4",
        DriverId:"10",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"2",
        RuteId:"4",
        DriverId:"11",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"5",
        JamId:"3",
        RuteId:"4",
        DriverId:"12",
        createdAt: new Date(), 
        updatedAt: new Date()
      },

      //jumat
      {
        HariId:"6",
        JamId:"1",
        RuteId:"1",
        DriverId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"2",
        RuteId:"1",
        DriverId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"3",
        RuteId:"1",
        DriverId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"1",
        RuteId:"2",
        DriverId:"4",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"2",
        RuteId:"2",
        DriverId:"5",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"3",
        RuteId:"2",
        DriverId:"6",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"1",
        RuteId:"3",
        DriverId:"7",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"2",
        RuteId:"3",
        DriverId:"8",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"3",
        RuteId:"3",
        DriverId:"9",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"1",
        RuteId:"4",
        DriverId:"10",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"2",
        RuteId:"4",
        DriverId:"11",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"6",
        JamId:"3",
        RuteId:"4",
        DriverId:"12",
        createdAt: new Date(), 
        updatedAt: new Date()
      },

      //sabtu
      {
        HariId:"7",
        JamId:"1",
        RuteId:"1",
        DriverId:"1",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"2",
        RuteId:"1",
        DriverId:"2",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"3",
        RuteId:"1",
        DriverId:"3",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"1",
        RuteId:"2",
        DriverId:"4",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"2",
        RuteId:"2",
        DriverId:"5",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"3",
        RuteId:"2",
        DriverId:"6",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"1",
        RuteId:"3",
        DriverId:"7",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"2",
        RuteId:"3",
        DriverId:"8",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"3",
        RuteId:"3",
        DriverId:"9",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"1",
        RuteId:"4",
        DriverId:"10",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"2",
        RuteId:"4",
        DriverId:"11",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        HariId:"7",
        JamId:"3",
        RuteId:"4",
        DriverId:"12",
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
