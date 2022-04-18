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
<<<<<<< HEAD
        type: DataTypes.BLOB("long"),
        
      },   
=======
        type: DataTypes.STRING,
        defaultValue: '/assets/images/default.png'
    },   

    // pic_primary: {
    //     type: DataTypes.BOOLEAN,
    // },   
>>>>>>> db1babf39e2faa4187e650315c772a053179c854
    
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