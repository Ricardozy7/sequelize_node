'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'techs', 
      'name',
      {
        type: Sequelize.STRING
      }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'techs', 
      'name'
      );
  }
};
