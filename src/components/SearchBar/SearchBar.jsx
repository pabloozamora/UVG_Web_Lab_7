import React from 'react'
import './SearchBar.css'

const SearchBar = () => (
    <div className = 'bar-container'>
        <input type = 'text' id = 'inputSearch' placeholder='Busca en la red sin que te rastreen' />
        <input className="search" type="submit" value="S" />
    </div>
)

export default SearchBar