'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('article', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'users'
        },
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hits: {
      type: DataTypes.INTEGER,
      comment: '浏览数'
    },
    post_name: {
      type: DataTypes.INTEGER,
      comment: '评论数'
    },
    on_top: {
      type: DataTypes.INTEGER(1),
    },
    status: {
      type: DataTypes.INTEGER(1),
    }
  }, {
    comment: '文章表',
    modelName: 'article'
  });
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};