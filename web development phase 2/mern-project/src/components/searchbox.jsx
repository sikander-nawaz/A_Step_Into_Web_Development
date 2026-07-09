import React from 'react'

const Searchbox = ({search, setSearch}) => {
  return (
    <div>

        <input type="text" 
        value={search}
        placeholder='search something' 
        onChange={(e)=>setSearch(e.target.value)}
            />

    </div>
  )
}

export default Searchbox