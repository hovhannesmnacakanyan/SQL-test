'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subjects extends Model {
    static associate = models => {
      subjects.belongsTo(models.departments, {
        foreignKey: { allowNull: false },
        onDelete: 'CASCADE',
      });

      subjects.hasMany(models.exams, {
        foreignKey: { allowNull: false },
        onDelete: 'CASCADE',
      });
    };
  }

  subjects.init(
    {
      name: DataTypes.STRING,
      departmentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'departments',
          key: 'id',
          as: 'departmentId',
        },
      },
      credit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'subjects',
    },
  );

  return subjects;
};
