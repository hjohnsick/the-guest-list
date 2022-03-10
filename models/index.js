// import models
const User = require('./User');
const GuestList = require('./GuestList');
// waiting for the codes for Food model(table)
const Food = require('./Food');

GuestList.belongsTo(User, {
  foreignkey: "user_id",
});

User.hasMany(GuestList, {
  foreignkey: "user_id",
});

Food.belongsTo(GuestList, {
  foreignkey: "guest_id",
});


module.exports = {
  User, GuestList, Food
};