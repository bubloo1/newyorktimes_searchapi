import React, {useState} from 'react'


const SearchBar = ({searchText}) => {
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    searchText(search)
    setSearch('')
  }

  
  const [search, setSearch] = useState('')

  return (
    <div className='container p-4'>
      <div className="row d-flex justify-content-center">
        <div className="col">
          <form className="search-form" onSubmit = {handleSubmit}>
            <input 
              className='search'
              type="text"
              value={search}
              onChange = {(e) => setSearch(e.target.value)}
              placeholder = "Search(By Politics, science, etc..)"
              required
            />
            <button className='search-button'>Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchBar