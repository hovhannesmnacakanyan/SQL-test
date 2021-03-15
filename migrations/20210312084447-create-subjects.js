'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      departmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'departments',
          key: 'id',
          as: 'departmentId',
        },
      },
      credit: {
        type: Sequelize.INTEGER,
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

    await queryInterface.bulkInsert('subjects', [
      {
        name: 'Matematika',
        departmentId: 1,
        credit: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fizika',
        departmentId: 1,
        credit: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'C++',
        departmentId: 1,
        credit: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hayoc lezu',
        departmentId: 1,
        credit: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Matematika',
        departmentId: 2,
        credit: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fizika',
        departmentId: 2,
        credit: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'C++',
        departmentId: 2,
        credit: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hayoc lezu',
        departmentId: 2,
        credit: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Matematika',
        departmentId: 3,
        credit: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fizika',
        departmentId: 3,
        credit: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'C++',
        departmentId: 3,
        credit: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hayoc lezu',
        departmentId: 3,
        credit: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('subjects');
  },
};
