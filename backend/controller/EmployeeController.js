import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorMiddleWare.js";
import Employee from "../model/Employee.js"
import WithdrawalEmployee from "../model/WithdrawalEmployee.js";

export const addEmployee = catchAsyncError(async (req,res,next) => {
  const { firstName, lastName, email, phone, gender, nic } = req.body;

  if (!firstName || !lastName || !email || !phone || !gender || !nic) {
   return next(new ErrorHandler("Please Fill all Input in the form", 400))
  }

  await Employee.create({firstName, lastName, email, phone, gender, nic})
  res.status(200).json({
    success: true,
    message: "New Employee Added Successfully"
  })
})


export const getAllEmployee = catchAsyncError(async(req,res,next) => {
  const users = await Employee.find()
  res.status(200).json({
    success: true,
    users
  })
})

export const getOneEmployee = catchAsyncError(async(req, res, next) => {
  const {id} = req.params
  const employee = await Employee.findById(id)
  if (!employee) {
    return next (new ErrorHandler("Employee Not Found", 400))
  }

  res.status(200).json({
    success: true,
    employee
  })
})


export const UpdateEmployee = catchAsyncError(async(req,res,next) => {
  const { id } = req.params;

  const employee = await Employee.findById(id)

  if (!employee) {
    return next (new ErrorHandler("Employee not found", 400))
  }

  const updateEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json({
    success: true,
    message: "employee update successfully",
    updateEmployee
  })
})

export const deleteEmployee = catchAsyncError(async (req, res, next) => {
  const { id } = req.params
  let employee = await Employee.findById(id)
  if (!employee) {
    return next (new ErrorHandler("Employee not found", 400))
  }
  await Employee.findByIdAndDelete(id)

  res.status(200).json({
    success: true,
    message: "Employee delete successfully"
  })
})




export const withdrawalEmployee = catchAsyncError(async (req, res, next) => {

  // Move student to withdrawn
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    return next(new ErrorHandler("Employee not found", 400))
  };

  // Create withdrawn record
  const withdrawn = new WithdrawalEmployee({
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    gender: employee.gender,
    phone: employee.phone,
    nic: employee.nic,
    // reason: req.body.reason
  });
  await withdrawn.save();

  // Remove from current students
  await Employee.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Employee withdrawn successfully",

  });
})


export const searchEmployee = catchAsyncError(async (req, res, next) => {
  const { firstName, email, phone } = req.query;
  let filter = {};

  if (firstName) {
    filter.firstName = { $regex: firstName, $options: 'i' }; // case-insensitive match
  }
  if (email) {
    filter.email = { $regex: email, $options: 'i' };
  }

  if (phone) {
    filter.phone = { $regex: phone, $options: 'i' };
  }

  const employee = await Employee.find(filter);
  res.json(employee);
})


// export const restoreEmployee = catchAsyncError(async(req, res, next) => {
//   // Find in withdrawn collection
//   const withdrawalEmployee = await WithdrawalEmployee.findById(req.params.id);
//   if (!withdrawalEmployee) {
//     return next(new ErrorHandler("Employee not found in archive", 400))

//   }

//   // Insert back into main collection
//   const restored = await Employee.create(withdrawalEmployee.toObject());

//   // Remove from withdrawn collection
//   await WithdrawalEmployee.findByIdAndDelete(req.params.id);

//   res.status(200).json({
//     success:true,
//     message: 'Student restored successfully',
//     restored
//   });
// })
