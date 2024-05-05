import { ChangeEvent, useEffect, useState } from "react";
import { User } from "../types";
import { searchUsers } from "../services/users";
import { toast } from "react-toastify";
import { useDebounce } from "../hooks/useDebounce";
import { UsersTable } from "./UsersTable";
import { Search } from "./Search";
import { SeparatorHorizontal } from "./SeparatorHorizontal";

export const Users = ({ initialData }: {initialData: User[]}) => {
  const getURLSearch = () => {
    const search = new URLSearchParams(window.location.search).get('q')
    return search ?? ''
  }

  const [data, setData] = useState<User[]>(initialData)
  const [search, setSearch] = useState(getURLSearch())
  const debouceSearch = useDebounce({ value: search })

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  // Busqueda por url y que no se cree un historial
  useEffect(() => {
    const newPathname = debouceSearch === '' ? window.location.pathname : `?q=${debouceSearch}`
    window.history.replaceState({}, '', newPathname)
  }, [debouceSearch])

  useEffect(() => {
    if (debouceSearch === '') {
      setData(initialData)
      return
    }
    searchUsers({ search: debouceSearch })
      .then(([err, data]) => {
        if (err) {
          toast.error(err.message)
          return
        }
        setData(data)
      })
  }, [debouceSearch, initialData])



  return (
    <section>
      <SeparatorHorizontal />

      <Search handleSubmit={handleSubmit} getURLSearch={getURLSearch} handleSearch={handleSearch} />

      <UsersTable users={data} />
    </section>
  )
}