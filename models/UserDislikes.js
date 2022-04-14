const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Disliked extends Model {};

Disliked.init(
{
    disliked_id: {
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
        modelName: 'disliked',
    }
)

module.exports = Disliked;