const {  Model, DataTypes } = require('sequelize');

const {sequelize} = require('../controller/db');

const Turn= sequelize.define('turns',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNullable: false,
    allowNull: false,
  },
  gameId: {
    field: 'gameId',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  zarPlayerId: {
    field: 'zarPlayerId',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  paranoid: true,
  underscored: true,
  freezeTableName: true,
  tableName: 'turns',
  modelName: 'turns'
});

(async () => {
  await Turn.sync({  });
})();

module.exports = {
  Turn,
}