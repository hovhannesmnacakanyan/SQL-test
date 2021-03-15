'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      surname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      admissionDate: {
        type: Sequelize.DATEONLY,
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

    await queryInterface.bulkInsert('students', [
      {
        name: 'Hovhannes',
        surname: 'Mnatsakanyan',
        email: 'm.hovo@gmail.com',
        phone: '+37493505479',
        admissionDate: '2008-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tatevik',
        surname: 'Shahnazaryan',
        email: 's.tatevik@gmail.com',
        phone: '+37493125412',
        admissionDate: '2010-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sofi',
        surname: 'Mnacakanyan',
        email: 'm.sofi@gmail.com',
        phone: '+37493254147',
        admissionDate: '2012-10-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nika',
        surname: 'Mnacakanyan',
        email: 'm.nika@gmail.com',
        phone: '+37493325415',
        admissionDate: '2012-03-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vahe',
        surname: 'Martirosyan',
        email: 'm.vahe@gmail.com',
        phone: '+37493326587',
        admissionDate: '2015-03-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');
  },
};
