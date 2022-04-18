const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Pictures extends Model {};

Pictures.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    pic: {
        type: DataTypes.BLOB("long"),
        
      },   
    
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pictures',
    }
)

module.exports = Pictures;