import { APP_STATUS } from "./constants"

export type AppStatus = typeof APP_STATUS[keyof typeof APP_STATUS]

export type User = {
  id: number
  username: string
  role: string
  age: number
  city: string
}

export type ApiUploadFileResponse = { data: User[],  message: string }

export type ApiSearchUsersResponse = { data: User[] }