import React from 'react'
import './SearchBar.css'
import searchIcon from '../../assets/1382519138.svg'

const SearchBar = () => (
    <div className = 'bar'>
        <input type = 'text' id = 'inputSearch' placeholder='Busca en la red sin que te rastreen'></input>
        <div className='buttonContainer'>
        <img id = 'searchIcon' src = {searchIcon}></img>
        <input type = 'button' id = 'button'></input>
        </div>
    </div>
)

export {SearchBar}