const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Nerd_Type extends Model {};

Nerd_Type.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },         
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
   
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'nerd_type',
    }
)

module.exports = Nerd_Type;