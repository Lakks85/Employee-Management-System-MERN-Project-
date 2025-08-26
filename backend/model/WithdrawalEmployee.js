import mongoose from "mongoose";

const withdrawnStudentSchema = new mongoose.Schema({
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

  },

  phone: {
    type: String,
    required: true,

  },

  gender: {
    type: String,
    required: true,
  },

  nic: {
    type: String,
    required: true,

  }
});

const WithdrawalEmployee = mongoose.model("WithdrawalEmployee", withdrawnStudentSchema);

export default WithdrawalEmployee;
