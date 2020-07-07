'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('posts', [{
      title: 'Post title',
      details: 'Sample details',
      status: 1,
      categoryId: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
