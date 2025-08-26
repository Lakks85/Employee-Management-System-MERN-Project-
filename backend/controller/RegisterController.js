import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleWare.js";
import Users from "../model/userRegister.js";


 export const Register = catchAsyncError(async (req, res, next) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return next (new ErrorHandler("please full all inputs in the form", 400))
  }

  let user = await Users.findOne({ email })

  if (user) {
    return next (new ErrorHandler("User Already Register", 400))
  }
  user = await Users.create({ fullName, email, password })
  res.status(200).json({
    success: true,
    message: "User Register Successfully"
  })

 })

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return next (new ErrorHandler("Please fill all inputs in the form"))
  }
  if (password !== confirmPassword) {
    return next (new ErrorHandler("Password and Confirm Password does,nt match"))
  }
  const user = await Users.findOne({ email }).select("+password")
  if (!user) {
    return next(new ErrorHandler("Invalid Password or Email"))
  }

  const isPasswordMatch = await user.comparePassword(password)
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Password or Email"))
  }

  res.status(200).json({
    success: true,
    message: "User Login successfully"
  })
 })

export const logOut = catchAsyncError(async(req, res, next) => {
  res.status(200).json({
    success: true,
    message: "User Logout Successfully"
   })
 })


export const getUsers = catchAsyncError(async(rew, res, next) => {
  const users = await Users.find()
  res.status(200).json({
    success: true,
    users
  })
 })
