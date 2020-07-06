'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.belongsTo(models.user, {
        foreignKey: 'id',
        targetKey: 'userId'
      })
      post.belongsToMany(models.catgory, {
        foreignKey: 'id',
        targetKey: 'categoryId'
      })
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