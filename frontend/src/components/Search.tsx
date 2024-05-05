import { ChangeEvent } from "react"

type Props = {
  handleSubmit: (event: ChangeEvent<HTMLFormElement>) => void
  getURLSearch: () => string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Search = ({handleSubmit, getURLSearch, handleSearch}: Props) => {
  return (
  <article>
    <form onSubmit={handleSubmit}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Filtro</span>
        </div>
        <input type="text" name="search" placeholder="Ingresar filtro" defaultValue={getURLSearch()} onChange={handleSearch} className="input input-sm md:input-lg input-bordered w-full max-w-xs" />
      </label>
    </form>
  </article>
  )
}