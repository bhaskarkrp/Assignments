const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//to encrypt out password
userModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hash = await bcrypt.hashSync(this.password, 10);
  this.password = hash;
  return next();
});

//Check if the password is matching with given password
userModel.methods.checkPassword = function (password) {
  //   console.log("stored password", this.password);
  //   console.log("requested password", password);
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", userModel);
