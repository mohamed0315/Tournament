const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: 0,
  },
  email:{
      type: String,
      required: true,
  },
  phoneNumber:{
      type:String,
      default: null,
  },
  proBoolean:{
    type: Boolean,
    default: false,
  },
  activities:{
    type:Array,
  },
  biography:{
    type: String,
    default: "Je n'ai pas encore d'inspiration pour ma bio",
  },
  listEvents:{
    type:Array,
  },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;