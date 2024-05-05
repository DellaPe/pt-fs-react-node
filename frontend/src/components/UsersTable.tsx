import { User } from "../types"

export const UsersTable = ({ users }: { users: User[] }) => {
  return (
  <article className="mt-4"> 
    <div className="overflow-x-auto">
      <table className="table table-zebra bg-neutral">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th className="hidden md:block">Edad</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          { users.length === 0 && 
            <tr>
              <td colSpan={5} className='text-center'>No hay resultados</td>
            </tr>
          }
          { users.length > 0 && users.map((user, index) => (
            <tr key={user.id} className={`${index % 2 ? '' : ''}`}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td className="hidden md:block">{user.age}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </article>
  )
}