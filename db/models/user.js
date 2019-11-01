'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM,
      defaultValue: '保密',
      values: ['保密', '男', '女']
    },
    email: DataTypes.STRING
  }, {
    comment: '用户表',
    modelName: 'user'
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};