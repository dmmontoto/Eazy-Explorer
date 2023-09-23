const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plan extends Model {}

Plan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    description: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    posted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    date_posted: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plan',
  }
);

module.exports = Plan;
