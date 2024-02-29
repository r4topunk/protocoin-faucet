import dotenv from "dotenv"
dotenv.config()

import express, { NextFunction, Request, Response } from "express"
import morgan from "morgan"

const PORT: number = parseInt(`${process.env.PORT || 3001}`)

const app = express()

app.use(morgan("tiny"))

app.post(
  "/mint/:wallet",
  async (req: Request, res: Response, next: NextFunction) => {
    res.json(true)
  }
)

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`)
})
