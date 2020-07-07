'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {

    static associate(models) {

      post.belongsTo(models.user, {
        foreignKey: 'userId',
        targetKey: 'id'
      })

      // post.belongsToMany(models.category, {
      //   foreignKey: 'id',
      //   targetKey: 'categoryId'
      // })

    }
  };
  post.init({
    title: DataTypes.STRING,
    details: DataTypes.TEXT,
    catgoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};