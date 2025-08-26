import express from "express"
import { getUsers, login, logOut, Register } from "../controller/RegisterController.js";



const router = express.Router()

router.post("/register", Register)
router.post("/login", login)
router.get("/logout", logOut)
router.get("/getuser", getUsers)
export default router;
