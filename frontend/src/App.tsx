import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AppStatus, User } from './types';
import { Users } from './components/Users';
import { APP_STATUS } from './constants';
import { FormInputFile } from './components/FormInputFile';



function App() {
  const [status, setStatus] = useState<AppStatus>(APP_STATUS.IDLE)
  const [users, setUsers] = useState<User[]>([])

  const showInput = status !== APP_STATUS.UPLOAD

  return (
    <main>
      <h1 className='text-5xl'>Prueba técnica</h1>
      <h2 className='text-3xl'>React + Node</h2>
      <p className='text-info mt-2'>Ingresar un archivo .csv, guardarlo y retornar valores según un filtro.</p>
      
      { showInput && <FormInputFile status={status} setStatus={setStatus} setUsers={setUsers} /> }

      {status === APP_STATUS.UPLOAD && <Users initialData={users} />}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />
    </main>
  )
}

export default App
