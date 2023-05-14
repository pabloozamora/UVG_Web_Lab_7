import React from 'react'
import './SearchBar.css'
import searchIcon from '../../assets/1382519138.svg'

const SearchBar = () => (
    <div className = 'bar-container'>
        <input type = 'text' id = 'inputSearch' placeholder='Busca en la red sin que te rastreen'></input>
        <input className="search" type="submit" value="S" />
    </div>
)

export {SearchBar}