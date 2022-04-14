const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Liked extends Model {};

Liked.init(
{
     liked_id: {
            type: DataTypes.INTEGER,
        },       
    
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'liked',
    }
)

module.exports = Liked;