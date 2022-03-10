const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FoodList extends Model {}

FoodList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
        },

        food: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        guest_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: 
        }
    }    
);

module.exports = FoodList