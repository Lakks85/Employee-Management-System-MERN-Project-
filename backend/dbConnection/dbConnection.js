import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL, {
   dbName: "Employee_Management_System"
  }).then(() => {
    console.log(`db is connected successfully`)
  }).catch(err => {
    console.log(`somthing error in db connection ${err}`)
  })
}
