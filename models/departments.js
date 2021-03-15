'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class departments extends Model {
    static associate = models => {
      departments.hasMany(models.subjects, {
        foreignKey: { allowNull: false },
        onDelete: 'CASCADE',
      });
    };
  }

  departments.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'departments',
    },
  );

  return departments;
};
