'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'exams',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        examResult: {
          type: Sequelize.INTEGER,
        },
        studentId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'students',
            key: 'id',
            as: 'studentId',
          },
        },
        subjectId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'subjects',
            key: 'id',
            as: 'subjectId',
          },
        },
        examDate: {
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
      },
      {
        uniqueKeys: {
          studentSubjectUnique: {
            fields: ['subjectId', 'studentId'],
          },
        },
      },
    );

    await queryInterface.bulkInsert('exams', [
      {
        examResult: 45,
        studentId: 1,
        subjectId: 1,
        examDate: '2009-03-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 65,
        studentId: 2,
        subjectId: 1,
        examDate: '2011-04-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 52,
        studentId: 3,
        subjectId: 1,
        examDate: '2013-02-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 78,
        studentId: 4,
        subjectId: 1,
        examDate: '2012-05-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 85,
        studentId: 5,
        subjectId: 1,
        examDate: '2015-08-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 44,
        studentId: 1,
        subjectId: 2,
        examDate: '2010-03-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 75,
        studentId: 2,
        subjectId: 2,
        examDate: '2012-04-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 55,
        studentId: 3,
        subjectId: 2,
        examDate: '2014-02-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 52,
        studentId: 4,
        subjectId: 2,
        examDate: '2013-05-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 63,
        studentId: 5,
        subjectId: 2,
        examDate: '2016-08-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 43,
        studentId: 1,
        subjectId: 3,
        examDate: '2011-03-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 71,
        studentId: 2,
        subjectId: 3,
        examDate: '2013-04-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 51,
        studentId: 3,
        subjectId: 3,
        examDate: '2015-02-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 57,
        studentId: 4,
        subjectId: 3,
        examDate: '2014-05-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 73,
        studentId: 5,
        subjectId: 3,
        examDate: '2017-08-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 46,
        studentId: 1,
        subjectId: 6,
        examDate: '2012-03-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 76,
        studentId: 2,
        subjectId: 7,
        examDate: '2014-04-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 49,
        studentId: 3,
        subjectId: 8,
        examDate: '2016-02-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 76,
        studentId: 4,
        subjectId: 12,
        examDate: '2015-05-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        examResult: 65,
        studentId: 5,
        subjectId: 10,
        examDate: '2018-08-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('exams');
  },
};
