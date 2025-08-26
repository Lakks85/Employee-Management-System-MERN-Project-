import mongoose from "mongoose"
import bycrypt from "bcrypt"
import validator from "validator"

const userRegister = new mongoose.Schema({
  fullName: {
    type: String,
    required:true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true,
    minLength: [8, "Password must be 8 characters"],
    select: false
  }
})

userRegister.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next()
  }
  this.password = await bycrypt.hash(this.password, 10)
})

userRegister.methods.comparePassword = async function (enterPassword) {
  return await bycrypt.compare(enterPassword, this.password)
}
const Users = mongoose.model("Users", userRegister)

export default Users;
