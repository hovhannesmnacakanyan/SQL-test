'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('departments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.bulkInsert('departments', [
      { name: 'Informatika', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cancer', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mexanika', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('departments');
  },
};
