const GuestList = require("./GuestList");
const User = require("./User");
const Food = require("./Food");

GuestList.belongsTo(User, {
  foreignkey: "user_id",
});

User.hasMany(GuestList, {
  foreignkey: "user_id",
});

Food.belongsTo(GuestList, {
  foreignkey: "guest_id",
});
