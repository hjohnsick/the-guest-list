const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const GuestList = require("./GuestList");

class Food extends Model {}
//foodtable
Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
        },

        food: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        guest_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "guestList",
                key: "id",
            }
        }
    },  

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "guestList",
    }  
);

module.exports = Food;