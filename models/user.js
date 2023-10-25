'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile, { foreignKey: 'UserId' })
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((data, options) => {
    var bcrypt = require('bcryptjs')
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(data.password, salt)
    data.password = hash
  })
  return User;
};