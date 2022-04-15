const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User_Likes extends Model {};

User_Likes.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

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
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_likes',
    }
)

module.exports = User_Likes;