'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subtotal: DataTypes.DECIMAL,
    iva: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};