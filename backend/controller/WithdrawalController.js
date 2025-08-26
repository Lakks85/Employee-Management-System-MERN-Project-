import { catchAsyncError } from "../middleware/catchAsyncError.js"
import ErrorHandler from "../middleware/errorMiddleWare.js";
import Employee from "../model/Employee.js";
import WithdrawalEmployee from "../model/WithdrawalEmployee.js";


export const getWithDrawalEmployee = catchAsyncError(async (req, res, next) => {
  const employee = await WithdrawalEmployee.find()
  res.status(200).json({
    success: true,
    employee
  })
})

export const searchWithdrawalEmployee = catchAsyncError(async (req, res, next) => {
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

  const employee = await WithdrawalEmployee.find(filter);
  res.json(employee);
})


export const restoreEmployee = catchAsyncError(async (req, res, next) => {
  try {
    const employeeId = req.params.id;

    // Find the withdrawn student
    const withdrawnEmployee = await WithdrawalEmployee.findById(employeeId);
    if (!withdrawnEmployee) {
      return next(new ErrorHandler("Employee not found", 400))
    }

    // Copy to CurrentStudents
    const restoredEmployee = new Employee(withdrawnEmployee.toObject());
    await restoredEmployee.save();

    // Remove from WithdrawnStudents
    await WithdrawalEmployee.findByIdAndDelete(employeeId);

    res.json({ success: true, message: 'Student restored successfully', employee: restoredEmployee });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
})

export const deleteEmployee = catchAsyncError(async (req, res, next) => {
  const { id } = req.params
  let employee = await WithdrawalEmployee.findById(id)
  if (!employee) {
    return next(new ErrorHandler("Employee not found", 400))
  }
  await WithdrawalEmployee.findByIdAndDelete(id)

  res.status(200).json({
    success: true,
    message: "Employee delete successfully"
  })
})
