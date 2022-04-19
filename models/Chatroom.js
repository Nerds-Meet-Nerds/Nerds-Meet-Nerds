const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Chatroom extends Model {};

Chatroom.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },         
        chat_log: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        last_message: {
            type: DataTypes.STRING,
            defaultValue: 'No Messages Sent'
        },
        user_id1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        user_id2: {
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
        modelName: 'chatroom',
    }
)

module.exports = Chatroom;