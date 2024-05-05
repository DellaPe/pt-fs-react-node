import { Router } from "express"
import { ControllerApi } from "./api.controller"
import multer from "multer"

export const ROUTES_API = {
  FILES: '/files',
  USERS: '/users',
}


const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

export const createApiRouter = () => {
  const apiRouter = Router()

  apiRouter.post(ROUTES_API.FILES, upload.single('file'), ControllerApi.postFiles)

  apiRouter.get(ROUTES_API.USERS, ControllerApi.getUsers)
  
  return apiRouter
}