// import models
const User = require("./User");
const GuestList = require("./GuestList");
// waiting for the codes for Food model(table)
const Food = require("./Food");

// Associations here

GuestList.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(GuestList, {
  foreignKey: "user_id",
});

GuestList.belongsTo(Food, {
  foreignKey: "food_id",
});

module.exports = {
  User,
  GuestList,
  Food,
};
