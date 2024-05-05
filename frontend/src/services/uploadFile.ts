import { ApiUploadFileResponse, User } from "../types";
import { API_URL } from "./config";

export const uploadFile = async (file: File): Promise<[Error, null, null] | [null, string, User[]]> => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const res = await fetch(`${API_URL}/api/files`, {
      method: 'POST',
      body: formData
    })
    const result = await res.json() as ApiUploadFileResponse
    const { message, data } = result
    if (!res.ok) return [new Error(message), null, null]
    return [null, message, data]
  } catch (error) {
    if (error instanceof Error) return [error, null, null]
  }

  return [new Error('Error desconocido'), null, null]
}