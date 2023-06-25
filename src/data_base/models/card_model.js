const {  Model, DataTypes } = require('sequelize');

const {sequelize} = require('../controller/db');

const Card= sequelize.define('cards',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNullable: false,
    allowNull: false,
  },
  discardPileId: {
    field: 'discardPileId',
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  sequelize,
  timestamps: false,
  paranoid: true,
  underscored: true,
  freezeTableName: true,
  tableName: 'cards',
  modelName: 'cards'
});

(async () => {
  await Card.sync({  });
})();

module.exports = {
  Card,
}