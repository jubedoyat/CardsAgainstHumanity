const {  Model, DataTypes } = require('sequelize');

const {sequelize} = require('../controller/db');

const DiscardPile= sequelize.define('cards',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNullable: false,
        allowNull: false,
    }
}, {
    sequelize,
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'cards',
    modelName: 'cards'
}
);