// Currently not being used

// const {Model, DataTypes} = require('sequelize');
// const sequelize = require('../config/connection');

// class Userdislikes extends Model {};

// Userdislikes.init(
// {
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },   
//     disliked_id: {
//             type: DataTypes.INTEGER,
//         },       
    
//     user_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: 'user',
//             key: 'id'
//         }
//     },
// },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'userdislikes',
//     }
// )

// module.exports = Userdislikes;