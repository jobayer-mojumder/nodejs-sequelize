'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {

    static associate(models) {

      post.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'userid'
      })

      post.belongsTo(models.category, {
        foreignKey: 'categoryId',
        as: 'categoryid'
      })

    }
  };
  post.init({
    title: DataTypes.STRING,
    details: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};