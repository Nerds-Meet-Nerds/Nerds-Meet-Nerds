const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[8]
            }
        },
        nerd_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'nerd_type',
                key: 'id'
            }
        },
        liked_ids: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        disliked_ids: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            async beforeBulkCreate(newUserData) {
              var newarr = newUserData.map( user => user.get({plain: true}))
              for (user of newarr) { user.password = await bcrypt.hash(user.password, 10) }
              return newarr;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
    }
)

module.exports = User;