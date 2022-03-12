const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Food extends Model {}
//foodtable
Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    food: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "food",
  }
);

module.exports = Food;
