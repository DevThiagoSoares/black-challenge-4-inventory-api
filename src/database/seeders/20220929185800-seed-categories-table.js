'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [{
      name: 'Thiago',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Mikaela',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Mathias',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};