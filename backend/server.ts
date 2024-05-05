import express from 'express'
import cors from 'cors'
import { createApiRouter } from './api/api.router'
import { API } from './rutes'

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT ?? 3000

app.use(API.BASE, createApiRouter())



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})