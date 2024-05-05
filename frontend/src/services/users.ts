import { type ApiSearchUsersResponse, User } from "../types"
import { API_URL } from "./config"

export const searchUsers = async ({ search }: { search: string }): Promise<[Error, null] | [null, User[]]> => {
  try {
    const response = await fetch(`${API_URL}/api/users?q=${search}`)
    const json = await response.json() as ApiSearchUsersResponse
    return [null, json.data]
  } catch (error) {
    if (error instanceof Error) return [error, null]
  }
  return [new Error('Error desconocido'), null]
}