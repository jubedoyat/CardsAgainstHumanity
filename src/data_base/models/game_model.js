const {  Model, DataTypes } = require('sequelize');

const {sequelize} = require('../controller/db');

const Game= sequelize.define('games',{
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
    allowNull: false,
  },
  name: {
    field: 'name',
    type: DataTypes.CHAR(45),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'createdAt'
  }
}, {
  sequelize,
  timestamps: false,
  paranoid: true,
  underscored: true,
  freezeTableName: true,
  tableName: 'games',
  modelName: 'games'
});

(async () => {
  await Game.sync({  });
})();

module.exports = {
  Game,
}