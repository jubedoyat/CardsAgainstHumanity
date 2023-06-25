const {  Model, DataTypes } = require('sequelize');

const {sequelize} = require('../controller/db');

const Player= sequelize.define('players',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNullable: false,
    allowNull: false,
  },
  name: {
    field: 'name',
    type: DataTypes.CHAR(65),
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  paranoid: true,
  underscored: true,
  freezeTableName: true,
  tableName: 'players',
  modelName: 'players'
});

(async () => {
  await Player.sync({  });
})();

module.exports = {
  Player,
}