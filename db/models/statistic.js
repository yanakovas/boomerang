'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Statistic.init({
    name: DataTypes.TEXT,
    enemieKilled: DataTypes.INTEGER,
    point: DataTypes.INTEGER,
    timeGame: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Statistic',
  });
  return Statistic;
};