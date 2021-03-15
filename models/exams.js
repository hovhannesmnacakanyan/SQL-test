'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class exams extends Model {
    static associate = models => {
      exams.belongsTo(models.subjects, {
        foreignKey: { allowNull: false },
        onDelete: 'CASCADE',
      });

      exams.belongsTo(models.students, {
        foreignKey: { allowNull: false },
        onDelete: 'CASCADE',
      });
    };
  }

  exams.init(
    {
      examResult: DataTypes.INTEGER,
      studentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'students',
          key: 'id',
          as: 'studentId',
        },
        unique: 'studentSubjectUnique',
      },
      subjectId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'subjects',
          key: 'id',
          as: 'subjectId',
        },
        unique: 'studentSubjectUnique',
      },
      examDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'exams',
    },
  );

  return exams;
};
