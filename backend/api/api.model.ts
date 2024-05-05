import { RETURN_ERROR, RETURN_SUCCESS } from "../responses.constants";
import { ReturnModelSuccessAndData } from "../types/return-models.type";
import { User } from "./api.entities";

let userData: User[] = []

export class ApiModel {
  constructor() {}

  static async postFiles(users: User[]): Promise<ReturnModelSuccessAndData<User[]>> {
    try {
      userData = users
      return {data: users, ...RETURN_SUCCESS} 
    } catch (error) {
      return RETURN_ERROR
    }
  }

  static async getUsers(search: string): Promise<ReturnModelSuccessAndData<User[]>> {
    try {
      const users = userData.filter(row => {
        return Object
          .values(row)
          .some(value => value.toString().toLowerCase().includes(search))
      })
      return { success: true, data: users }
    } catch (error) {
      return RETURN_ERROR
    }
  }
}