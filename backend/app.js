import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"
import { config } from "dotenv";
import { dbConnection } from "./dbConnection/dbConnection.js";
import employeeRouter from "./Router/EmployeeRouter.js"
import { errorMiddleWare } from "./middleware/errorMiddleWare.js"
import userRouter from "./Router/UserRouter.js"
import withdarwalRouter from "./Router/WithdrawalRouter.js"


const app = express()

config({ path: "./config/config.env" })

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))


app.use("/employee", employeeRouter)
app.use("/user", userRouter)
app.use("/withdrawal", withdarwalRouter)


dbConnection()

app.use(errorMiddleWare)

export default app;
