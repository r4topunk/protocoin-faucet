import dotenv from "dotenv"
dotenv.config()

import cors from "cors"
import express, { NextFunction, Request, Response } from "express"
import helmet from "helmet"
import morgan from "morgan"
import { mintAndTransfer } from "./Web3Provider"

const app = express()
app.use(morgan("tiny"))
app.use(helmet())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
)

const nextMint = new Map<string, number>()

app.post(
  "/mint/:wallet",
  async (req: Request, res: Response, next: NextFunction) => {
    const wallet = req.params.wallet

    if (nextMint.has(wallet) && nextMint.get(wallet)! > Date.now())
      return res.status(400).json("Try again tomorrow.")

    try {
      const tx = await mintAndTransfer(wallet)
      res.json(tx)
    } catch (err: any) {
      console.error(err)
      res.status(500).json(err.message)
    }
    nextMint.set(wallet, Date.now() + 1000 * 60 * 60 * 24)
  }
)

const PORT: number = parseInt(`${process.env.PORT || 3001}`)
app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`)
})
