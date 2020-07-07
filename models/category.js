'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {

    static associate(models) {
      // category.belongsToMany(models.post, {
      //   foreignKey: 'categoryId',
      //   targetKey: 'id'
      // })
    }
  };
  category.init({
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};