import { User } from "./api.entities"
import { MESSAGES_API } from "./api.messages"
import { ApiModel } from "./api.model"
import csvToJson from 'convert-csv-to-json'

const { ERROR, SUCCESS} = MESSAGES_API

export class ControllerApi {
  constructor() {}
  static postFiles = async (req, res) => {
    const { file } = req
    // Validar
    if (!file) return res.status(400).json({ message: ERROR.FILES.REQUIRED })
    if (file.mimetype !== 'text/csv') return res.status(400).json({ message: ERROR.FILES.TYPE })
    try {
      // Obtener el file (buffer) y convertirlo a json
      const rawCsv = Buffer.from(file.buffer).toString('utf8')
      const users = csvToJson.fieldDelimiter(',').csvStringToJson(rawCsv) as User[]
      const response = await ApiModel.postFiles(users)
      if (!response.success) return res.status(500).json({ message: ERROR.FILES.ERROR  })
      return res.status(200).json({ message: SUCCESS.FILES_POST, data: response.data })
    } catch (error) {
      return res.status(500).json({ message: ERROR.FILES.ERROR })
    }
  }

  static getUsers = async (req, res) => {
    const { q } = req.query
    // Validar
    if (!q) return res.status(400).json({ message: ERROR.USERS.Q_REQUIRED })
    if (typeof q !== 'string') return res.status(400).json({ message: ERROR.USERS.TYPE })
    // Insensitive case
    const search = q.toLowerCase()
    const response = await ApiModel.getUsers(search)
    if (!response.success) return res.status(500).json({ message: ERROR.USERS.ERROR })
    return res.status(200).json({ data: response.data }) 
  }

}