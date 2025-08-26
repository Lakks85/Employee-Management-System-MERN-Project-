import mongoose from "mongoose"
import validator from "validator"

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid Email"]
  },

  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone Number must be 11 digits"],
    maxLength: [11, "Phone Number must be 11 digits"]
  },

  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"]
  },

  nic: {
    type: String,
    required: true,
    minLength: [13, "NIC Number must be 13 characters"],
    maxLength: [13, "NIC Number must be 13 characters"],
  }
})

const Employee = mongoose.model("AddEmployee", employeeSchema)

export default Employee;
