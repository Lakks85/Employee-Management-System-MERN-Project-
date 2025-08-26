import express from "express"
import { deleteEmployee, getWithDrawalEmployee, restoreEmployee, searchWithdrawalEmployee } from "../controller/WithdrawalController.js"
// import { searchEmployee } from "../controller/EmployeeController.js"


const router = express.Router()


router.get("/getwithdrawal", getWithDrawalEmployee)
router.get("/searchwithdrawal", searchWithdrawalEmployee)
router.post("/restore/:id", restoreEmployee)
router.delete("/employeedelete/:id", deleteEmployee)

// router.post("/restore/:id", restoreEmployee)

export default router;
