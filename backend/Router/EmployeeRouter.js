import express from "express"
import { addEmployee, deleteEmployee, getAllEmployee, getOneEmployee, searchEmployee, UpdateEmployee, withdrawalEmployee } from "../controller/EmployeeController.js";




const router = express.Router()

router.post("/addemployee", addEmployee)
router.get('/getemployees', getAllEmployee)
router.get('/getOneEmployee/:id', getOneEmployee)
router.put('/updateemployee/:id', UpdateEmployee)
router.delete("/employeedelete/:id", deleteEmployee)
router.post("/withdrawal/:id", withdrawalEmployee)
router.get("/search", searchEmployee)
// router.post("/restore/:id", restoreEmployee)

export default router;
