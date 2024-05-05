import { useState } from "react"
import { AppStatus, User } from "../types"
import { APP_STATUS, BUTTON_TEXT } from "../constants"
import { uploadFile } from "../services/uploadFile"
import { toast } from "react-toastify"
import { SeparatorHorizontal } from "./SeparatorHorizontal"

type Props = {
  status: AppStatus
  setStatus: (status: AppStatus) => void
  setUsers: (users: User[]) => void
}

export const FormInputFile = ({status, setStatus, setUsers} : Props) => {
  const [file, setFile] = useState<File | null>(null)
  const disabledButton = status !== APP_STATUS.READY_TO_UPLOAD

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const [file] = event.target.files ?? []
    if (!file) return
    setStatus(APP_STATUS.READY_TO_UPLOAD)
    setFile(file)
  }

  const handleOnSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file || status !== APP_STATUS.READY_TO_UPLOAD) return
    setStatus(APP_STATUS.UPLOADING)
    const [err, message, data] = await uploadFile(file)
    if (err) {
      setStatus(APP_STATUS.ERROR)
      toast.error(err.message)
      return
    }
    setStatus(APP_STATUS.UPLOAD)
    toast.success(message)
    setUsers(data)
  }


  return (
    <section>
      <SeparatorHorizontal />

      <form onSubmit={handleOnSumbit} className='flex flex-col justify-center items-center mt-4 gap-4'>
        <input type='file' id='file-upload' accept='.csv' className='file-input file-input-xs sm:file-input-lg' onChange={handleInputChange} /> 
        <button className="btn btn-xs btn-outline btn-neutral md:btn-lg" type='submit' disabled={disabledButton}>
          {BUTTON_TEXT[status]}
        </button>
      </form>
    </section>
  )
}