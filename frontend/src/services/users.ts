import { type ApiSearchUsersResponse, User } from "../types"
import { API_URL } from "./config"
import { ErrorConnection } from "./errors"

export const searchUsers = async ({ search }: { search: string }): Promise<[Error, null] | [null, User[]]> => {
  try {
    const response = await fetch(`${API_URL}/api/users?q=${search}`)
    const json = await response.json() as ApiSearchUsersResponse
    return [null, json.data]
  } catch (error) {
    return [ErrorConnection(), null]
  }
}