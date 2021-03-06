'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tokens.belongsTo(models.User);
      Tokens.hasMany(models.TokenUse)
    }
  }
  Tokens.init({
    token: DataTypes.STRING,
    expiresAt: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tokens',
  });
  return Tokens;
};