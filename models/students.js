'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    static associate = models => {
      students.hasMany(models.exams, {
        foreignKey: { allowNull: false },
        onDelete: 'CASCADE',
      });
    };
  }

  students.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      admissionDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'students',
    },
  );

  return students;
};
