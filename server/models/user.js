'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/encryptor');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name Must be filled!',
        },
        notEmpty: {
          msg: 'Name Must be filled!',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email already exists!',
      },
      validate: {
        notNull: {
          msg: 'Email Must be filled!',
        },
        notEmpty: {
          msg: 'Email Must be filled!',
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Phone Must be filled!',
        },
        notEmpty: {
          msg: 'Phone Must be filled!',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password Must be filled!',
        },
        notEmpty: {
          msg: 'Password Must be filled!',
        },
      },
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Type Must be filled!',
        },
        notEmpty: {
          msg: 'Type Must be filled!',
        },
      },
    },
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(user => {
    user.password = hashPass(user.password)
  })

  return User;
};